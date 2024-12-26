import React from 'react';
import { GlassWater, Sparkles } from 'lucide-react';
import { Container } from './ui/Container';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[url('/topbackground.jpg')] bg-cover bg-center opacity-20"></div>
      
      <Container>
        <div className="text-center space-y-8">
          <div className="flex justify-center space-x-4">
            <GlassWater className="h-12 w-12 text-white animate-pulse" />
            <Sparkles className="h-12 w-12 text-white animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
            Experience the Art of<br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Mixology and Illusion
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Where craft cocktails meet magical moments, creating unforgettable experiences
            that defy reality.
          </p>
        </div>
      </Container>
    </section>
  );
}