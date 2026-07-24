import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Gamepad2, Smartphone, Monitor } from 'lucide-react';

export default function CloudSection() {
  return (
    <section id="cloud" className="py-24 px-6 relative bg-black/30 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="flex-1 space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-sm font-medium mb-2 glow-purple"
            >
              Nexus Cloud
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black font-display leading-tight"
            >
              Your saves. <br />
              <span className="text-secondary">Everywhere.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-lg"
            >
              Never lose your progress again. Nexus Cloud automatically syncs your save states, configurations, and mods across all your devices in real-time. Start on your PC, pick up on your handheld.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex gap-4 pt-4"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-card border border-border">
                <Monitor className="w-6 h-6 text-white/70" />
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-card border border-border">
                <Gamepad2 className="w-6 h-6 text-white/70" />
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-card border border-border">
                <Smartphone className="w-6 h-6 text-white/70" />
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative flex justify-center items-center h-[400px]"
          >
            {/* Animated glowing orb */}
            <div className="absolute w-64 h-64 bg-secondary/30 rounded-full blur-[80px] animate-pulse"></div>
            <div className="absolute w-40 h-40 bg-primary/20 rounded-full blur-[50px] mix-blend-screen animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative z-10 w-48 h-48 bg-card/40 backdrop-blur-xl border border-secondary/40 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(124,58,237,0.3)]">
              <Cloud className="w-20 h-20 text-secondary drop-shadow-[0_0_15px_rgba(124,58,237,0.8)]" />
              <div className="absolute inset-0 border-2 border-secondary/20 rounded-full animate-[spin_4s_linear_infinite] border-t-secondary/80"></div>
              <div className="absolute inset-[-20px] border border-primary/10 rounded-full animate-[spin_7s_linear_infinite_reverse] border-b-primary/50"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
