import React from 'react';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { Container } from './ui/Container';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <Container>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">Shaken Illusions</h3>
            <p className="text-gray-400">Where mixology meets magic</p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#shop" className="hover:text-white transition-colors">Shop</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>contact@shakenillusions.com</li>
              <li>+40 756 510 386</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">&copy; 2024 Shaken Illusions. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://www.instagram.com/bartender_lupuflavius?igsh=MW9veXczdXFhYjQ2dA==" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="mailto:contact@shakenillusions.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}