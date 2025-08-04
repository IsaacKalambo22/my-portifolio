import React from 'react';
import Image from 'next/image';
import { personalInfo } from '@/lib/constants';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary ">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn more about my journey, experience, and passion for development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src={personalInfo.profileImage}
                alt="Isaac Kalambo"
                width={350}
                height={400}
                className="rounded-lg object-cover shadow-xl"
                priority
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-primary to-purple-600 rounded-full opacity-20 -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-primary to-purple-600 rounded-full opacity-20 -z-10"></div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">My Story</h3>
            <p className="text-muted-foreground leading-relaxed">
              {personalInfo.about}
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              With years of experience in full-stack development, I&apos;ve worked on various projects 
              ranging from small business websites to large-scale enterprise applications. I&apos;m 
              passionate about clean code, user experience, and staying up-to-date with the latest 
              technologies.
            </p>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold">What I Love</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Building scalable web applications
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Learning new technologies
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Solving complex problems
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Collaborating with teams
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 