import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30">
      <div className="text-center max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-gradient-to-r from-primary to-primary-600 hover:from-primary hover:to-primary-700">
              <Link href="/" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/projects" className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                View Projects
              </Link>
            </Button>
          </div>

          <div className="pt-8">
            <p className="text-sm text-muted-foreground mb-4">
              You might be looking for:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link href="/about" className="text-primary hover:underline">
                About
              </Link>
              <span className="text-muted-foreground">·</span>
              <Link href="/projects" className="text-primary hover:underline">
                Projects
              </Link>
              <span className="text-muted-foreground">·</span>
              <Link href="/skills" className="text-primary hover:underline">
                Skills
              </Link>
              <span className="text-muted-foreground">·</span>
              <Link href="/contact" className="text-primary hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-xs text-muted-foreground">
            If you believe this is an error, please{' '}
            <Link href="/contact" className="text-primary hover:underline">
              contact me
            </Link>
            {' '}and I'll look into it.
          </p>
        </div>
      </div>
    </div>
  );
}
