import React from 'react';
import type { Metadata } from 'next';
import { Hero, About, Projects, Skills, Contact } from '@/components';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Isaac Kalambo\'s portfolio. Full Stack Developer passionate about creating amazing web experiences with modern technologies.',
  openGraph: {
    title: 'Isaac Kalambo - Full Stack Developer Portfolio',
    description: 'Welcome to Isaac Kalambo\'s portfolio. Full Stack Developer passionate about creating amazing web experiences with modern technologies.',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
