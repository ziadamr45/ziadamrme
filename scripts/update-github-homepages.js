#!/usr/bin/env node

/**
 * GitHub Repo Homepage URL Updater
 *
 * This script updates the homepage URL for GitHub repositories using the GitHub API.
 *
 * Usage:
 *   node update-github-homepages.js [GITHUB_TOKEN]
 *
 * Or set the GITHUB_TOKEN environment variable:
 *   GITHUB_TOKEN=ghp_xxx node update-github-homepages.js
 *
 * The script will:
 *   1. Show current homepage URLs for all repos
 *   2. Compare against the desired URLs defined below
 *   3. Ask which repos to update
 *   4. Update the selected repos via the GitHub API
 */

const OWNER = "ziadamr45";

// ============================================================
// CONFIG: Edit this object to set the correct homepage URLs
// Key = repo name, Value = desired homepage URL
// Set a value to "" to clear the homepage
// ============================================================
const DESIRED_HOMEPAGES = {
  "Battle-of-Questions": "https://ma3raka.vercel.app/",
  "Bawabet-elhadas":   "https://bawabet-elhadas.vercel.app",
  "Eah-Elkalam":       "https://eah-elkalam.vercel.app",
  "Eleqbal-Form":      "https://eleqbal-amrsobhy.vercel.app",
  "Elmokhber":         "https://elmokhber.vercel.app",
  "Hammel-w-Engez":    "https://hammel-w-engez.vercel.app",
  "quadra_studio":     "https://quadra-studio.vercel.app",
  "Radio":             "https://esma3radio.vercel.app",
  "Tammeny":           "https://tammeny24.vercel.app/login",
  "Weather-App":       "https://weather-sand-phi.vercel.app",
  "ziadamr45":         "https://github.com/ziadamr45",
  "ziadamrme":         "https://ziadamrme.vercel.app",
};
// ============================================================

async function githubApi(token, endpoint, method = "GET", body = null) {
  const url = `https://api.github.com${endpoint}`;
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "update-github-homepages-script",
  };

  const options = { method, headers };
  if (body) {
    options.body = JSON.stringify(body);
    headers["Content-Type"] = "application/json";
  }

  const res = await fetch(url, options);

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GitHub API error ${res.status}: ${text}`);
  }

  // 204 No Content
  if (res.status === 204) return null;

  return res.json();
}

async function getCurrentHomepages(token) {
  const repos = await githubApi(token, `/users/${OWNER}/repos?per_page=100`);
  const result = {};

  for (const repo of repos) {
    if (repo.name in DESIRED_HOMEPAGES) {
      result[repo.name] = repo.homepage || "";
    }
  }

  return result;
}

async function updateHomepage(token, repoName, homepage) {
  return githubApi(token, `/repos/${OWNER}/${repoName}`, "PATCH", { homepage });
}

async function main() {
  // Get token from argument or env
  const token = process.argv[2] || process.env.GITHUB_TOKEN;

  if (!token) {
    console.error("Error: GitHub Personal Access Token required.");
    console.error("Usage: node update-github-homepages.js <TOKEN>");
    console.error("   or: GITHUB_TOKEN=<TOKEN> node update-github-homepages.js");
    process.exit(1);
  }

  console.log("=== GitHub Repo Homepage URL Updater ===\n");
  console.log(`Owner: ${OWNER}\n`);

  // Step 1: Fetch current homepages
  console.log("Fetching current homepage URLs from GitHub...");
  let currentHomepages;
  try {
    currentHomepages = await getCurrentHomepages(token);
  } catch (err) {
    console.error("Failed to fetch repos:", err.message);
    process.exit(1);
  }

  // Step 2: Compare current vs desired
  console.log("\n--- Current vs Desired Homepage URLs ---\n");

  const toUpdate = [];

  for (const [repo, desiredUrl] of Object.entries(DESIRED_HOMEPAGES)) {
    const currentUrl = currentHomepages[repo];
    const displayCurrent = currentUrl || "(empty)";
    const displayDesired = desiredUrl || "(empty)";
    const needsUpdate = currentUrl !== desiredUrl;
    const status = needsUpdate ? "❌ NEEDS UPDATE" : "✅ OK";

    console.log(`[${status}] ${repo}`);
    console.log(`  Current: ${displayCurrent}`);
    console.log(`  Desired: ${displayDesired}`);
    console.log();

    if (needsUpdate) {
      toUpdate.push({ repo, currentUrl, desiredUrl });
    }
  }

  if (toUpdate.length === 0) {
    console.log("✨ All homepage URLs are already correct! No changes needed.");
    return;
  }

  console.log(`\n--- ${toUpdate.length} repo(s) need updating ---\n`);

  // Step 3: Interactive selection
  const readline = await import("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const question = (prompt) =>
    new Promise((resolve) => rl.question(prompt, resolve));

  console.log("Repos to update:");
  toUpdate.forEach((item, i) => {
    console.log(
      `  ${i + 1}. ${item.repo}: "${item.currentUrl || "(empty)"}" → "${item.desiredUrl || "(empty)"}"`
    );
  });
  console.log();

  const answer = await question(
    "Update all? (y/n) or enter comma-separated numbers (e.g. 1,3,5): "
  );

  let selected;
  if (answer.toLowerCase() === "y" || answer.toLowerCase() === "yes") {
    selected = toUpdate;
  } else if (answer.toLowerCase() === "n" || answer.toLowerCase() === "no") {
    console.log("Aborted. No changes made.");
    rl.close();
    return;
  } else {
    const indices = answer
      .split(",")
      .map((s) => parseInt(s.trim(), 10) - 1)
      .filter((i) => i >= 0 && i < toUpdate.length);
    selected = indices.map((i) => toUpdate[i]);
  }

  if (selected.length === 0) {
    console.log("No repos selected. Aborted.");
    rl.close();
    return;
  }

  // Step 4: Apply updates
  console.log(`\nUpdating ${selected.length} repo(s)...\n`);

  let successCount = 0;
  let failCount = 0;

  for (const item of selected) {
    try {
      await updateHomepage(token, item.repo, item.desiredUrl);
      console.log(`  ✅ ${item.repo}: updated to "${item.desiredUrl || "(empty)"}"`);
      successCount++;
    } catch (err) {
      console.error(`  ❌ ${item.repo}: failed - ${err.message}`);
      failCount++;
    }
  }

  console.log(
    `\nDone! ${successCount} updated, ${failCount} failed out of ${selected.length} repos.`
  );

  rl.close();
}

main().catch((err) => {
  console.error("Unexpected error:", err);
  process.exit(1);
});
