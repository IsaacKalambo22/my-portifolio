'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const sectionLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function SectionNavigation() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = sectionLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-20 right-4 z-40 hidden lg:block">
      <div className="bg-background/80 backdrop-blur-md rounded-lg border shadow-lg p-2">
        <div className="flex flex-col space-y-1">
          {sectionLinks.map((link) => (
            <Button
              key={link.name}
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection(link.href)}
              className={`text-xs px-3 py-2 h-auto ${
                activeSection === link.href.substring(1)
                  ? "text-primary font-medium bg-primary/10"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
} 