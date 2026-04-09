import React from 'react';
import Image from 'next/image';
import { personalInfo, education, experience } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';
import { ResumeDownload } from './ResumeDownload';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Software developer building impactful solutions in Malawi&apos;s tech ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src={personalInfo.profileImage}
                alt="Isaac Alex Kalambo"
                width={350}
                height={400}
                className="rounded-lg object-cover shadow-xl"
                priority
              />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-primary to-purple-600 rounded-full opacity-20 -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-primary to-purple-600 rounded-full opacity-20 -z-10"></div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Overview</h3>
            <p className="text-muted-foreground leading-relaxed">
              {personalInfo.about}
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              I combine technical expertise with leadership skills, having built web applications with React and Next.js, 
              mobile apps with Flutter, and database solutions with MySQL. My dual role in software development and HR 
              management has strengthened my ability to bridge technical and organizational needs.
            </p>

            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{personalInfo.location}</span>
            </div>

            <div className="pt-6">
              <ResumeDownload />
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="h-8 w-8 text-primary" />
              <h3 className="text-3xl font-bold">Experience</h3>
            </div>
            <div className="space-y-6">
              {experience.map((exp) => (
                <Card key={exp.id} className="border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                      <span className="font-semibold text-primary">{exp.company}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{exp.period}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="h-8 w-8 text-primary" />
              <h3 className="text-3xl font-bold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu) => (
                <Card key={edu.id} className="border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                      <span className="font-semibold text-primary">{edu.institution}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{edu.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 