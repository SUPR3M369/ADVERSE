"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Slogan AI', href: '#slogan-ai' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Sparkles className="h-7 w-7 text-primary" />
          <span className="text-2xl font-bold">AdVerse</span>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              prefetch={false}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
            <Link href="#contact">Get Started</Link>
          </Button>
        </nav>
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
            <div className="flex flex-col gap-6">
              <Link href="/" className="mb-4 flex items-center gap-2" prefetch={false} onClick={() => setMobileMenuOpen(false)}>
                <Sparkles className="h-7 w-7 text-primary" />
                <span className="text-2xl font-bold">AdVerse</span>
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  prefetch={false}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-4 bg-primary hover:bg-primary/90 w-full">
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>Get Started</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}