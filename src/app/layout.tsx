import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BackToTop, Footer, Layout } from "@/components";
import { StructuredData } from "@/components/seo/StructuredData";
import { SkipToContent } from "@/components/accessibility/SkipToContent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Isaac Alex Kalambo - Software Developer & IT Specialist",
    template: "%s | Isaac Alex Kalambo"
  },
  description: "Software Developer & IT Specialist building production web applications for Malawian clients. Expertise in financial platforms, agricultural systems, and healthcare applications using React, Next.js, and Node.js.",
  keywords: ["Software Developer", "IT Specialist", "Web Developer", "React", "Next.js", "TypeScript", "Node.js", "Financial Platform", "Healthcare System", "Malawi", "Infinity Technologies"],
  authors: [{ name: "Isaac Alex Kalambo" }],
  creator: "Isaac Alex Kalambo",
  publisher: "Isaac Alex Kalambo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://isaackalambo.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://isaackalambo.com',
    title: 'Isaac Kalambo - Full Stack Developer',
    description: 'Full Stack Developer passionate about creating amazing web experiences with modern technologies and clean, efficient code.',
    siteName: 'Isaac Kalambo Portfolio',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Isaac Kalambo - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Isaac Kalambo - Full Stack Developer',
    description: 'Full Stack Developer passionate about creating amazing web experiences with modern technologies and clean, efficient code.',
    images: ['/images/logo.png'],
    creator: '@isaackalambo',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        <SkipToContent />
        <StructuredData />
        <Layout>
          <main id="main-content">
            {children}
          </main>
          <BackToTop />
          <Footer/>
        </Layout>
      </body>
    </html>
  );
}
