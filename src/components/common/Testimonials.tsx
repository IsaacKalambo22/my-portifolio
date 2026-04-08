"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui';
import { Badge } from '@/components/ui/badge';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Jonas Silumbu",
    role: "CEO, Wealth Bridge Financial Services",
    content: "Isaac delivered an exceptional financial platform that transformed our business operations. His attention to security and user experience exceeded our expectations. The system handles thousands of transactions seamlessly.",
    rating: 5,
    project: "Wealth Bridge Platform",
    avatar: "/images/avatars/sarah.jpg"
  },
  {
    id: 2,
    name: "Wanangwa",
    role: "Director, TAMA Farmers Trust",
    content: "The agricultural management system Isaac built has streamlined our entire operation. From farmer registration to tobacco sales representation, every aspect is now digitized and efficient. Highly recommended!",
    rating: 5,
    project: "TAMA Farmers Trust Platform",
    avatar: "/images/avatars/james.jpg"
  },
  {
    id: 3,
    name: "Dr. Mary Phiri",
    role: "Medical Director, Pacific Diagnostics",
    content: "Isaac's healthcare platform has revolutionized how we manage patient records and appointments. The system is intuitive, secure, and has significantly improved our workflow efficiency.",
    rating: 5,
    project: "Pacific Diagnostics System",
    avatar: "/images/avatars/mary.jpg"
  },
  {
    id: 4,
    name: "Emmanuel Banda",
    role: "Head of IT, Lilongwe Girls Secondary School",
    content: "As a student teacher, Isaac demonstrated exceptional technical skills and the ability to explain complex concepts clearly. His students consistently achieved high scores in computer studies.",
    rating: 5,
    project: "Teaching Experience",
    avatar: "/images/avatars/robert.jpg"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
            Client Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear what clients and colleagues have to say about working with me
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden">
            <CardContent className="p-8 md:p-12">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-primary/10">
                <Quote className="h-16 w-16" />
              </div>

              {/* Testimonial Content */}
              <div className="relative z-10">
                <div className="flex mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  "{currentTestimonial.content}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-lg">{currentTestimonial.name}</div>
                    <div className="text-muted-foreground">{currentTestimonial.role}</div>
                    <Badge variant="outline" className="mt-2 text-xs">
                      {currentTestimonial.project}
                    </Badge>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center gap-2 ml-4">
                    <button
                      onClick={prevTestimonial}
                      className="p-2 rounded-full border hover:bg-muted transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="p-2 rounded-full border hover:bg-muted transition-colors"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
