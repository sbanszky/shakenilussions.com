import React from 'react';
import { Section } from './ui/Section';
import { Container } from './ui/Container';
import { ProductCard } from './products/ProductCard';
import { PRODUCTS } from '../utils/constants';

export function Shop() {
  return (
    <Section id="shop" className="bg-gradient-to-b from-gray-900 to-black">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-white mb-4">Shop</h2>
          <p className="text-gray-300">
            Discover our curated collection of premium bar tools and accessories
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {PRODUCTS.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </Container>
    </Section>
  );
}