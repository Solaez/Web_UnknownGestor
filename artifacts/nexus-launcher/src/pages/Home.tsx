import React from 'react';
import Navbar from '@/components/home/Navbar';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import CatalogSection from '@/components/home/CatalogSection';
import CloudSection from '@/components/home/CloudSection';
import DownloadSection from '@/components/home/DownloadSection';
import Footer from '@/components/home/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      {/* Background Textures */}
      <div className="fixed inset-0 pointer-events-none bg-grid-pattern z-0" />
      <div className="fixed inset-0 pointer-events-none bg-scanline-pattern opacity-30 z-0" />
      <div className="fixed inset-0 pointer-events-none bg-radial-gradient z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <AboutSection />
          <FeaturesSection />
          <CatalogSection />
          <CloudSection />
          <DownloadSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
