import React from 'react';
import type { Metadata } from 'next';
import { Skills } from '@/components';

export const metadata: Metadata = {
  title: 'Skills',
  description: 'Discover Isaac Kalambo\'s technical skills and expertise in modern web technologies. From frontend frameworks to backend development and database management.',
  openGraph: {
    title: 'Skills & Technologies - Isaac Kalambo',
    description: 'Discover Isaac Kalambo\'s technical skills and expertise in modern web technologies.',
  },
};

export default function SkillsPage() {
  return (
      <Skills/>
  );
}

