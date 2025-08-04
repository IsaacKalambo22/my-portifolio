import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo, socialLinks } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
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
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-primary to-primary-600 rounded-full opacity-20 -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-primary to-primary-600 rounded-full opacity-20 -z-10"></div>
            </div>
          </div>

          {/* Hero Content */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6">
            {personalInfo.role}
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {personalInfo.bio}
          </p>

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
              >
                {link.icon === 'Github' && <Github className="h-6 w-6" />}
                {link.icon === 'Linkedin' && <Linkedin className="h-6 w-6" />}
                {link.icon === 'Twitter' && <Mail className="h-6 w-6" />}
                <span className="sr-only">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
