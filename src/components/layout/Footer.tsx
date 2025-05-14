import Link from 'next/link';
import { Linkedin, Twitter, Facebook, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 mb-2" prefetch={false}>
              <Sparkles className="h-7 w-7 text-primary" />
              <span className="text-xl font-bold">AdVerse</span>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left">Crafting impactful advertising campaigns that resonate.</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><Link href="#services" className="text-sm hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="#portfolio" className="text-sm hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="#contact" className="text-sm hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-end">
             <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
            <div className="flex gap-4">
              <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={24} /></Link>
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={24} /></Link>
              <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={24} /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AdVerse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}