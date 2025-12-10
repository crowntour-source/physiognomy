import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Korean Face Reading - Physiognomy Analysis",
  description: "Discover your fortune through Korean face reading (Gwansang). Upload your photo and get AI-powered physiognomy analysis with insights from ancient Korean wisdom.",
  keywords: ["physiognomy", "face reading", "Korean", "Gwansang", "fortune", "K-pop"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {/* PayPal SDK for international payments */}
        <Script
          src="https://www.paypal.com/sdk/js?client-id=Aa-3r4ia50bQ4j84X1fomKNeMQFFxUouEt9c7K4LNjVxLdckr9-PlB3cp20q2WAjQbMW4fhqrc1mfmFZ&currency=USD&intent=capture&locale=en_US"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
