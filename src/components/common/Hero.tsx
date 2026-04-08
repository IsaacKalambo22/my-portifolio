"use client";


import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Twitter, ChevronDown, Briefcase, Calendar, Award } from 'lucide-react';
import { personalInfo, socialLinks } from '@/lib/constants';

export default function Hero() {
  const [displayedRole, setDisplayedRole] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const roles = ['Software Developer', 'IT Specialist', 'Web Developer', 'Mobile Developer'];

  useEffect(() => {
    const currentRole = roles[currentWordIndex];
    let charIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (charIndex <= currentRole.length) {
        setDisplayedRole(currentRole.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentWordIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentWordIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <Image
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                width={200}
                height={200}
                className="rounded-full object-cover shadow-xl"
                priority
              />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-primary to-primary-600 rounded-full opacity-90 -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-primary to-primary-600 rounded-full opacity-90 -z-10"></div>
            </div>
          </div>

          {/* Hero Content */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-primary">
              {personalInfo.name}
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 h-8">
            <span className="inline-block">{displayedRole}</span>
            <span className="animate-pulse">|</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {personalInfo.bio}
          </p>

          {/* Stats Section */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Briefcase className="h-4 w-4 text-primary" />
              <span className="font-semibold">3+</span>
              <span>Client Projects</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 text-primary" />
              <span className="font-semibold">2+</span>
              <span>Years Experience</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Award className="h-4 w-4 text-primary" />
              <span className="font-semibold">6+</span>
              <span>Technologies</span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary-600 hover:from-primary hover:to-primary-700">
              <Link href="/projects">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transform duration-200"
                title={link.name}
              >
                {link.icon === 'Github' && <Github className="h-6 w-6" />}
                {link.icon === 'Linkedin' && <Linkedin className="h-6 w-6" />}
                {link.icon === 'Twitter' && <Twitter className="h-6 w-6" />}
                <span className="sr-only">{link.name}</span>
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-6 w-6 text-primary/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
