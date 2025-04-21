
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { SheetClose, SheetTitle, SheetDescription } from '@/components/ui/sheet';

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent 
          side="right" 
          className="w-[85%] max-w-sm p-0 border-0 bg-white shadow-xl"
        >
          {/* Add SheetTitle for accessibility */}
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <SheetDescription className="sr-only">Main navigation links</SheetDescription>
          
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <span className="text-2xl font-extrabold text-duo-purple">Strive</span>
              <SheetClose asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-gray-700"
                >
                  <X className="h-6 w-6" />
                </Button>
              </SheetClose>
            </div>
            
            {/* Navigation Links */}
            <nav className="flex-1 p-5 space-y-2">
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
            <div className="p-5 border-t mt-auto">
              <Button 
                className="w-full bg-duo-purple hover:bg-duo-purple-hover text-white rounded-xl py-6"
                onClick={() => setIsOpen(false)}
              >
                Get Early Access
              </Button>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute bottom-28 left-8">
              <div className="w-16 h-16 bg-duo-purple-light rounded-full opacity-50" />
            </div>
            <div className="absolute bottom-48 right-12">
              <div className="w-10 h-10 bg-duo-purple-light rounded-full opacity-50" />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
