"use client";

import React from 'react';
import { Button } from '@/components/ui';
import { Download } from 'lucide-react';

export function ResumeDownload() {
  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const link = e.currentTarget;
    const href = link.getAttribute('href');
    
    if (href) {
      // Create a temporary link to ensure download works
      const tempLink = document.createElement('a');
      tempLink.href = href;
      tempLink.download = 'Isaac_Kalambo_Resume.pdf';
      tempLink.target = '_blank';
      tempLink.rel = 'noopener noreferrer';
      
      // Trigger download
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
      
      // Fallback: if download doesn't work, open in new tab
      setTimeout(() => {
        window.open(href, '_blank', 'noopener,noreferrer');
      }, 1000);
    }
  };

  return (
    <Button 
      asChild 
      className="bg-gradient-to-r from-primary to-primary-600 hover:from-primary hover:to-primary-700"
      aria-label="Download Isaac Kalambo's Resume as PDF"
    >
      <a 
        href="/Isaac_Kalambo_CV.pdf" 
        download="Isaac_Kalambo_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
        onClick={handleDownload}
      >
        <Download className="h-4 w-4" />
        Download Resume
      </a>
    </Button>
  );
}
