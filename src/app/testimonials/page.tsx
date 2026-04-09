import React from 'react';
import type { Metadata } from 'next';
import Testimonials from '@/components/common/Testimonials';

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'Client testimonials and recommendations for Isaac Kalambo - Software Developer. Read what clients and colleagues have to say about working with me.',
  openGraph: {
    title: 'Client Testimonials - Isaac Kalambo',
    description: 'Client testimonials and recommendations for Isaac Kalambo - Software Developer',
  },
};

export default function TestimonialsPage() {
  return <Testimonials />;
}
