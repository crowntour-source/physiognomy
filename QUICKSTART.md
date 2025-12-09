# Quick Start Guide

Get your Korean Face Reading app running in 5 minutes!

## 🚀 Fastest Way to Test (No API Keys Required)

The app works in **demo mode** without any API keys. Perfect for testing the UI and user experience!

```bash
cd Physiognomy
npm install
npm run dev
```

Open http://localhost:3000 and start testing!

In demo mode:
- ✅ Upload photos and see the UI
- ✅ Test the payment modal
- ✅ See sample face reading results
- ✅ Experience the full user flow

## 🔑 Adding Real AI Analysis (Optional)

To enable real AI-powered face reading:

### Step 1: Get OpenAI API Key

1. Go to https://platform.openai.com/api-keys
2. Sign up or log in
3. Click "Create new secret key"
4. Copy the key (starts with `sk-`)

### Step 2: Add to Your App

Create a `.env.local` file:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your key:

```env
OPENAI_API_KEY=sk-your-key-here
```

Restart the server:

```bash
npm run dev
```

Now when users upload photos, they'll get real AI-powered face readings!

## 💳 Adding Real Payments (Optional)

To enable real $1 payments:

### Step 1: Get Stripe Keys

1. Go to https://dashboard.stripe.com/register
2. Sign up (it's free!)
3. Go to Developers → API Keys
4. Copy both keys:
   - Secret key (starts with `sk_`)
   - Publishable key (starts with `pk_`)

### Step 2: Add to Your App

Add to your `.env.local`:

```env
STRIPE_SECRET_KEY=sk_test_your-secret-key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your-publishable-key
```

### Step 3: Uncomment Payment Code

Edit `app/page.tsx` and uncomment the payment code (around line 33):

```typescript
// Remove the comment markers from these lines:
const paymentResponse = await fetch('/api/payment', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ amount: 100 }),
});
```

Restart the server and now payments will be processed through Stripe!

## 📱 Testing the App

### Test the Upload Flow

1. Go to http://localhost:3000
2. Click the upload area
3. Select any photo of a face
4. Click "Analyze My Face - $1"
5. In the payment modal, click "Pay Now"
6. Watch the analysis load
7. View your results!

### What You'll See

- Overall personality assessment
- Analysis of each facial feature
- Fortune indicators with percentages
- Beautiful Korean-themed design
- Celebrity examples

## 🎨 Customizing Your App

### Change Celebrity Examples

Edit `app/page.tsx` (line ~79):

```typescript
const celebrities = [
  {
    name: "Your Celebrity",
    image: "image_url",
    reading: "Face reading description"
  },
];
```

See `CELEBRITY-GUIDE.md` for detailed instructions!

### Change Colors

Edit `tailwind.config.js`:

```javascript
korean: {
  red: '#C8102E',    // Change this
  blue: '#003478',   // And this
  gold: '#D4AF37',   // And this
},
```

### Change Pricing

Edit the price in `app/page.tsx`:

```typescript
// Change 100 (cents) to your price
body: JSON.stringify({ amount: 100 }), // $1.00
```

And update the UI text:

```typescript
<span className="text-korean-red font-bold">$1</span>
```

## 🌐 Deploying to Production

### Vercel (Easiest - 2 minutes)

1. Push code to GitHub
2. Go to https://vercel.com
3. Click "New Project"
4. Import your repository
5. Add environment variables:
   - `OPENAI_API_KEY`
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
6. Click "Deploy"

Done! Your app is live! 🎉

### Other Platforms

The app works on any platform that supports Next.js:
- Netlify
- Railway
- Render
- AWS Amplify
- Google Cloud Run

## 💰 Cost Analysis

### Per Reading Costs

- **OpenAI API**: $0.01-0.03 per analysis
- **Stripe Fees**: $0.03 + 2.9% = ~$0.32
- **Your Profit**: ~$0.65-0.67 per $1 reading

### Monthly Costs (100 readings)

- OpenAI: $1-3
- Stripe fees: ~$32
- Hosting (Vercel): $0 (free tier)
- **Total**: ~$33-35
- **Revenue**: $100
- **Net Profit**: ~$65-67

Scale up from there!

## 🐛 Troubleshooting

### Server won't start

```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### API calls not working

- Check your `.env.local` file exists
- Verify API keys are correct
- Restart the dev server
- Check browser console for errors

### Images not uploading

- Check file size (max 10MB)
- Use JPG or PNG format
- Try a different photo

### TypeScript errors

```bash
# Regenerate types
rm -rf .next
npm run dev
```

## 📚 Next Steps

1. ✅ **Test in Demo Mode**: Upload photos and see how it works
2. ✅ **Add API Keys**: Enable real AI analysis
3. ✅ **Customize**: Add your celebrity examples
4. ✅ **Deploy**: Put it live on Vercel
5. ✅ **Market**: Share with K-pop fans!

## 💡 Pro Tips

1. **Start in Demo Mode**: Test everything before adding API keys
2. **Use Test Mode**: Stripe has a test mode - use it first!
3. **Monitor Costs**: Check OpenAI usage in their dashboard
4. **Collect Emails**: Add email collection for marketing
5. **Social Sharing**: Add "Share my reading" feature
6. **More Celebrities**: Regularly add new K-pop stars
7. **Seasonal Themes**: Update for holidays and special events

## 🎯 Marketing Ideas

1. Share on K-pop Reddit communities
2. Post on Twitter/X with relevant hashtags
3. Create TikTok/Instagram Reels showing results
4. Partner with K-pop fan pages
5. Run ads targeting K-pop fans
6. Create a blog about Korean face reading
7. Offer influencer codes for discounts

## ❓ Need Help?

- Check `README.md` for detailed documentation
- Review `CELEBRITY-GUIDE.md` for celebrity tips
- Visit OpenAI docs: https://platform.openai.com/docs
- Visit Stripe docs: https://stripe.com/docs
- Visit Next.js docs: https://nextjs.org/docs

## 🎊 You're All Set!

Your Korean Face Reading app is ready to go! Start in demo mode, test everything, then add API keys when you're ready to go live.

Good luck! 🍀
