import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Website Contact Form" <contact@dimitrigerasimov.com>`,
      to: process.env.CONTACT_EMAIL,
      subject: `New message from ${name}`,
      text: `From ${name} <${email}>\n\n ${message}`,
      replyTo: email as string
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Email error:', err);
    return NextResponse.json({ error: 'Email failed' }, { status: 500 });
  }
}
