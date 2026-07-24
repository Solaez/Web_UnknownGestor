import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { FaWindows, FaApple, FaLinux, FaGithub } from 'react-icons/fa';

export default function DownloadSection() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent z-0"></div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card/50 backdrop-blur-md border border-border p-12 md:p-16 rounded-3xl shadow-2xl"
          style={{ boxShadow: '0 0 80px rgba(0, 212, 255, 0.05)' }}
        >
          <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
            Ready to level up your <span className="text-glow-cyan text-primary">game library?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of players already using Nexus Launcher to manage their games, track achievements, and connect with friends.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button className="flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all glow-cyan transform hover:scale-105 active:scale-95 w-full sm:w-auto justify-center">
              <FaWindows className="w-5 h-5" />
              Download for Windows
            </button>
            <button className="flex items-center gap-3 px-8 py-4 bg-card border border-border text-foreground font-bold rounded-xl hover:bg-muted transition-all w-full sm:w-auto justify-center group">
              <FaApple className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              Mac OS
            </button>
            <button className="flex items-center gap-3 px-8 py-4 bg-card border border-border text-foreground font-bold rounded-xl hover:bg-muted transition-all w-full sm:w-auto justify-center group">
              <FaLinux className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              Linux
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <span>Also available as source code:</span>
            <a href="https://github.com" className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium">
              <FaGithub className="w-4 h-4" /> View on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
