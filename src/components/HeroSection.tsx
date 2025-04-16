
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Clock, Calendar, Star } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-custom-secondary">
            Take Control of Your 
            <span className="text-custom-primary"> Screen Time</span> with Fun
          </h1>
          <p className="text-xl text-gray-600">
            FocusOwl makes productivity fun with daily goals, streaks, and rewards - 
            just like learning a language, but for beating screen addiction!
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-custom-primary bg-opacity-10 p-1">
                <Check className="h-5 w-5 text-custom-primary" />
              </div>
              <span className="font-medium">Daily Challenges</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-custom-primary bg-opacity-10 p-1">
                <Star className="h-5 w-5 text-custom-primary" />
              </div>
              <span className="font-medium">Fun Rewards</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-custom-primary bg-opacity-10 p-1">
                <Calendar className="h-5 w-5 text-custom-primary" />
              </div>
              <span className="font-medium">Productivity Streaks</span>
            </div>
          </div>

          <div className="pt-4">
            <a href="#waitlist">
              <Button className="bg-custom-primary hover:bg-opacity-90 py-6 text-base">
                Join the Waitlist
              </Button>
            </a>
          </div>
        </div>
        
        <div className="order-first md:order-last">
          <img 
            src="/lovable-uploads/81ae1636-eaba-4f58-a323-3473d7b2ed33.png" 
            alt="FocusOwl Sloth Mascot" 
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
