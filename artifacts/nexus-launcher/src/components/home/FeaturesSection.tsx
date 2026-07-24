import React from 'react';
import { motion } from 'framer-motion';
import { Store, Gamepad2, Puzzle, Download, Database, Sparkles } from 'lucide-react';

import homeScreen    from '@assets/app-home.png';
import romsScreen    from '@assets/app-roms.png';
import modsScreen    from '@assets/app-mods.png';
import dlScreen      from '@assets/app-downloads.png';

const features = [
  {
    id: 1,
    highlight: 'Tienda de Aplicaciones.',
    description: 'Instalación simplificada de programas, drivers y juegos. Categorización inteligente: Drivers, Juegos, Diseño, Desarrollo y más.',
    icon: Store,
    accent: 'cyan',
    imageSrc: homeScreen,
    imageAlt: 'Tienda de aplicaciones',
    colSpan: 'md:col-span-2',
    imageAspect: 'aspect-[16/8]',
  },
  {
    id: 2,
    highlight: 'Gestor de ROMs.',
    description: 'Lanzador integrado para tus juegos retro. Biblioteca personal de favoritos y soporte para múltiples fuentes de descarga.',
    icon: Gamepad2,
    accent: 'purple',
    imageSrc: romsScreen,
    imageAlt: 'Biblioteca de ROMs y emuladores',
    colSpan: 'md:col-span-1',
    imageAspect: 'aspect-[3/4]',
  },
  {
    id: 3,
    highlight: 'Explorador de Mods.',
    description: 'Navega NexusMods y GameBanana directamente desde la app. Búsqueda avanzada por juego o mod específico sin salir del programa.',
    icon: Puzzle,
    accent: 'cyan',
    imageSrc: modsScreen,
    imageAlt: 'Explorador de mods NexusMods y GameBanana',
    colSpan: 'md:col-span-1',
    imageAspect: 'aspect-[4/3]',
  },
  {
    id: 4,
    highlight: 'Gestor de Descargas.',
    description: 'Motor WebTorrent nativo para descargas de torrents. Soporte para 1fichier, Mediafire y más. Monitoreo de progreso en tiempo real.',
    icon: Download,
    accent: 'purple',
    imageSrc: dlScreen,
    imageAlt: 'Gestor de descargas con WebTorrent',
    colSpan: 'md:col-span-2',
    imageAspect: 'aspect-[16/8]',
  },
  {
    id: 5,
    highlight: 'Multi-Fuente.',
    description: 'Agrega múltiples repositorios JSON externos. Tu catálogo crece sin límites — personaliza las fuentes de contenido a tu gusto.',
    icon: Database,
    accent: 'cyan',
    imageSrc: '',
    imageAlt: 'Soporte multi-fuente',
    colSpan: 'md:col-span-1',
    imageAspect: 'aspect-video',
  },
  {
    id: 6,
    highlight: 'Diseño Glassmorphism.',
    description: 'Interfaz moderna con efectos de vidrio, temas oscuros y animaciones suaves. Una experiencia visual tan buena como su potencia técnica.',
    icon: Sparkles,
    accent: 'purple',
    imageSrc: '',
    imageAlt: 'Interfaz glassmorphism',
    colSpan: 'md:col-span-2',
    imageAspect: 'aspect-[16/8]',
  },
];

function FeatureCard({ feature, delay }: { feature: (typeof features)[0]; delay: number }) {
  const Icon = feature.icon;
  const isCyan = feature.accent === 'cyan';

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay }}
      className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 bg-[#0d0d14] ${feature.colSpan} ${
        isCyan
          ? 'border-cyan-500/20 hover:border-cyan-500/60 hover:shadow-[0_0_40px_-4px_rgba(0,212,255,0.18)]'
          : 'border-purple-500/20 hover:border-purple-500/60 hover:shadow-[0_0_40px_-4px_rgba(124,58,237,0.18)]'
      }`}
    >
      {/* Image area with zoom on hover */}
      <div className={`relative w-full ${feature.imageAspect} overflow-hidden`}>
        {feature.imageSrc ? (
          <img
            src={feature.imageSrc}
            alt={feature.imageAlt}
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div
            className={`w-full h-full flex flex-col items-center justify-center gap-3 transition-transform duration-500 ease-out group-hover:scale-105 ${
              isCyan
                ? 'bg-gradient-to-br from-cyan-950/70 via-slate-900/80 to-slate-950'
                : 'bg-gradient-to-br from-purple-950/70 via-slate-900/80 to-slate-950'
            }`}
          >
            <div
              className={`p-5 rounded-2xl border transition-all duration-300 group-hover:scale-110 ${
                isCyan
                  ? 'border-cyan-500/30 bg-cyan-500/10 group-hover:bg-cyan-500/20'
                  : 'border-purple-500/30 bg-purple-500/10 group-hover:bg-purple-500/20'
              }`}
            >
              <Icon className={`w-10 h-10 ${isCyan ? 'text-cyan-400' : 'text-purple-400'}`} />
            </div>
            <span className="text-[10px] text-white/15 font-mono tracking-widest uppercase select-none">
              {feature.imageAlt}
            </span>
          </div>
        )}

        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0d0d14] to-transparent pointer-events-none" />
      </div>

      {/* Text */}
      <div className="px-5 py-4">
        <p className="text-sm leading-relaxed text-white/75">
          <span className={`font-bold ${isCyan ? 'text-cyan-400' : 'text-purple-400'}`}>
            {feature.highlight}{' '}
          </span>
          {feature.description}
        </p>
      </div>

      {/* Corner glow on hover */}
      <div
        className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none ${
          isCyan ? 'bg-cyan-400' : 'bg-purple-400'
        }`}
      />
    </motion.div>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 relative border-t border-white/5 bg-black/40">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-5"
          >
            <span className="text-base">⚡</span> Cada vez más potente
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black font-display mb-4 text-white"
          >
            Tenemos muchas{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              características geniales
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-white/50 max-w-xl mx-auto"
          >
            La comodidad de una tienda moderna combinada con la libertad y flexibilidad
            de una plataforma descentralizada.
          </motion.p>
        </div>

        {/* Bento grid — 3 cols, varying widths */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
          {features.map((feature, i) => (
            <FeatureCard key={feature.id} feature={feature} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  );
}
