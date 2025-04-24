
import React from 'react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

const HeroSection: React.FC = () => {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section aria-label="hero" className="py-12 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-custom-secondary">
            Reclaim Your 
            <span className="text-duo-purple"> Screen Time</span> and Make It
            <span className="text-duo-purple"> Fun</span>
          </h1>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Strive helps you use your screen with intention - without the guilt. 
            Get smart nudges, helpful tools and a sloth sidekick that keeps you 
            aware (and slightly roasted) while you scroll
          </p>

          <div className="pt-4">
            <Button 
              onClick={scrollToWaitlist}
              className="bg-duo-purple hover:bg-duo-purple-hover text-white py-5 px-8 text-base transition-colors"
              aria-label="Join the Waitlist"
            >
              Join the Waitlist
            </Button>
          </div>
        </div>
        
        <div className="order-first md:order-last relative">
          {!imageLoaded && (
            <Skeleton className="w-full h-[500px] max-w-md mx-auto rounded-xl" />
          )}
          <img 
            src="/lovable-uploads/098aa936-5ba7-4eff-81a3-b9aba2cdaef8.png" 
            alt="Strive Sloth Mascot - Skateboarding Productivity Companion"
            className={`w-full max-w-md mx-auto ${imageLoaded ? 'block' : 'hidden'}`}
            width="500"
            height="500"
            loading="eager"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
