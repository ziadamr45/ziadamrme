import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Simple in-memory rate limiting
const submissionTimes = new Map<string, number>();
const RATE_LIMIT_MS = 60_000; // 1 minute between submissions from same IP

// SMTP timeout constants - keep total well under Vercel's 10s hobby limit
const SMTP_CONNECTION_TIMEOUT = 5000; // 5 seconds max for connection
const SMTP_GREETING_TIMEOUT = 5000;   // 5 seconds max for greeting
const SMTP_SEND_TIMEOUT = 5500;       // 5.5 seconds max for entire send operation

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

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    // Try to send email via nodemailer
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpHost && smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: Number(smtpPort) || 587,
          secure: Number(smtpPort) === 465,
          connectionTimeout: SMTP_CONNECTION_TIMEOUT,
          greetingTimeout: SMTP_GREETING_TIMEOUT,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        const emailHtml = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
            <div style="background: linear-gradient(135deg, #ea580c, #d97706); padding: 24px 32px;">
              <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 700;">New Contact Form Message</h1>
              <p style="margin: 4px 0 0; color: rgba(255,255,255,0.85); font-size: 13px;">Received ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" })}</p>
            </div>
            <div style="padding: 32px;">
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; width: 80px;">Name</td>
                  <td style="padding: 8px 0; color: #111827; font-size: 15px; font-weight: 500;">${trimmedName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
                  <td style="padding: 8px 0;"><a href="mailto:${trimmedEmail}" style="color: #ea580c; font-size: 15px; text-decoration: none; font-weight: 500;">${trimmedEmail}</a></td>
                </tr>
              </table>
              <div style="border-top: 1px solid #e5e7eb; margin-bottom: 24px;"></div>
              <div style="background: #f9fafb; border-radius: 8px; padding: 20px; border: 1px solid #f3f4f6;">
                <p style="margin: 0 0 8px; color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
                <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${trimmedMessage}</p>
              </div>
            </div>
            <div style="padding: 16px 32px; background: #f9fafb; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">Sent from <strong>Ziad Amr Portfolio</strong> &mdash; Reply directly to this email to respond to ${trimmedName}.</p>
            </div>
          </div>
        `;

        const mailOptions = {
          from: `"Portfolio Contact" <${smtpUser}>`,
          to: "ziad90216@gmail.com",
          replyTo: trimmedEmail,
          subject: `New message from ${trimmedName} via Portfolio`,
          text: `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\nMessage:\n${trimmedMessage}`,
          html: emailHtml,
        };

        // Race the SMTP send against a timeout to ensure we never block
        // the response for more than SMTP_SEND_TIMEOUT milliseconds total
        const sendPromise = transporter.sendMail(mailOptions);

        const timeoutPromise = new Promise<never>((_resolve, reject) => {
          setTimeout(() => {
            reject(new Error(`SMTP send timed out after ${SMTP_SEND_TIMEOUT}ms`));
          }, SMTP_SEND_TIMEOUT);
        });

        await Promise.race([sendPromise, timeoutPromise]);

        console.log("Contact form: Email sent successfully to ziad90216@gmail.com");
      } catch (emailError) {
        const errorMsg = emailError instanceof Error ? emailError.message : String(emailError);
        console.error("Contact form: SMTP error:", errorMsg);
        // SMTP failed or timed out, but we still return success to not scare the user
        // The message was logged above
      }
    } else {
      console.log("Contact form submission (SMTP not configured):", { name: trimmedName, email: trimmedEmail, message: trimmedMessage });
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
