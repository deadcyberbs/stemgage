import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
  title: "STEMgage",
  description: "An Organization dedicated to Promoting STEM Education and Engagement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        {/* Forces the background to be white immediately to avoid the black screen issue */}
        <style>{`
          body { 
            background-color: white !important; 
            color: #111827 !important; 
          }
        `}</style>
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        {/* This stays at the top of every page */}
        <Navigation />

        {/* This 'children' prop is the magic. 
            When you go to /portfolio, the code from portfolio/page.tsx 
            gets injected right here. 
        */}
        <main className="flex-grow bg-white">
          {children}
        </main>

        {/* This stays at the bottom of every page */}
        <Footer />
      </body>
    </html>
  );
}
