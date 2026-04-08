"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export function SkipToContent() {
  return (
    <Button
      variant="outline"
      size="sm"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-background border-2"
      asChild
    >
      <a href="#main-content" className="flex items-center gap-2">
        <ChevronDown className="h-4 w-4" />
        Skip to main content
      </a>
    </Button>
  );
}
