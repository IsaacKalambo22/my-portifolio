import React from 'react';
import { skills } from '@/lib/constants';
import { Badge } from '@/components/ui';

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technical expertise and professional skills honed through real-world projects and client work.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="bg-card rounded-lg p-6 shadow-lg border hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-xs px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Proficiency Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Proficiency Levels</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <h4 className="font-bold mb-2">Advanced</h4>
              <p className="text-sm text-muted-foreground">React, Next.js, JavaScript, HTML/CSS</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">I</span>
              </div>
              <h4 className="font-bold mb-2">Intermediate</h4>
              <p className="text-sm text-muted-foreground">TypeScript, Node.js, MySQL, MongoDB</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <h4 className="font-bold mb-2">Familiar</h4>
              <p className="text-sm text-muted-foreground">Flutter, Docker, AWS, FastAPI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 