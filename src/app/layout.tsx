import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BackToTop, Footer, Layout } from "@/components";

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
    default: "Isaac Kalambo - Full Stack Developer",
    template: "%s | Isaac Kalambo"
  },
  description: "Full Stack Developer passionate about creating amazing web experiences with modern technologies and clean, efficient code. Explore my projects, skills, and experience.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Node.js", "Web Development", "Portfolio"],
  authors: [{ name: "Isaac Kalambo" }],
  creator: "Isaac Kalambo",
  publisher: "Isaac Kalambo",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout>
          {children}
          <BackToTop />
          <Footer/>
        </Layout>
      </body>
    </html>
  );
}
