import React from 'react';
import { motion } from 'framer-motion';
import { Download, Layers, MonitorSmartphone, Puzzle } from 'lucide-react';
import { FaGithub, FaWindows, FaLinux } from 'react-icons/fa';

const stats = [
  { icon: MonitorSmartphone, value: '2',     label: 'Plataformas'           },
  { icon: Layers,            value: '5+',    label: 'Categorías de apps'    },
  { icon: Puzzle,            value: '2',     label: 'Comunidades de mods'   },
  { icon: Download,          value: '100%',  label: 'Gratuito y open source'},
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 relative border-t border-white/5">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-sm">
            <span className="text-base">🚀</span> Sobre UnknownGestor
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="text-3xl md:text-4xl font-black font-display text-center mb-6 leading-tight"
        >
          Una app.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Todo lo que necesitas.
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-base md:text-lg text-white/55 text-center max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          <strong className="text-white/80">UnknownGestor</strong> es una potente tienda de aplicaciones
          y gestor de mods multiplataforma diseñada para ofrecer una experiencia fluida y elegante
          al descargar software, juegos y personalizaciones.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.22 }}
          className="text-sm text-white/35 text-center max-w-xl mx-auto mb-14 leading-relaxed"
        >
          Gestiona tus ROMs y emuladores, explora NexusMods y GameBanana, descarga por torrent
          con WebTorrent, y mucho más — todo desde una interfaz moderna con diseño glassmorphism.
          Disponible para <span className="text-white/55">Windows</span> y{' '}
          <span className="text-white/55">Linux</span>.
        </motion.p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.07 }}
                className="group flex flex-col items-center gap-2 p-5 rounded-2xl border border-white/8 bg-white/3 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300"
              >
                <Icon className="w-5 h-5 text-cyan-400/70 group-hover:text-cyan-400 transition-colors" />
                <span className="text-2xl font-black font-display text-white">{stat.value}</span>
                <span className="text-xs text-white/40 text-center">{stat.label}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Platform badges + GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-white/60 text-sm">
            <FaWindows className="w-4 h-4 text-cyan-400" /> Windows — .exe / Portable
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-white/60 text-sm">
            <FaLinux className="w-4 h-4 text-purple-400" /> Linux — .AppImage / .deb
          </span>
          <a
            href="https://github.com/Solaez/UnknownGestor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-white/60 text-sm hover:border-cyan-500/40 hover:text-white hover:bg-cyan-500/8 transition-all duration-300 group"
          >
            <FaGithub className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
            Ver en GitHub
            <span className="px-1.5 py-0.5 rounded-full bg-white/10 text-white/40 text-xs">1 ★</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
