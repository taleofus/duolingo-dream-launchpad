
import React from 'react';
import { Button } from '@/components/ui/button';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  return (
    <header className="w-full py-3 px-4 sm:px-6 md:px-8 sticky top-0 bg-white/95 backdrop-blur-sm z-30 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-extrabold text-duo-purple">Strive</span>
        </div>
        <div className="hidden md:flex items-center">
          <Button 
            className="bg-duo-purple hover:bg-duo-purple-hover text-white px-6 py-2 rounded-xl text-sm transition-colors"
          >
            Get Early Access
          </Button>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
