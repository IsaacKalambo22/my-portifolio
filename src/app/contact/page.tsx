import React from 'react';
import type { Metadata } from 'next';
import { Contact } from '@/components';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Isaac Kalambo for collaboration opportunities, project inquiries, or just to say hello. Available for freelance and full-time opportunities.',
  openGraph: {
    title: 'Contact Isaac Kalambo - Full Stack Developer',
    description: 'Get in touch with Isaac Kalambo for collaboration opportunities and project inquiries.',
  },
};

export default function ContactPage() {
  return (
     <Contact/>
  );
}
