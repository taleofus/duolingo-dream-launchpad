
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button 
        variant="ghost" 
        size="icon" 
        className="text-gray-700" 
        onClick={() => setIsOpen(true)}
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center mb-8">
              <span className="text-2xl font-extrabold text-duo-purple">Strive</span>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-700" 
                onClick={() => setIsOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            <nav className="flex flex-col space-y-6">
              <a 
                href="#features" 
                className="text-xl font-medium py-2 border-b border-gray-100" 
                onClick={() => setIsOpen(false)}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="text-xl font-medium py-2 border-b border-gray-100" 
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </a>
              <Button className="btn-duo-purple rounded-xl w-full mt-4" onClick={() => setIsOpen(false)}>
                Get Early Access
              </Button>
            </nav>
            
            {/* Decorative elements in Duolingo style */}
            <div className="absolute bottom-10 left-6">
              <div className="w-12 h-12 bg-duo-purple-light rounded-full"></div>
            </div>
            <div className="absolute bottom-20 right-10">
              <div className="w-8 h-8 bg-duo-purple-light rounded-full"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
