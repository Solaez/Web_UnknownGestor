import React from 'react';
import { motion } from 'framer-motion';

import game1 from '@assets/generated_images/game1.png';
import game2 from '@assets/generated_images/game2.png';
import game3 from '@assets/generated_images/game3.png';
import game4 from '@assets/generated_images/game4.png';
import game5 from '@assets/generated_images/game5.png';
import game6 from '@assets/generated_images/game6.png';

export default function ClassicsSection() {
  const games = [
    { title: "The Last Kingdom", img: game1, color: "from-blue-500/20" },
    { title: "Stellar Odyssey", img: game2, color: "from-purple-500/20" },
    { title: "Neon Syndicate", img: game3, color: "from-cyan-500/20" },
    { title: "Dragon's Lair", img: game4, color: "from-red-500/20" },
    { title: "Cyber Drift", img: game5, color: "from-pink-500/20" },
    { title: "Shadow Protocol", img: game6, color: "from-slate-500/20" },
  ];

  return (
    <section id="classics" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black font-display text-glow-cyan"
        >
          Your classics, rediscovered
        </motion.h2>
      </div>

      <div className="relative w-full overflow-hidden flex pb-12">
        <div className="flex gap-6 px-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pt-4 w-full">
          {games.map((game, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="min-w-[240px] md:min-w-[300px] snap-center shrink-0 group relative"
            >
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-border/50 group-hover:border-primary/50 transition-all shadow-xl group-hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]">
                {/* Fallback gradient if image doesn't load/exist */}
                <div className={`absolute inset-0 bg-gradient-to-br ${game.color} to-background -z-10`}></div>
                
                <img 
                  src={game.img} 
                  alt={game.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  onError={(e) => {
                    // Fallback to text if image fails
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden absolute inset-0 flex items-center justify-center p-6 text-center bg-black/60 backdrop-blur-sm">
                  <h3 className="font-display font-bold text-2xl text-white drop-shadow-md">{game.title}</h3>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="font-display font-bold text-xl">{game.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
