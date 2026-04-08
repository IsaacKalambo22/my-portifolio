"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Badge } from '@/components/ui';
import { Github, ExternalLink, Building2, Filter, Calendar } from 'lucide-react';
import { projects } from '@/lib/constants';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(projects.map(p => p.category).filter(Boolean))];
    return cats;
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    return projects.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
            Professional Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Production web applications built for Malawian businesses and clients, showcasing expertise in financial, agricultural, and healthcare platforms.
          </p>
        </div>

        {/* Filter Section */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className={`overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 ${project.featured ? 'ring-2 ring-primary/20' : ''}`}>
              <div className="relative overflow-hidden h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"             
                />
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary/90 text-white text-xs">
                      Featured
                    </Badge>
                  </div>
                )}
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className="bg-black/70 text-white text-xs">
                    <Calendar className="h-3 w-3 mr-1" />
                    2024
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    {project.client && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <Building2 className="h-4 w-4" />
                        <span>{project.client}</span>
                      </div>
                    )}
                  </div>
                  {project.category && (
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  )}
                </div>
                <CardDescription className="mt-2 text-sm">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" asChild className="flex-1">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild className="flex-1">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {project.demo.includes('http') && !project.demo.includes('github') ? 'Live' : 'Demo'}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found in {selectedCategory} category.</p>
          </div>
        )}

        {/* View All Projects Link */}
        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <a
              href="https://github.com/InfinityCodeMw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
} 