import React from 'react';
import { motion } from 'framer-motion';
import { FaWindows, FaLinux, FaGithub } from 'react-icons/fa';
import { Download } from 'lucide-react';

const platforms = [
  {
    icon: FaWindows,
    name: 'Windows',
    formats: ['.exe Instalador', 'Portable'],
    accent: 'cyan',
    href: 'https://github.com/Solaez/UnknownGestor/releases',
    primary: true,
  },
  {
    icon: FaLinux,
    name: 'Linux',
    formats: ['.AppImage', '.deb'],
    accent: 'purple',
    href: 'https://github.com/Solaez/UnknownGestor/releases',
    primary: false,
  },
];

export default function DownloadSection() {
  return (
    <section id="download" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent z-0" />

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card/50 backdrop-blur-md border border-border p-12 md:p-16 rounded-3xl shadow-2xl"
          style={{ boxShadow: '0 0 80px rgba(0, 212, 255, 0.05)' }}
        >
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6"
          >
            <Download className="w-4 h-4" /> Descarga gratuita
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black font-display mb-5">
            Listo para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              empezar?
            </span>
          </h2>

          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            UnknownGestor es completamente gratuito y open source. Descárgalo para Windows
            o Linux y comienza a gestionar tu biblioteca en minutos.
          </p>

          {/* Platform cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-xl mx-auto">
            {platforms.map((p) => {
              const Icon = p.icon;
              const isCyan = p.accent === 'cyan';
              return (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`group flex flex-col items-center gap-3 p-6 rounded-2xl border transition-all duration-300 hover:scale-105 active:scale-95 ${
                    p.primary
                      ? 'bg-primary text-primary-foreground border-primary/80 glow-cyan'
                      : 'bg-card border-border hover:border-purple-500/50 hover:bg-purple-500/5'
                  }`}
                >
                  <Icon className={`w-8 h-8 ${p.primary ? '' : 'text-purple-400'}`} />
                  <span className="text-lg font-bold font-display">{p.name}</span>
                  <div className="flex flex-wrap justify-center gap-2">
                    {p.formats.map((f) => (
                      <span
                        key={f}
                        className={`text-xs px-2 py-0.5 rounded-full font-mono ${
                          p.primary
                            ? 'bg-white/20 text-white/80'
                            : 'bg-white/5 border border-white/10 text-white/50'
                        }`}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </a>
              );
            })}
          </div>

          {/* GitHub link */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <span>Código fuente disponible en:</span>
            <a
              href="https://github.com/Solaez/UnknownGestor"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-foreground hover:text-primary transition-colors font-medium"
            >
              <FaGithub className="w-4 h-4" />
              GitHub — Solaez/UnknownGestor
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
