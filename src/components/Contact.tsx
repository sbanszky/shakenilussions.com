import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { Section } from './ui/Section';
import { Container } from './ui/Container';

export function Contact() {
  return (
    <Section id="contact" className="bg-black">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-white mb-4">Contact Us</h2>
          <p className="text-gray-300">Get in touch with our team of mixologists and magicians</p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-gray-900 rounded-lg p-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-purple-400 flex-shrink-0" />
              <div>
                <h3 className="text-white font-medium">Email</h3>
                <a href="mailto:contact@shakenillusions.com" className="text-gray-300 hover:text-white transition-colors">
                  contact@shakenillusions.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-purple-400 flex-shrink-0" />
              <div>
                <h3 className="text-white font-medium">Phone</h3>
                <a href="tel:+40756510386" className="text-gray-300 hover:text-white transition-colors">
                  +40 756 510 386
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}