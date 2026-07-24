import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Trophy, Users, Cloud, UserCircle, Clock } from 'lucide-react';

const features = [
  {
    id: 1,
    highlight: 'Custom Themes.',
    description: 'Download thousands of community-made themes for your launcher.',
    icon: Palette,
    accent: 'cyan',
    imageSrc: '',
    imageAlt: 'Custom Themes screenshot',
    // bento: wide card, shorter image
    colSpan: 'md:col-span-2',
    imageAspect: 'aspect-[16/7]',
  },
  {
    id: 2,
    highlight: 'Achievements.',
    description: 'Unlock achievements, showcase your gaming prowess, and compare your progress with friends.',
    icon: Trophy,
    accent: 'purple',
    imageSrc: '',
    imageAlt: 'Achievements screenshot',
    // bento: narrow + tall — row-span-2 handled via self-alignment trick
    colSpan: 'md:col-span-1',
    imageAspect: 'aspect-[3/4]',
  },
  {
    id: 3,
    highlight: 'Friends & Status.',
    description: 'See what your crew is playing in real time and join their sessions instantly.',
    icon: Users,
    accent: 'cyan',
    imageSrc: '',
    imageAlt: 'Friends & Status screenshot',
    colSpan: 'md:col-span-1',
    imageAspect: 'aspect-[4/3]',
  },
  {
    id: 4,
    highlight: 'Cloud Saving.',
    description: "Nexus Cloud's seamless sync ensures you pick up right where you left off on any device.",
    icon: Cloud,
    accent: 'purple',
    imageSrc: '',
    imageAlt: 'Cloud Saving screenshot',
    colSpan: 'md:col-span-2',
    imageAspect: 'aspect-[16/7]',
  },
  {
    id: 5,
    highlight: 'Custom Profile.',
    description: 'Create a striking presence, showcase your achievements and personalize your identity.',
    icon: UserCircle,
    accent: 'cyan',
    imageSrc: '',
    imageAlt: 'Custom Profile screenshot',
    colSpan: 'md:col-span-1',
    imageAspect: 'aspect-video',
  },
  {
    id: 6,
    highlight: 'Playtime Tracking.',
    description: 'Track every hour on every game and show off to your friends!',
    icon: Clock,
    accent: 'purple',
    imageSrc: '',
    imageAlt: 'Playtime Tracking screenshot',
    colSpan: 'md:col-span-2',
    imageAspect: 'aspect-[16/7]',
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
      {/* Image / placeholder with zoom */}
      <div className={`relative w-full ${feature.imageAspect} overflow-hidden`}>
        {feature.imageSrc ? (
          <img
            src={feature.imageSrc}
            alt={feature.imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
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
                  ? 'border-cyan-500/30 bg-cyan-500/10 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50'
                  : 'border-purple-500/30 bg-purple-500/10 group-hover:bg-purple-500/20 group-hover:border-purple-400/50'
              }`}
            >
              <Icon
                className={`w-10 h-10 transition-colors ${
                  isCyan ? 'text-cyan-400' : 'text-purple-400'
                }`}
              />
            </div>
            <span className="text-[10px] text-white/15 font-mono tracking-widest uppercase select-none">
              {feature.imageAlt}
            </span>
          </div>
        )}

        {/* Bottom fade into card body */}
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

      {/* Corner accent glow */}
      <div
        className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none ${
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
            <span className="text-base">⚡</span> It keeps getting better!
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black font-display mb-4 text-white"
          >
            We have lots of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              cool features
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-white/50 max-w-xl mx-auto"
          >
            Convenience of a modern game launcher combined with the freedom and flexibility of a
            decentralized platform.
          </motion.p>
        </div>

        {/* Bento grid — 3 columns, varying card widths */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
          {features.map((feature, i) => (
            <FeatureCard key={feature.id} feature={feature} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  );
}
