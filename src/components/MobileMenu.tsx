
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

      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20" onClick={() => setIsOpen(false)} />
          
          {/* Menu Content */}
          <div className="absolute inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
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
              
              {/* Navigation Links */}
              <nav className="flex-1 p-4 space-y-1">
                <a 
                  href="#features" 
                  className="block w-full p-3 text-lg font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Features
                </a>
                <a 
                  href="#how-it-works" 
                  className="block w-full p-3 text-lg font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  How It Works
                </a>
              </nav>

              {/* Action Button */}
              <div className="p-4 border-t">
                <Button 
                  className="w-full bg-duo-purple hover:bg-duo-purple-hover text-white rounded-xl"
                  onClick={() => setIsOpen(false)}
                >
                  Get Early Access
                </Button>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute bottom-10 left-6">
                <div className="w-12 h-12 bg-duo-purple-light rounded-full opacity-50" />
              </div>
              <div className="absolute bottom-20 right-10">
                <div className="w-8 h-8 bg-duo-purple-light rounded-full opacity-50" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
