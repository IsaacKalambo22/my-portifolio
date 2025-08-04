import React from 'react';
import Image from 'next/image';
import { personalInfo } from '@/lib/constants';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background decorative image */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <Image
          src="/images/3.jpg"
          alt="Background pattern"
          fill
          className="object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            About Me
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="flex-shrink-0">
              <Image
                src={personalInfo.profileImage}
                alt="Isaac Kalambo"
                width={300}
                height={300}
                className="rounded-full object-cover shadow-lg"
                priority
              />
            </div>
            <div className="flex-1 text-left">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {personalInfo.about}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200">
                  <span className="text-sm font-medium text-white">
                    {personalInfo.role}
                  </span>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-indigo-600 px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200">
                  <span className="text-sm font-medium text-white">
                    Based in Zambia
                  </span>
                </div>
                <div className="bg-gradient-to-r from-indigo-500 to-blue-600 px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200">
                  <span className="text-sm font-medium text-white">
                    Available for hire
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
