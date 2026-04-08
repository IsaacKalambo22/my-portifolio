import React from 'react';
import type { Metadata } from 'next';
import { Hero, About, Projects, Skills, Testimonials, Contact } from '@/components';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Isaac Alex Kalambo - Software Developer & IT Specialist from Malawi. Building web and mobile applications with React, Next.js, Flutter, and MySQL. Currently at Infinity Technologies.',
  openGraph: {
    title: 'Isaac Alex Kalambo - Software Developer Portfolio',
    description: 'Software Developer & IT Specialist from Malawi. Building web and mobile applications with modern technologies.',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Skills />
      <Contact />
    </>
  );
}
