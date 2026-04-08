import React from 'react';
import type { Metadata } from 'next';
import { Projects } from '@/components';

export const metadata: Metadata = {
  title: 'Professional Projects',
  description: 'Production web applications built for Malawian clients: Wealth Bridge (financial platform), TAMA Farmers Trust (agricultural platform), Pacific Diagnostics (healthcare system), and more by Infinity Technologies.',
  openGraph: {
    title: 'Professional Projects - Isaac Alex Kalambo',
    description: 'Production web applications for financial, agricultural, and healthcare sectors in Malawi.',
  },
};

export default function ProjectsPage() {
  return (
      <Projects/>
  );
}
