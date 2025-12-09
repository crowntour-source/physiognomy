import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe - you'll need to set STRIPE_SECRET_KEY in your .env.local file
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-12-18.acacia',
});

export async function POST(request: Request) {
  try {
    const { amount = 100 } = await request.json(); // $1.00 in cents

    // Create a payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount, // Amount in cents ($1.00)
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
      description: 'Korean Face Reading Analysis',
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error: any) {
    console.error('Payment error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create payment intent' },
      { status: 500 }
    );
  }
}
