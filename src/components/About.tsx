import React from 'react';
import { Wine, Sparkles } from 'lucide-react';
import { Container } from './ui/Container';
import { Section } from './ui/Section';

export function About() {
  return (
    <Section id="about" className="bg-gradient-to-b from-black to-gray-900">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-serif text-white">About Shaken Illusions</h2>
            <p className="text-gray-300 leading-relaxed">
              At Shaken Illusions, we blend the artistry of flair bartending with the
              mystery of magic to create an unprecedented entertainment experience.
              Our master mixologists and illusionists work in perfect harmony to
              deliver performances that will leave you spellbound.
            </p>
            <div className="flex space-x-8">
              <div className="flex items-center space-x-2">
                <Wine className="h-6 w-6 text-purple-400" />
                <span className="text-white">Premium Mixology</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="h-6 w-6 text-purple-400" />
                <span className="text-white">Magical Entertainment</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?auto=format&fit=crop&q=80"
              alt="Bartender performing"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </Container>
    </Section>
  );
}