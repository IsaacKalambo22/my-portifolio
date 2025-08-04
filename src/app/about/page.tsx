import React from 'react';
import type { Metadata } from 'next';
import { About } from '@/components';
import { personalInfo } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Isaac Kalambo\'s journey, experience, and passion for full-stack development. Discover my story and what drives me to create amazing web applications.',
  openGraph: {
    title: 'About Isaac Kalambo - Full Stack Developer',
    description: 'Learn more about Isaac Kalambo\'s journey, experience, and passion for full-stack development.',
    images: [
      {
        url: personalInfo.profileImage,
        width: 400,
        height: 500,
        alt: 'Isaac Kalambo - Full Stack Developer',
      },
    ],
  },
};

export default function AboutPage() {
  return (     
    <About/>
  );
}
