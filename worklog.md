---
Task ID: 1
Agent: Main Agent
Task: Analyze and fix errors in ziadamrme-main Next.js project

Work Log:
- Extracted ziadamrme-main.zip to /home/z/my-project/ziadamrme-main/
- Analyzed all project files (page.tsx, layout.tsx, components, config files)
- Ran `npm install` and `npx next build` - found TypeScript build error
- Identified 27 total issues across 6 categories
- Fixed all critical and high-priority issues:
  - Removed `asChild` prop from Button (build error - @base-ui/react doesn't support asChild)
  - Replaced Button+asChild pattern with direct `<a>` tag styled as button
  - Added `dir="rtl"` and `lang="ar"` to html element
  - Updated metadata (title, description, OpenGraph, Twitter Card)
  - Fixed `border-3` → `border-[3px]`
  - Added `relative` to root container div
  - Removed unnecessary `'use client'` directive
  - Moved `socialLinks` array outside component function
  - Fixed `target="_blank"` on mailto: link
  - Added `aria-hidden="true"` to all decorative SVGs
  - Added `aria-hidden="true"` to background decoration div
  - Added `aria-label` to social links for accessibility
  - Updated `bg-gradient-to-*` → `bg-linear-to-*` (Tailwind v4)
  - Changed `components.json` `rtl: false` → `rtl: true`
- Ran final build - SUCCESS (all pages generated statically)

Stage Summary:
- Build passes successfully with no errors
- All 27 issues identified and critical/high ones fixed
- Project is now ready for deployment
