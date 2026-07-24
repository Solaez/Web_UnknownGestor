import React from 'react';
import { motion } from 'framer-motion';
import { FaWindows, FaLinux, FaGithub } from 'react-icons/fa';
import appHomeScreen from '@assets/app-home.png';

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6 min-h-[90vh] flex flex-col items-center justify-center relative">
      <div className="container mx-auto max-w-5xl text-center z-10 flex flex-col items-center">

        {/* Version badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-sm font-medium mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
          </span>
          v2.0 — disponible ahora
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black font-display tracking-tight leading-tight mb-6 max-w-4xl"
        >
          La tienda de apps y{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-secondary animate-gradient-x text-glow-cyan">
            gestor de mods
          </span>{' '}
          que necesitas
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl"
        >
          UnknownGestor es una potente tienda de aplicaciones y gestor de mods multiplataforma
          diseñada para descargar software, juegos, ROMs y personalizaciones desde un solo lugar.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-20"
        >
          <a
            href="https://github.com/Solaez/UnknownGestor/releases"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all glow-cyan transform hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
          >
            <FaWindows className="w-5 h-5" />
            Descargar para Windows
          </a>
          <a
            href="https://github.com/Solaez/UnknownGestor/releases"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-card border border-border text-foreground font-bold rounded-xl hover:bg-muted hover:border-primary/50 transition-all w-full sm:w-auto justify-center"
          >
            <FaLinux className="w-5 h-5" />
            Descargar para Linux
          </a>
          <a
            href="https://github.com/Solaez/UnknownGestor"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-card border border-border text-foreground font-bold rounded-xl hover:bg-muted transition-all w-full sm:w-auto justify-center text-muted-foreground hover:text-foreground"
          >
            <FaGithub className="w-5 h-5" />
            Ver en GitHub
          </a>
        </motion.div>

        {/* Real app screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="w-full max-w-5xl rounded-2xl overflow-hidden border border-border/50 shadow-2xl relative"
          style={{ boxShadow: '0 25px 60px -12px rgba(0,0,0,0.7), 0 0 60px rgba(0,212,255,0.08)' }}
        >
          {/* Fake window bar */}
          <div className="h-9 bg-black/60 border-b border-border/50 flex items-center px-4 gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/70 border border-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70 border border-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/70 border border-green-500/50" />
            <span className="mx-auto text-xs text-muted-foreground">UnknownGestor v2.0</span>
          </div>
          <img
            src={appHomeScreen}
            alt="UnknownGestor — pantalla de inicio"
            className="w-full object-cover"
          />
          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
}
