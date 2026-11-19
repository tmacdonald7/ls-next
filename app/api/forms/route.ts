import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Replaces Netlify Forms (the site moved to Vercel on 2026-11-19). The forms
// post here; each submission is emailed to Tom, as Netlify's
// submission_created hooks did.
export const runtime = "nodejs";

const NOTIFY_TO = "tmacdonald7@gmail.com";
const SITE = "lochsidestudio.com";
const FORMS = new Set([
  "contact",
  "voiceprompt-beta-access",
  "voiceprompt-feedback",
]);
const SKIP = new Set(["form-name", "bot-field"]);

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

export async function POST(request: NextRequest) {
  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const formName = String(data.get("form-name") ?? "");
  if (!FORMS.has(formName))
    return NextResponse.json({ ok: false }, { status: 400 });

  // Honeypot: real visitors never fill the hidden field. Answer as if it worked.
  if (String(data.get("bot-field") ?? ""))
    return NextResponse.json({ ok: true });

  const lines: string[] = [];
  for (const [key, value] of data.entries()) {
    if (!SKIP.has(key) && typeof value === "string")
      lines.push(`${key}: ${value.trim() || "-"}`);
  }
  const email = String(data.get("email") ?? "").trim();

  try {
    const user = requiredEnv("ZOHO_SMTP_USER");
    await nodemailer
      .createTransport({
        host: requiredEnv("ZOHO_SMTP_HOST"),
        port: Number(requiredEnv("ZOHO_SMTP_PORT")),
        secure: true,
        auth: { user, pass: requiredEnv("ZOHO_SMTP_PASSWORD") },
      })
      .sendMail({
        from: `"${SITE}" <${user}>`,
        to: NOTIFY_TO,
        replyTo: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : undefined,
        subject: `New ${formName} form submission from ${SITE}`,
        text: [
          `Form: ${formName}`,
          "",
          ...lines,
          "",
          `Received: ${new Date().toISOString()}`,
        ].join("\n"),
      });
  } catch (error) {
    console.error("Form email failed", {
      form: formName,
      error: error instanceof Error ? error.message : "Unknown error",
    });
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
