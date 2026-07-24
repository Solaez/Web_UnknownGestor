import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Gamepad2, Globe, Github } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border/50 py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-primary/10 p-2 rounded-xl border border-primary/30 group-hover:glow-cyan transition-all duration-300">
              <Gamepad2 className="w-6 h-6 text-primary" />
            </div>
            <span className="font-display font-bold text-xl tracking-wider text-glow-cyan">NEXUS</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
          <a href="#features" className="text-muted-foreground hover:text-primary transition-colors relative group">
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
          <a href="#classics" className="text-muted-foreground hover:text-primary transition-colors relative group">
            Classics
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
          <a href="#cloud" className="text-muted-foreground hover:text-primary transition-colors relative group">
            Nexus Cloud
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-muted-foreground hover:text-foreground transition-colors p-2 hidden sm:block">
            <Globe className="w-5 h-5" />
          </button>
          
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 bg-card border border-border hover:border-primary/50 px-3 py-2 rounded-lg text-sm transition-all hover:bg-muted"
          >
            <FaGithub className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
            <div className="bg-muted px-2 py-0.5 rounded text-xs font-bold border border-border">
              16k+
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}
