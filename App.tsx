
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { blogData } from './constants';

const App: React.FC = () => {
  return (
    <div className="bg-white text-text-color font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Blog posts={blogData} />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
