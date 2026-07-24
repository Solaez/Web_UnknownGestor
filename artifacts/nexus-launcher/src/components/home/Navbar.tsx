import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Globe, Rocket } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border/50 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-primary/10 p-2 rounded-xl border border-primary/30 group-hover:bg-primary/20 transition-all duration-300">
            <Rocket className="w-5 h-5 text-primary" />
          </div>
          <span className="font-display font-bold text-lg tracking-wide">
            Unknown<span className="text-primary">Gestor</span>
          </span>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {[
            { href: '#about',    label: 'Inicio'         },
            { href: '#features', label: 'Características' },
            { href: '#classics', label: 'ROMs'           },
            { href: '#cloud',    label: 'Mods'           },
            { href: '#download', label: 'Descargar'      },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <button className="text-muted-foreground hover:text-foreground transition-colors p-2 hidden sm:block">
            <Globe className="w-4 h-4" />
          </button>
          <a
            href="https://github.com/Solaez/UnknownGestor"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-card border border-border hover:border-primary/50 px-3 py-1.5 rounded-lg text-sm transition-all hover:bg-muted"
          >
            <FaGithub className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
            <span className="bg-muted px-1.5 py-0.5 rounded text-xs font-bold border border-border">
              1 ★
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
