
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle, ChevronRight, Users } from 'lucide-react';

const WaitlistSection: React.FC = () => {
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
    <section id="waitlist" className="py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-duo-green-light rounded-full opacity-60 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-duo-purple-light rounded-full opacity-60 blur-3xl"></div>
      
      <div className="container mx-auto relative">
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Waitlist Form Section */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Users className="text-duo-purple" size={20} />
                <span className="text-sm font-bold text-duo-purple">JOIN 1,000+ EARLY ADOPTERS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Get Early Access to FocusOwl</h2>
              <p className="text-gray-600 mb-6">
                Be among the first to experience our productivity game that makes managing screen time fun and rewarding.
              </p>
              
              {submitted ? (
                <div className="bg-duo-green-light rounded-xl p-4 flex items-center gap-3 mb-4">
                  <CheckCircle className="text-duo-green" size={24} />
                  <p className="font-medium">Thanks! You're on the waitlist. We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="email" 
                    placeholder="Enter your email address"
                    className="rounded-xl border-2 border-gray-200 focus:border-duo-green py-6"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button 
                    type="submit" 
                    className="btn-duo-green w-full py-6 flex items-center justify-center gap-2"
                  >
                    Join Waitlist
                    <ChevronRight size={20} />
                  </Button>
                </form>
              )}
              
              {/* Gamification Tease */}
              <div className="mt-8 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((n) => (
                    <div key={n} className={`w-10 h-10 rounded-full border-2 border-white bg-duo-${n === 1 ? 'green' : n === 2 ? 'purple' : 'orange'} flex items-center justify-center text-white font-bold`}>
                      {n}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <p className="font-bold">Earn exclusive badges as an early adopter</p>
                  <p>Be among the first to start your productivity streak</p>
                </div>
              </div>
            </div>
            
            {/* Mascot/Visual Element */}
            <div className="hidden md:block w-1/3 relative">
              {/* Simple Owl Visualization */}
              <div className="bg-duo-green rounded-full w-40 h-40 flex items-center justify-center relative animate-float">
                {/* Face */}
                <div className="bg-white rounded-full w-24 h-24 absolute">
                  {/* Eyes */}
                  <div className="absolute top-6 left-5 w-4 h-4 bg-duo-purple rounded-full"></div>
                  <div className="absolute top-6 right-5 w-4 h-4 bg-duo-purple rounded-full"></div>
                  {/* Beak */}
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-duo-orange rounded-md rotate-45"></div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-6 h-6 bg-duo-orange rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 bg-duo-purple rounded-full"></div>
              </div>
              
              {/* Progress Bar */}
              <div className="mt-6 bg-gray-100 w-full rounded-full h-4 overflow-hidden">
                <div className="bg-duo-green h-full" style={{ width: '70%' }}></div>
              </div>
              <p className="text-sm font-medium text-gray-600 mt-2">70% of waitlist spots filled</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
