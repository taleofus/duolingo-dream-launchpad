
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
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-800">
            Take Control of Your 
            <span className="text-duo-purple"> Screen Time</span> with Fun
          </h1>
          <p className="text-xl text-gray-600">
            FocusOwl makes productivity fun with daily goals, streaks, and rewards - 
            just like learning a language, but for beating screen addiction!
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-duo-green-light p-1">
                <Check className="h-5 w-5 text-duo-green" />
              </div>
              <span className="font-medium">Daily Challenges</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-duo-purple-light p-1">
                <Star className="h-5 w-5 text-duo-purple" />
              </div>
              <span className="font-medium">Fun Rewards</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-duo-blue-light p-1">
                <Calendar className="h-5 w-5 text-duo-blue" />
              </div>
              <span className="font-medium">Productivity Streaks</span>
            </div>
          </div>

          <div>
            <p className="font-bold text-gray-700 mb-3">Join our waitlist:</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email" 
                placeholder="Enter your email"
                className="rounded-xl border-2 border-gray-200 focus:border-duo-green px-4 py-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="btn-duo-green py-6">
                {submitted ? "You're on the list! 🎉" : "Join Waitlist"}
              </Button>
            </form>
          </div>
        </div>
        
        <div className="relative">
          {/* Mascot Image Placeholder */}
          <div className="bg-duo-purple/10 rounded-3xl h-80 sm:h-96 md:h-[450px] flex items-center justify-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-48 h-48 sm:w-60 sm:h-60 bg-duo-green rounded-full flex items-center justify-center animate-float">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full relative">
                  {/* Owl Eyes */}
                  <div className="absolute top-1/3 left-1/4 w-5 h-5 bg-duo-purple rounded-full"></div>
                  <div className="absolute top-1/3 right-1/4 w-5 h-5 bg-duo-purple rounded-full"></div>
                  {/* Owl Beak */}
                  <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-duo-orange rounded-md rotate-45"></div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-duo-blue rounded-full opacity-60 animate-float-delay-1"></div>
            <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-duo-orange rounded-full opacity-60 animate-float-delay-2"></div>
            <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-duo-red rounded-full opacity-60 animate-bounce-small"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
