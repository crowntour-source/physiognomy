import type { Metadata } from "next";
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
      </body>
    </html>
  );
}
