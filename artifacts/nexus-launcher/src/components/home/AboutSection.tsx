import React from 'react';
import { motion } from 'framer-motion';
import { Download, Star, Gamepad2, Globe } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const stats = [
  { icon: Star,      value: '16k+',  label: 'GitHub Stars'    },
  { icon: Download,  value: '2M+',   label: 'Downloads'       },
  { icon: Gamepad2,  value: '50k+',  label: 'Games in Catalog'},
  { icon: Globe,     value: '80+',   label: 'Countries'       },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 relative border-t border-white/5">
      {/* Subtle background glow */}
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
            <Gamepad2 className="w-4 h-4 text-cyan-400" />
            About Nexus
          </span>
        </motion.div>

        {/* Main copy */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="text-3xl md:text-4xl font-black font-display text-center mb-6 leading-tight"
        >
          One launcher.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Every game.
          </span>{' '}
          Zero compromises.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-base md:text-lg text-white/55 text-center max-w-2xl mx-auto mb-5 leading-relaxed"
        >
          Nexus is a free, open-source game launcher that lets you download, install and play 
          your games without the hassle. It tracks your stats, syncs your saves to the cloud, 
          and lets you connect with friends — all from one beautiful, customizable interface.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.22 }}
          className="text-sm text-white/35 text-center max-w-xl mx-auto mb-14 leading-relaxed"
        >
          Built by the community, for the community. No subscriptions, no lock-in — just your games, 
          your way. Supports Windows, macOS and Linux.
        </motion.p>

        {/* Stats row */}
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

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-white/15 bg-white/5 text-white/70 text-sm font-medium hover:border-cyan-500/40 hover:text-white hover:bg-cyan-500/8 transition-all duration-300 group"
          >
            <FaGithub className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
            View source on GitHub
            <span className="px-2 py-0.5 rounded-full bg-white/10 text-white/50 text-xs">
              16k ★
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
