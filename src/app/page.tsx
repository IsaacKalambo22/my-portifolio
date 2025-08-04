import React from 'react';
import { Layout, Hero, About, Projects, Skills, Contact, BackToTop, SectionNavigation } from '@/components';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <BackToTop />
      <SectionNavigation />
    </Layout>
  );
}
