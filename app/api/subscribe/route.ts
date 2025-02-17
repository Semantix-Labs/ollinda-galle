// types/index.ts
export interface SubscribeResponse {
    message: string;
  }
  
  export interface SubscribeRequest {
    email: string;
  }
  
  // app/api/subscribe/route.ts
  import { NextResponse } from 'next/server';
  import nodemailer from 'nodemailer';

  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_APP_PASSWORD
    }
  });
  
  export async function POST(
    request: Request
  ): Promise<NextResponse<SubscribeResponse>> {
    try {
      const body: SubscribeRequest = await request.json();
      const { email } = body;
  
      if (!email) {
        return NextResponse.json(
          { message: 'Email is required' },
          { status: 400 }
        );
      }
  
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { message: 'Invalid email format' },
          { status: 400 }
        );
      }
  
      // Send confirmation email to subscriber
      await transporter.sendMail({
        from: process.env.GMAIL_EMAIL,
        to: email,
        subject: 'Newsletter Subscription Confirmation',
        html: `
          <h2>Thank you for subscribing!</h2>
          <p>We're excited to have you join our newsletter. You'll receive exclusive updates, exciting news, and special offers.</p>
        `
      });
  
      // Send notification to admin
      await transporter.sendMail({
        from: process.env.GMAIL_EMAIL,
        to: process.env.RECIPIENT_EMAIL as string,
        subject: 'New Newsletter Subscription',
        html: `
          <h2>New Newsletter Subscriber</h2>
          <p>A new user has subscribed to the newsletter:</p>
          <p>Email: ${email}</p>
        `
      });
  
      return NextResponse.json(
        { message: 'Subscription successful' },
        { status: 200 }
      );
    } catch (error) {
      console.error('Error processing subscription:', error);
      return NextResponse.json(
        { message: 'Error processing subscription' },
        { status: 500 }
      );
    }
  }
  