
import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { Separator } from './ui/separator';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-12 px-4 sm:px-6 md:px-8 border-t border-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center">
              <span className="text-2xl font-extrabold text-duo-purple">Strive</span>
            </div>
            <p className="mt-4 text-gray-600 max-w-md">
              Making productivity fun with gamified screen time management, challenges, and rewards.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-duo-purple transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-duo-purple transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-duo-purple transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-800">Product</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#features" className="text-gray-600 hover:text-duo-purple transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-600 hover:text-duo-purple transition-colors">How it Works</a></li>
              <li><a href="#" className="text-gray-600 hover:text-duo-purple transition-colors">Pricing</a></li>
              <li><a href="#waitlist" className="text-gray-600 hover:text-duo-purple transition-colors">Waitlist</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-800">Company</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-duo-purple transition-colors">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-duo-purple transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-duo-purple transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-duo-purple transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-200" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Strive. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-duo-purple transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-duo-purple transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-duo-purple transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
