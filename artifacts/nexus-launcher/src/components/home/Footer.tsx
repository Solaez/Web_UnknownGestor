import React from 'react';
import { Gamepad2 } from 'lucide-react';
import { FaGithub, FaDiscord, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black/80 border-t border-border/50 pt-16 pb-8 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary/10 p-1.5 rounded-lg border border-primary/30">
                <Gamepad2 className="w-5 h-5 text-primary" />
              </div>
              <span className="font-display font-bold text-lg tracking-wider">NEXUS</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs mb-6">
              The ultimate game launcher for all your gaming needs. Manage your library, track achievements, and connect with your crew.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-card border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-card border border-border rounded-lg text-muted-foreground hover:text-[#5865F2] hover:border-[#5865F2]/50 transition-all">
                <FaDiscord className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-card border border-border rounded-lg text-muted-foreground hover:text-[#1DA1F2] hover:border-[#1DA1F2]/50 transition-all">
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Download</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Nexus Cloud</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Community Themes</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API API</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Nexus Launcher. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <span className="text-red-500 animate-pulse">❤️</span> by gamers
          </p>
        </div>
      </div>
    </footer>
  );
}
