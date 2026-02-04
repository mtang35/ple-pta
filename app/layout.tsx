import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phantom Lake PTA | Building Stronger Schools Together",
  description: "Join the Phantom Lake Elementary PTA community in Bellevue, WA. Supporting student success, family engagement, and school excellence through events, programs, and volunteer opportunities.",
  keywords: ["Phantom Lake PTA", "Phantom Lake Elementary", "Bellevue PTA", "school parent association", "student success", "family engagement", "school volunteers", "community involvement", "education support", "Bellevue schools"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
