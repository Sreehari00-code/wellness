import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Serenova | Premium Wellness Coaching",
  description:
    "Transform your life with Serenova — a premium wellness coaching experience designed to restore balance, clarity, and vitality. Explore mindfulness, nutrition, movement, and emotional wellbeing.",
  keywords:
    "wellness coach, mindfulness, nutrition coaching, lifestyle transformation, stress recovery, premium wellness",
  openGraph: {
    title: "Serenova | Premium Wellness Coaching",
    description:
      "A premium wellness experience designed to restore balance, clarity, and vitality.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Serenova | Premium Wellness Coaching",
    description:
      "Transform your life with premium wellness coaching — mindfulness, nutrition, movement, and emotional balance.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
