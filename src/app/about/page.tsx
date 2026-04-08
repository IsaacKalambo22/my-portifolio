import React from 'react';
import type { Metadata } from 'next';
import { About } from '@/components';
import { personalInfo } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About',
  description: 'Software Developer at Infinity Technologies with expertise in web and mobile development. Bachelor\'s degree in Computer Sciences from University of Malawi. Experience in React, Next.js, Flutter, and MySQL.',
  openGraph: {
    title: 'About Isaac Alex Kalambo - Software Developer',
    description: 'Software Developer at Infinity Technologies with expertise in web and mobile development.',
    images: [
      {
        url: personalInfo.profileImage,
        width: 400,
        height: 500,
        alt: 'Isaac Alex Kalambo - Software Developer',
      },
    ],
  },
};

export default function AboutPage() {
  return (     
    <About/>
  );
}
