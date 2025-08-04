import React from 'react';
import type { Metadata } from 'next';
import { Projects } from '@/components';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore Isaac Kalambo\'s portfolio of projects showcasing full-stack development skills. From e-commerce platforms to task management apps, discover innovative web solutions.',
  openGraph: {
    title: 'Projects - Isaac Kalambo Portfolio',
    description: 'Explore Isaac Kalambo\'s portfolio of projects showcasing full-stack development skills.',
  },
};

export default function ProjectsPage() {
  return (
      <Projects/>
  );
}
