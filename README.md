# 관상 - Korean Face Reading App

A beautiful web application that provides AI-powered Korean face reading (Gwansang, 관상) analysis. Upload your photo and discover insights about your personality, fortune, and destiny through the ancient art of Korean physiognomy.

## Features

- 🎯 **AI-Powered Analysis**: Uses OpenAI's Vision API to analyze facial features
- 💎 **Affordable**: Only $1 per reading
- 🎨 **Beautiful UI**: Korean-themed design with traditional colors
- 📱 **Responsive**: Works on desktop, tablet, and mobile
- 🌟 **Celebrity Examples**: See face readings of famous K-pop stars
- 🔒 **Secure Payments**: Stripe integration for safe transactions
- 🇰🇷 **Traditional Wisdom**: Based on authentic Korean physiognomy principles

## Face Reading Analysis

The app analyzes these key facial features according to Korean physiognomy:

1. **Forehead (이마)** - Intelligence, wisdom, and early life fortune
2. **Eyes (눈)** - Personality, honesty, and emotional intelligence
3. **Nose (코)** - Financial fortune and career success
4. **Mouth (입)** - Communication skills and relationship harmony
5. **Chin (턱)** - Willpower, determination, and late life fortune

## Setup Instructions

### Prerequisites

- Node.js 18+ installed
- OpenAI API account
- Stripe account (for payment processing)

### Installation

1. Clone or navigate to this directory:
```bash
cd Physiognomy
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```bash
cp .env.local.example .env.local
```

4. Add your API keys to `.env.local`:
```env
OPENAI_API_KEY=your_openai_api_key_here
STRIPE_SECRET_KEY=your_stripe_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key_here
```

### Getting API Keys

#### OpenAI API Key
1. Go to https://platform.openai.com/api-keys
2. Sign up or log in
3. Create a new API key
4. Copy the key to your `.env.local` file

#### Stripe API Keys
1. Go to https://dashboard.stripe.com/apikeys
2. Sign up or log in
3. Copy the "Secret key" and "Publishable key"
4. Add both keys to your `.env.local` file

### Running the App

Development mode:
```bash
npm run dev
```

Production build:
```bash
npm run build
npm start
```

Open http://localhost:3000 in your browser.

## Usage

1. **Upload Photo**: Click the upload area and select a clear photo of your face
2. **Analyze**: Click the "Analyze My Face - $1" button
3. **Payment**: Complete the $1 payment (in demo mode, payment is simulated)
4. **Results**: View your personalized face reading with insights about:
   - Overall personality assessment
   - Detailed analysis of each facial feature
   - Fortune indicators (wealth, health, career, love)

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI**: OpenAI GPT-4o Vision
- **Payments**: Stripe
- **Deployment**: Ready for Vercel, Netlify, or any Node.js host

## Customization

### Celebrity Examples

To add your own celebrity examples, edit the `celebrities` array in `app/page.tsx`:

```typescript
const celebrities = [
  {
    name: "Celebrity Name",
    image: "image_url_here",
    reading: "Face reading description"
  },
  // Add more celebrities...
];
```

### Color Theme

Customize the Korean color theme in `tailwind.config.js`:

```javascript
korean: {
  red: '#C8102E',    // Traditional Korean red
  blue: '#003478',   // Traditional Korean blue
  gold: '#D4AF37',   // Gold accent
  beige: '#F5F1E8',  // Warm background
},
```

## Demo Mode

If you don't have API keys yet, the app will work in demo mode with pre-defined responses. This is perfect for testing the UI and user flow.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Google Cloud Run
- Railway
- Render

## Important Notes

- This app is for entertainment purposes only
- Face reading interpretations are based on AI and traditional wisdom
- Photos are not stored - they're only used for analysis
- Ensure you have sufficient OpenAI API credits
- Test Stripe in test mode before going live

## Cost Considerations

- **OpenAI API**: ~$0.01-0.03 per image analysis with GPT-4o Vision
- **Stripe Fees**: 2.9% + $0.30 per transaction
- **Profit per $1 reading**: ~$0.65-0.67 after fees

## Support

For issues or questions:
- Check the OpenAI API documentation: https://platform.openai.com/docs
- Check the Stripe documentation: https://stripe.com/docs
- Review Next.js documentation: https://nextjs.org/docs

## License

This project is for educational and commercial use.

---

**Built with ❤️ using Next.js, OpenAI, and Stripe**

For entertainment purposes only. Face reading interpretations should not be used for making important life decisions.
