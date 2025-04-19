import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-custom-background">
      <Header />
      <main>
        <HeroSection />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
