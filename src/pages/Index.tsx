
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorks from '@/components/HowItWorks';
import WaitlistSection from '@/components/WaitlistSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorks />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
