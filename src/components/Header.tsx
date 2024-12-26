import React from 'react';
import { Wand2, Menu } from 'lucide-react';
import { Link } from './Link';
import { Container } from './ui/Container';
import { NAVIGATION_LINKS } from '../utils/constants';

export function Header() {
  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <Container>
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Wand2 className="h-8 w-8 text-white" />
            <span className="ml-2 text-2xl font-serif text-white tracking-wider">
              Shaken Illusions
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {NAVIGATION_LINKS.map(({ href, label }) => (
              <Link key={href} href={href}>{label}</Link>
            ))}
          </nav>
          
          <button className="md:hidden text-white">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </Container>
    </header>
  );
}