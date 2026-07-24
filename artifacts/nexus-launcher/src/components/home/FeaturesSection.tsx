import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Trophy, Users, Cloud, UserCircle, Clock } from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'Custom Themes',
    highlight: 'Custom Themes.',
    description: 'Download thousands of community-made themes for your launcher.',
    icon: Palette,
    accent: 'cyan',
    placeholderBg: 'from-cyan-950/80 via-slate-900 to-slate-950',
    placeholderIcon: Palette,
    // Replace src with your screenshot path, e.g. "/screenshots/themes.png"
    imageSrc: '',
    imageAlt: 'Custom Themes screenshot',
  },
  {
    id: 2,
    title: 'Achievements',
    highlight: 'Achievements.',
    description: 'Unlock achievements, showcase your gaming prowess, and compare your progress with friends — all within the Nexus ecosystem.',
    icon: Trophy,
    accent: 'purple',
    placeholderBg: 'from-purple-950/80 via-slate-900 to-slate-950',
    placeholderIcon: Trophy,
    imageSrc: '',
    imageAlt: 'Achievements screenshot',
  },
  {
    id: 3,
    title: 'Friends & Status',
    highlight: 'Friends & Status.',
    description: 'Connect, see what they\'re playing, view their achievements and their beautifully customized profiles.',
    icon: Users,
    accent: 'cyan',
    placeholderBg: 'from-cyan-950/60 via-slate-900 to-slate-950',
    placeholderIcon: Users,
    imageSrc: '',
    imageAlt: 'Friends & Status screenshot',
  },
  {
    id: 4,
    title: 'Cloud Saving',
    highlight: 'Cloud Saving.',
    description: 'Nexus Cloud\'s seamless sync ensures you can pick up right where you left off, across all your devices.',
    icon: Cloud,
    accent: 'purple',
    placeholderBg: 'from-teal-950/80 via-slate-900 to-slate-950',
    placeholderIcon: Cloud,
    imageSrc: '',
    imageAlt: 'Cloud Saving screenshot',
  },
  {
    id: 5,
    title: 'Custom Profile',
    highlight: 'Custom Profile.',
    description: 'Create a striking combination, showcase your achievements and customize your presence in Nexus.',
    icon: UserCircle,
    accent: 'cyan',
    placeholderBg: 'from-cyan-950/60 via-slate-900 to-slate-950',
    placeholderIcon: UserCircle,
    imageSrc: '',
    imageAlt: 'Custom Profile screenshot',
  },
  {
    id: 6,
    title: 'Playtime Tracking',
    highlight: 'Playtime Tracking.',
    description: 'Track your hours on every game and show off to your friends!',
    icon: Clock,
    accent: 'purple',
    placeholderBg: 'from-purple-950/80 via-slate-900 to-slate-950',
    placeholderIcon: Clock,
    imageSrc: '',
    imageAlt: 'Playtime Tracking screenshot',
  },
];

function FeatureCard({ feature, delay }: { feature: typeof features[0]; delay: number }) {
  const Icon = feature.placeholderIcon;
  const isCyan = feature.accent === 'cyan';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
      className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 ${
        isCyan
          ? 'border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-[0_0_32px_0_rgba(0,212,255,0.12)]'
          : 'border-purple-500/20 hover:border-purple-500/50 hover:shadow-[0_0_32px_0_rgba(124,58,237,0.12)]'
      } bg-[#0d0d14]`}
    >
      {/* Image area */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-950">
        {feature.imageSrc ? (
          <img
            src={feature.imageSrc}
            alt={feature.imageAlt}
            className="w-full h-full object-cover"
          />
        ) : (
          /* Placeholder — replace imageSrc above with your screenshot path */
          <div className={`w-full h-full bg-gradient-to-br ${feature.placeholderBg} flex flex-col items-center justify-center gap-3`}>
            <div className={`p-5 rounded-2xl border ${
              isCyan ? 'border-cyan-500/30 bg-cyan-500/10' : 'border-purple-500/30 bg-purple-500/10'
            }`}>
              <Icon className={`w-10 h-10 ${isCyan ? 'text-cyan-400' : 'text-purple-400'}`} />
            </div>
            <span className="text-xs text-white/20 font-mono tracking-widest uppercase">
              {feature.imageAlt}
            </span>
          </div>
        )}

        {/* Subtle gradient fade into card bottom */}
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0d0d14] to-transparent pointer-events-none" />
      </div>

      {/* Text content */}
      <div className="px-5 py-4">
        <p className="text-sm text-white/80 leading-relaxed">
          <span className={`font-bold ${isCyan ? 'text-cyan-400' : 'text-purple-400'}`}>
            {feature.highlight}{' '}
          </span>
          {feature.description}
        </p>
      </div>
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
            We have lots of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">cool features</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-white/50 max-w-xl mx-auto"
          >
            Convenience of a modern game launcher combined with the freedom and flexibility of a decentralized platform.
          </motion.p>
        </div>

        {/* Bento grid — 2 columns, 3 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, i) => (
            <FeatureCard key={feature.id} feature={feature} delay={i * 0.08} />
          ))}
        </div>

      </div>
    </section>
  );
}
