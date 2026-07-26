import React from 'react';
import { motion } from 'framer-motion';
import { Store, Gamepad2, Puzzle, Download, Database, Sparkles } from 'lucide-react';

import homeScreen from '@assets/app-home.png';
import romsScreen from '@assets/app-roms.png';
import modsScreen from '@assets/app-mods.png';
import dlScreen   from '@assets/app-downloads.png';

/* ─────────────────────────────────────────────
   Card data
───────────────────────────────────────────── */
const cards = [
  {
    id: 'home',
    label: 'Tienda de Apps',
    title: 'App Store completa',
    desc: 'Instala programas, drivers y juegos con un clic. Categorización inteligente: Drivers, Juegos, Diseño, Desarrollo y más.',
    icon: Store,
    accent: '#00d4ff',
    image: homeScreen,
    // CSS grid placement
    gridArea: '1 / 1 / 2 / 3',   // row 1, col 1-2 (wide)
    height: '340px',
    objectPosition: 'top',
  },
  {
    id: 'roms',
    label: 'ROMs & Emuladores',
    title: 'Biblioteca retro',
    desc: 'Lanzador integrado. Biblioteca personal de favoritos y soporte para múltiples fuentes.',
    icon: Gamepad2,
    accent: '#a855f7',
    image: romsScreen,
    gridArea: '1 / 3 / 3 / 4',   // rows 1-2, col 3 (tall)
    height: 'auto',
    objectPosition: 'top',
  },
  {
    id: 'mods',
    label: 'Mods',
    title: 'NexusMods & GameBanana',
    desc: 'Explora las mayores comunidades de modding con buscadores dedicados, sin salir de la app.',
    icon: Puzzle,
    accent: '#00d4ff',
    image: modsScreen,
    gridArea: '2 / 1 / 3 / 2',   // row 2, col 1
    height: '280px',
    objectPosition: 'top',
  },
  {
    id: 'downloads',
    label: 'Descargas',
    title: 'Motor WebTorrent',
    desc: 'Soporte nativo para torrents y 1fichier, Mediafire. Monitorea el progreso en tiempo real.',
    icon: Download,
    accent: '#a855f7',
    image: dlScreen,
    gridArea: '2 / 2 / 3 / 3',   // row 2, col 2
    height: '280px',
    objectPosition: 'top',
  },
  {
    id: 'multisource',
    label: 'Multi-Fuente',
    title: 'Repositorios ilimitados',
    desc: 'Agrega múltiples repositorios JSON externos y expande tu catálogo sin límites.',
    icon: Database,
    accent: '#00d4ff',
    image: null,
    gridArea: '3 / 1 / 4 / 2',   // row 3, col 1
    height: '200px',
    objectPosition: 'center',
  },
  {
    id: 'ui',
    label: 'Diseño',
    title: 'Interfaz Glassmorphism',
    desc: 'Efectos de vidrio, temas oscuros y animaciones suaves. Tan bonita como potente.',
    icon: Sparkles,
    accent: '#a855f7',
    image: null,
    gridArea: '3 / 2 / 4 / 4',   // row 3, col 2-3 (wide)
    height: '200px',
    objectPosition: 'center',
  },
];

/* ─────────────────────────────────────────────
   Individual card
───────────────────────────────────────────── */
function BentoCard({ card, delay }: { card: (typeof cards)[0]; delay: number }) {
  const Icon = card.icon;
  const isCyan = card.accent === '#00d4ff';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl cursor-default select-none"
      style={{
        gridArea: card.gridArea,
        minHeight: card.height,
        border: `1px solid rgba(255,255,255,0.07)`,
        transition: 'border-color 0.35s, box-shadow 0.35s',
      }}
      whileHover={{
        boxShadow: `0 0 40px -6px ${card.accent}44, 0 2px 8px rgba(0,0,0,0.6)`,
        borderColor: `${card.accent}55`,
      }}
    >
      {/* ── Background: real screenshot or gradient ── */}
      {card.image ? (
        <img
          src={card.image}
          alt={card.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          style={{ objectPosition: card.objectPosition }}
          draggable={false}
        />
      ) : (
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          style={{
            background: isCyan
              ? 'radial-gradient(ellipse at 30% 30%, rgba(0,212,255,0.18) 0%, rgba(10,10,20,1) 70%)'
              : 'radial-gradient(ellipse at 70% 30%, rgba(168,85,247,0.18) 0%, rgba(10,10,20,1) 70%)',
          }}
        />
      )}

      {/* ── Multi-layer gradient overlay ── */}
      {/* Bottom text area gradient (always) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0.0) 65%)',
        }}
      />
      {/* Top-left tint for icon badge readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, rgba(0,0,0,0.45) 0%, transparent 50%)',
        }}
      />

      {/* ── Icon badge ── */}
      <div className="absolute top-4 left-4 z-10">
        <div
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl backdrop-blur-sm text-xs font-semibold tracking-wide"
          style={{
            background: `${card.accent}22`,
            border: `1px solid ${card.accent}44`,
            color: card.accent,
          }}
        >
          <Icon className="w-3.5 h-3.5" />
          {card.label}
        </div>
      </div>

      {/* ── Bottom text ── */}
      <div className="absolute bottom-0 inset-x-0 z-10 px-5 pb-5 pt-10">
        <h3 className="text-white font-bold text-base leading-tight mb-1.5 drop-shadow-lg">
          {card.title}
        </h3>
        <p className="text-white/55 text-xs leading-relaxed line-clamp-2 group-hover:text-white/70 transition-colors duration-300">
          {card.desc}
        </p>
      </div>

      {/* ── Accent corner glow on hover ── */}
      <div
        className="absolute bottom-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
        style={{ background: card.accent, transform: 'translate(40%, 40%)' }}
      />
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Section
───────────────────────────────────────────── */
export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 relative border-t border-white/5 bg-black/40">
      <div className="container mx-auto max-w-5xl">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-5"
          >
            <span>⚡</span> Cada vez más potente
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-4xl md:text-5xl font-black font-display mb-4"
          >
            Tenemos muchas{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              características geniales
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-base text-white/50 max-w-xl mx-auto"
          >
            La comodidad de una tienda moderna combinada con la libertad y flexibilidad
            de una plataforma descentralizada.
          </motion.p>
        </div>

        {/* ── BENTO GRID ── */}
        <div
          className="grid grid-cols-3 gap-3"
          style={{ gridTemplateRows: '340px 280px 200px' }}
        >
          {cards.map((card, i) => (
            <BentoCard key={card.id} card={card} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
