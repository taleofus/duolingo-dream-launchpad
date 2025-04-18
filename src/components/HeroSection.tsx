
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Clock, Calendar, Star } from 'lucide-react';
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
    <section aria-label="hero" className="py-20 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-custom-secondary">
            Take Control of Your 
            <span className="text-custom-primary"> Screen Time</span> with Fun
          </h1>
          <p className="text-xl text-gray-600">
            Strive makes productivity fun with daily goals, streaks, and rewards - 
            just like learning a language, but for beating screen addiction!
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center gap-2" role="listitem">
              <div className="rounded-full bg-custom-primary bg-opacity-10 p-1">
                <Check className="h-5 w-5 text-custom-primary" aria-hidden="true" />
              </div>
              <span className="font-medium">Daily Challenges</span>
            </div>
            <div className="flex items-center gap-2" role="listitem">
              <div className="rounded-full bg-custom-primary bg-opacity-10 p-1">
                <Star className="h-5 w-5 text-custom-primary" aria-hidden="true" />
              </div>
              <span className="font-medium">Fun Rewards</span>
            </div>
            <div className="flex items-center gap-2" role="listitem">
              <div className="rounded-full bg-custom-primary bg-opacity-10 p-1">
                <Calendar className="h-5 w-5 text-custom-primary" aria-hidden="true" />
              </div>
              <span className="font-medium">Productivity Streaks</span>
            </div>
          </div>

          <div className="pt-4">
            <Button 
              onClick={scrollToWaitlist}
              className="bg-custom-primary hover:bg-opacity-90 py-6 text-base"
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
            src="/lovable-uploads/81ae1636-eaba-4f58-a323-3473d7b2ed33.png" 
            alt="Strive Sloth Mascot - Your friendly productivity companion"
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
