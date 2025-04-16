
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check, Clock, Calendar, Star } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, you would send this to your backend
      console.log('Email submitted:', email);
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <img 
            src="/lovable-uploads/87c4953c-ee53-4980-934c-786e86699b14.png" 
            alt="FocusOwl Sloth Mascot" 
            className="w-full max-w-md mx-auto"
          />
        </div>
        
        <div className="space-y-8 order-1 md:order-2">
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

          <div>
            <p className="font-bold text-custom-secondary mb-3">Join our waitlist:</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email" 
                placeholder="Enter your email"
                className="rounded-xl border-2 border-gray-200 focus:border-custom-primary px-4 py-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="bg-custom-primary hover:bg-opacity-90 py-6">
                {submitted ? "You're on the list! 🎉" : "Join Waitlist"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
