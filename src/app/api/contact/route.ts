import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { writeFile, readFile } from "fs/promises";
import { existsSync } from "fs";

// Simple in-memory rate limiting
const submissionTimes = new Map<string, number>();
const RATE_LIMIT_MS = 60_000; // 1 minute between submissions from same IP

const BACKUP_FILE = "/tmp/contact-submissions.json";

interface ContactSubmission {
  name: string;
  email: string;
  message: string;
  timestamp: string;
  ip: string;
}

async function saveToJsonBackup(submission: ContactSubmission) {
  try {
    let existing: ContactSubmission[] = [];
    if (existsSync(BACKUP_FILE)) {
      const data = await readFile(BACKUP_FILE, "utf-8");
      existing = JSON.parse(data);
    }
    existing.push(submission);
    await writeFile(BACKUP_FILE, JSON.stringify(existing, null, 2), "utf-8");
  } catch (err) {
    console.error("Failed to save contact submission to JSON backup:", err);
  }
}

export async function POST(request: Request) {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
    const lastSubmission = submissionTimes.get(ip);
    if (lastSubmission && Date.now() - lastSubmission < RATE_LIMIT_MS) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Please wait before sending another message." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, message } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Name must be at least 2 characters" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters" },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { error: "Message must be less than 5000 characters" },
        { status: 400 }
      );
    }

    // Update rate limit
    submissionTimes.set(ip, Date.now());

    // Clean old entries periodically
    if (submissionTimes.size > 1000) {
      const cutoff = Date.now() - RATE_LIMIT_MS;
      for (const [key, time] of submissionTimes) {
        if (time < cutoff) submissionTimes.delete(key);
      }
    }

    // Always save to JSON backup first (so we never lose a submission)
    const submission: ContactSubmission = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
      ip,
    };
    await saveToJsonBackup(submission);

    // Try to send email via nodemailer
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(smtpPort) || 587,
        secure: Number(smtpPort) === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"Portfolio Contact" <${smtpUser}>`,
        to: "ziad90216@gmail.com",
        replyTo: email.trim(),
        subject: `New message from ${name.trim()} via Portfolio`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #ea580c, #d97706); padding: 24px 32px;">
              <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 700;">New Contact Form Message</h1>
              <p style="margin: 4px 0 0; color: rgba(255,255,255,0.85); font-size: 13px;">Received ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" })}</p>
            </div>

            <!-- Body -->
            <div style="padding: 32px;">
              <!-- Sender Info -->
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; width: 80px;">Name</td>
                  <td style="padding: 8px 0; color: #111827; font-size: 15px; font-weight: 500;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
                  <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #ea580c; font-size: 15px; text-decoration: none; font-weight: 500;">${email}</a></td>
                </tr>
              </table>

              <!-- Divider -->
              <div style="border-top: 1px solid #e5e7eb; margin-bottom: 24px;"></div>

              <!-- Message -->
              <div style="background: #f9fafb; border-radius: 8px; padding: 20px; border: 1px solid #f3f4f6;">
                <p style="margin: 0 0 8px; color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
                <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </div>

            <!-- Footer -->
            <div style="padding: 16px 32px; background: #f9fafb; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">Sent from <strong>Ziad Amr Portfolio</strong> &mdash; Reply directly to this email to respond to ${name}.</p>
            </div>
          </div>
        `,
      });
    } else {
      // Fallback: log to console if SMTP not configured
      console.log("Contact form submission (SMTP not configured):", { name, email, message });
      console.log("Submission saved to JSON backup at:", BACKUP_FILE);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
