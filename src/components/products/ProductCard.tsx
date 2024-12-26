import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Button } from '../ui/Button';

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
}

export function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden group">
      <div className="relative h-64">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl text-white font-medium">{name}</h3>
        <p className="text-purple-400 mt-2">{price}</p>
        <Button variant="primary" className="mt-4 w-full">
          <ShoppingBag className="h-5 w-5 inline-block mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
}