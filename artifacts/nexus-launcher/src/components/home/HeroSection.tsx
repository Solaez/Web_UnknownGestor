import React from 'react';
import { motion } from 'framer-motion';
import { Download, MonitorPlay, Search, Settings, Home, Library, Trophy, DownloadCloud, Gamepad, Gamepad2 } from 'lucide-react';
import { FaWindows } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6 min-h-[90vh] flex flex-col items-center justify-center relative">
      <div className="container mx-auto max-w-6xl text-center z-10 flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-sm font-medium mb-8 glow-purple"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
          </span>
          v4.0.0 just released!
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black font-display tracking-tight leading-tight mb-6 max-w-4xl"
        >
          The ultimate launcher for <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-secondary animate-gradient-x text-glow-cyan">all your gaming needs</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl"
        >
          Nexus is a game launcher that lets you download, play, track your stats and manage your entire library — all in one place.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-20"
        >
          <button className="flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all glow-cyan transform hover:scale-105 active:scale-95 w-full sm:w-auto justify-center">
            <FaWindows className="w-5 h-5" />
            Download for Windows
          </button>
          <button className="flex items-center gap-3 px-8 py-4 bg-card border border-border text-foreground font-bold rounded-xl hover:bg-muted hover:border-primary/50 transition-all w-full sm:w-auto justify-center">
            View on GitHub
          </button>
        </motion.div>

        {/* Mockup UI */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full max-w-5xl rounded-2xl overflow-hidden border border-border/50 shadow-2xl relative bg-card"
          style={{ boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5), 0 0 40px rgba(0, 212, 255, 0.1)' }}
        >
          {/* App Header */}
          <div className="h-10 bg-black/40 border-b border-border/50 flex items-center px-4">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/50 border border-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50 border border-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50 border border-green-500/50"></div>
            </div>
            <div className="mx-auto text-xs text-muted-foreground font-medium flex items-center gap-2">
              <Gamepad2 className="w-3.5 h-3.5" /> Nexus Launcher
            </div>
          </div>

          <div className="flex h-[500px]">
            {/* Sidebar */}
            <div className="w-64 bg-black/20 border-r border-border/50 p-4 flex flex-col">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search library..." 
                  className="w-full bg-black/40 border border-border/50 rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-primary/50 text-foreground"
                  disabled
                />
              </div>

              <nav className="space-y-1">
                <div className="flex items-center gap-3 px-3 py-2 bg-primary/10 text-primary rounded-lg font-medium border border-primary/20">
                  <Home className="w-4 h-4" /> Home
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg font-medium transition-colors">
                  <MonitorPlay className="w-4 h-4" /> Catalogue
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg font-medium transition-colors">
                  <DownloadCloud className="w-4 h-4" /> Downloads
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg font-medium transition-colors">
                  <Settings className="w-4 h-4" /> Settings
                </div>
              </nav>

              <div className="mt-8 mb-2 px-3 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                My Library
              </div>
              <nav className="space-y-1 flex-1 overflow-hidden">
                <div className="flex items-center justify-between px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg text-sm transition-colors">
                  <span className="truncate">Elden Ring</span>
                  <div className="w-2 h-2 rounded-full bg-primary glow-cyan"></div>
                </div>
                <div className="flex items-center justify-between px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg text-sm transition-colors">
                  <span className="truncate">Cyberpunk 2077</span>
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                </div>
                <div className="flex items-center justify-between px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg text-sm transition-colors">
                  <span className="truncate">God of War</span>
                </div>
                <div className="flex items-center justify-between px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg text-sm transition-colors">
                  <span className="truncate">Hollow Knight</span>
                </div>
              </nav>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-background relative overflow-hidden flex flex-col">
              {/* Featured Banner */}
              <div className="h-64 relative border-b border-border/50">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                
                <div className="absolute bottom-6 left-6 z-20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-primary/20 text-primary border border-primary/30 rounded text-xs font-bold">NEW RELEASE</span>
                  </div>
                  <h2 className="text-4xl font-display font-black mb-2 text-glow-cyan">STELLAR BLADE</h2>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><Trophy className="w-4 h-4" /> 45/50 Achievements</span>
                    <span>124 Hours Played</span>
                  </div>
                  <button className="flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground font-bold rounded hover:bg-primary/90 transition-all glow-cyan">
                    <MonitorPlay className="w-4 h-4" /> Play Now
                  </button>
                </div>
              </div>

              {/* Hot Now Grid */}
              <div className="p-6 flex-1">
                <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
                  Hot Now <span className="w-2 h-2 rounded-full bg-secondary glow-purple animate-pulse"></span>
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { title: "Neon Syndicate", genre: "RPG", color: "border-primary/30" },
                    { title: "Shadow Protocol", genre: "Shooter", color: "border-secondary/30" },
                    { title: "Cyber Drift", genre: "Racing", color: "border-blue-500/30" }
                  ].map((game, i) => (
                    <div key={i} className={`bg-card/50 border ${game.color} p-3 rounded-xl hover:bg-card hover:border-primary/50 transition-all cursor-pointer group`}>
                      <div className="h-24 bg-black/40 rounded-lg mb-3 overflow-hidden relative">
                         <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                      <h4 className="font-bold text-sm truncate">{game.title}</h4>
                      <p className="text-xs text-muted-foreground">{game.genre}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
