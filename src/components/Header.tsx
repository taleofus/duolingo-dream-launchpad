
import React from 'react';
import { Button } from '@/components/ui/button';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-4 sm:px-6 md:px-8 sticky top-0 bg-white/95 backdrop-blur-sm z-40 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-extrabold text-custom-primary">FocusOwl</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#features" className="font-medium text-gray-600 hover:text-custom-primary transition-colors">Features</a>
          <a href="#how-it-works" className="font-medium text-gray-600 hover:text-custom-primary transition-colors">How It Works</a>
          <a href="#waitlist" className="font-medium text-gray-600 hover:text-custom-primary transition-colors">Join Waitlist</a>
        </nav>
        <div className="hidden md:flex items-center">
          <Button className="bg-custom-primary hover:bg-opacity-90 rounded-xl">Get Early Access</Button>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
