import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Trophy, Users, Cloud } from 'lucide-react';

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 relative border-t border-border/50 bg-black/40">
      <div className="container mx-auto max-w-6xl">
        
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4 glow-cyan"
          >
            ⚡ It keeps getting better!
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black font-display mb-4"
          >
            Built for gamers, <span className="text-primary">by gamers</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            The convenience of a modern launcher with the power of a decentralized platform.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Themes */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative bg-card border border-border p-8 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors"
          >
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all"></div>
            
            <div className="mb-6 flex items-center justify-between">
              <div className="p-3 bg-black/50 border border-border rounded-xl">
                <Palette className="w-6 h-6 text-primary" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold font-display mb-3">Custom Themes</h3>
            <p className="text-muted-foreground mb-8">Browse thousands of community themes for your launcher to make it truly yours.</p>
            
            <div className="bg-black/60 border border-border/50 rounded-xl p-4 transform translate-y-4 group-hover:-translate-y-1 transition-transform duration-300">
               <div className="flex gap-2 mb-3">
                 <div className="w-1/3 h-12 bg-primary/20 border border-primary/30 rounded-lg"></div>
                 <div className="w-1/3 h-12 bg-secondary/20 border border-secondary/30 rounded-lg"></div>
                 <div className="w-1/3 h-12 bg-red-500/20 border border-red-500/30 rounded-lg"></div>
               </div>
               <div className="h-4 w-2/3 bg-white/5 rounded"></div>
            </div>
          </motion.div>

          {/* Card 2: Achievements */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative bg-card border border-border p-8 rounded-2xl overflow-hidden hover:border-secondary/50 transition-colors"
          >
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all"></div>
            
            <div className="mb-6 flex items-center justify-between">
              <div className="p-3 bg-black/50 border border-border rounded-xl">
                <Trophy className="w-6 h-6 text-secondary" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold font-display mb-3">Achievements</h3>
            <p className="text-muted-foreground mb-8">Unlock achievements, track your progress, and flex on your friends.</p>
            
            <div className="bg-black/60 border border-border/50 rounded-xl p-4 transform translate-y-4 group-hover:-translate-y-1 transition-transform duration-300 space-y-3">
               <div className="flex items-center gap-3 bg-white/5 p-2 rounded-lg">
                 <div className="w-8 h-8 rounded bg-yellow-500/20 border border-yellow-500/50 flex items-center justify-center">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                 </div>
                 <div className="flex-1">
                   <div className="h-3 w-1/2 bg-white/20 rounded mb-1"></div>
                   <div className="h-2 w-1/4 bg-white/10 rounded"></div>
                 </div>
               </div>
               <div className="flex items-center gap-3 bg-white/5 p-2 rounded-lg">
                 <div className="w-8 h-8 rounded bg-gray-500/20 border border-gray-500/50 flex items-center justify-center">
                    <Trophy className="w-4 h-4 text-gray-400" />
                 </div>
                 <div className="flex-1">
                   <div className="h-3 w-2/3 bg-white/20 rounded mb-1"></div>
                   <div className="h-2 w-1/3 bg-white/10 rounded"></div>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Card 3: Friends */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group relative bg-card border border-border p-8 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors"
          >
             <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all"></div>
            
            <div className="mb-6 flex items-center justify-between">
              <div className="p-3 bg-black/50 border border-border rounded-xl">
                <Users className="w-6 h-6 text-primary" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold font-display mb-3">Friends & Status</h3>
            <p className="text-muted-foreground mb-8">See what your crew is playing in real time, join their lobbies instantly.</p>
            
            <div className="bg-black/60 border border-border/50 rounded-xl p-4 transform translate-y-4 group-hover:-translate-y-1 transition-transform duration-300 space-y-3">
               <div className="flex items-center justify-between">
                 <div className="flex items-center gap-3">
                   <div className="relative">
                     <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20"></div>
                     <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border border-black"></div>
                   </div>
                   <div>
                     <div className="h-3 w-16 bg-white/20 rounded mb-1"></div>
                     <div className="h-2 w-24 bg-primary/50 rounded"></div>
                   </div>
                 </div>
               </div>
               <div className="flex items-center justify-between">
                 <div className="flex items-center gap-3">
                   <div className="relative">
                     <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20"></div>
                     <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-purple-500 rounded-full border border-black"></div>
                   </div>
                   <div>
                     <div className="h-3 w-20 bg-white/20 rounded mb-1"></div>
                     <div className="h-2 w-16 bg-white/10 rounded"></div>
                   </div>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Card 4: Cloud Saves */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="group relative bg-card border border-border p-8 rounded-2xl overflow-hidden hover:border-secondary/50 transition-colors"
          >
             <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all"></div>
            
            <div className="mb-6 flex items-center justify-between">
              <div className="p-3 bg-black/50 border border-border rounded-xl">
                <Cloud className="w-6 h-6 text-secondary" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold font-display mb-3">Cloud Saves</h3>
            <p className="text-muted-foreground mb-8">Pick up exactly where you left off on any device, entirely automatically.</p>
            
            <div className="bg-black/60 border border-border/50 rounded-xl p-4 transform translate-y-4 group-hover:-translate-y-1 transition-transform duration-300">
               <div className="flex justify-between text-xs text-muted-foreground mb-2">
                 <span>Syncing save data...</span>
                 <span className="text-secondary">85%</span>
               </div>
               <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mb-3">
                 <div className="h-full bg-secondary w-[85%] relative">
                   <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                 </div>
               </div>
               <div className="flex items-center gap-2 text-xs">
                 <Cloud className="w-3 h-3 text-secondary" />
                 <span className="text-white/60">EldenRing_Save01.sav</span>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
