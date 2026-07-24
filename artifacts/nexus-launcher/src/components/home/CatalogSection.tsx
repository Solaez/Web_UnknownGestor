import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Star, Clock } from 'lucide-react';

import game1 from '@assets/generated_images/game1.png';
import game2 from '@assets/generated_images/game2.png';
import game3 from '@assets/generated_images/game3.png';
import game4 from '@assets/generated_images/game4.png';
import game5 from '@assets/generated_images/game5.png';
import game6 from '@assets/generated_images/game6.png';

const games = [
  { id: 1,  title: 'The Last Kingdom',  genre: 'Action RPG',  rating: '9.2', hours: '142', img: game1, accent: 'cyan'   },
  { id: 2,  title: 'Stellar Odyssey',   genre: 'Sci-Fi RPG',  rating: '8.7', hours: '89',  img: game2, accent: 'purple' },
  { id: 3,  title: 'Neon Syndicate',    genre: 'RPG',         rating: '9.0', hours: '210', img: game3, accent: 'cyan'   },
  { id: 4,  title: "Dragon's Lair",     genre: 'Fantasy',     rating: '8.5', hours: '67',  img: game4, accent: 'purple' },
  { id: 5,  title: 'Cyber Drift',       genre: 'Racing',      rating: '8.9', hours: '55',  img: game5, accent: 'cyan'   },
  { id: 6,  title: 'Shadow Protocol',   genre: 'Shooter',     rating: '9.1', hours: '178', img: game6, accent: 'purple' },
  { id: 7,  title: 'Iron Citadel',      genre: 'Strategy',    rating: '8.3', hours: '320', img: game2, accent: 'cyan'   },
  { id: 8,  title: 'Void Runners',      genre: 'Platformer',  rating: '8.8', hours: '44',  img: game4, accent: 'purple' },
  { id: 9,  title: 'Crimson Veil',      genre: 'Horror',      rating: '9.3', hours: '31',  img: game1, accent: 'cyan'   },
  { id: 10, title: 'Nova Strike',       genre: 'Shoot \'em up', rating: '8.6', hours: '97', img: game3, accent: 'purple'},
  { id: 11, title: 'Echo Protocol',     genre: 'Adventure',   rating: '8.4', hours: '62',  img: game5, accent: 'cyan'   },
  { id: 12, title: 'Rift Walker',       genre: 'Action RPG',  rating: '9.0', hours: '155', img: game6, accent: 'purple' },
];

function GameCard({ game, delay }: { game: (typeof games)[0]; delay: number }) {
  const [hovered, setHovered] = useState(false);
  const isCyan = game.accent === 'cyan';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.4, delay }}
      className={`relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer border transition-all duration-300 ${
        hovered
          ? isCyan
            ? 'border-cyan-400/60 shadow-[0_0_30px_-4px_rgba(0,212,255,0.35)]'
            : 'border-purple-400/60 shadow-[0_0_30px_-4px_rgba(124,58,237,0.35)]'
          : 'border-white/8 shadow-lg'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background image — always present, zooms on hover */}
      <motion.img
        src={game.img}
        alt={game.title}
        className="absolute inset-0 w-full h-full object-cover"
        animate={{ scale: hovered ? 1.08 : 1.0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />

      {/* Dark overlay — fades out on hover */}
      <motion.div
        className="absolute inset-0 bg-black"
        animate={{ opacity: hovered ? 0.15 : 0.72 }}
        transition={{ duration: 0.4 }}
      />

      {/* Gradient from bottom — always visible for text */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

      {/* Content — slides up on hover */}
      <div className="absolute inset-0 flex flex-col justify-end p-4">
        {/* Genre badge — only on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.2 }}
              className={`self-start text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-2 ${
                isCyan
                  ? 'bg-cyan-500/25 text-cyan-300 border border-cyan-500/40'
                  : 'bg-purple-500/25 text-purple-300 border border-purple-500/40'
              }`}
            >
              {game.genre}
            </motion.span>
          )}
        </AnimatePresence>

        {/* Title */}
        <motion.h3
          className="font-display font-black text-sm leading-tight text-white mb-1"
          animate={{ y: hovered ? 0 : 2 }}
          transition={{ duration: 0.3 }}
        >
          {game.title}
        </motion.h3>

        {/* Stats — only on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.25, delay: 0.05 }}
              className="flex items-center gap-3 text-[11px] text-white/60"
            >
              <span className="flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                {game.rating}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {game.hours}h
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function CatalogSection() {
  return (
    <section id="classics" className="py-24 px-6 relative border-t border-white/5 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium mb-4"
            >
              <Gamepad2 className="w-4 h-4" /> Game Catalog
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="text-3xl md:text-5xl font-black font-display leading-tight"
            >
              Your classics,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                rediscovered
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-sm text-white/40 max-w-xs md:text-right"
          >
            Hover over any game to reveal it. Over 50,000 titles in the catalog.
          </motion.p>
        </div>

        {/* Game grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {games.map((game, i) => (
            <GameCard key={game.id} game={game} delay={i * 0.04} />
          ))}
        </div>

        {/* Browse all link */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mt-10"
        >
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white/50 text-sm font-medium hover:border-cyan-500/40 hover:text-white hover:bg-cyan-500/5 transition-all duration-300 group">
            <Gamepad2 className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
            Browse full catalog
          </button>
        </motion.div>
      </div>
    </section>
  );
}
