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
        {/* This small script/style prevents the "all black" screen while Tailwind loads */}
        <style>{`
          body { 
            background-color: white !important; 
            color: #111827 !important; 
          }
        `}</style>
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        {/* Navigation bar at the top of every page */}
        <Navigation />

        {/* This is where the content for each individual page will render */}
        <main className="flex-grow">
          {children}
        </main>

        {/* The footer with the divider and social logos at the bottom */}
        <Footer />
      </body>
    </html>
  );
}
