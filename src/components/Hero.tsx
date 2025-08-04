import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { personalInfo } from '@/lib/constants/data';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="mb-8">
            <Avatar className="w-32 h-32 mx-auto mb-6">
              <AvatarFallback className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                {personalInfo.initials}
              </AvatarFallback>
            </Avatar>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {personalInfo.name}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {personalInfo.bio}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="#projects">
                View My Work
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">
                Get In Touch
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
