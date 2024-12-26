import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Shop } from './components/Shop';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Shop />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;