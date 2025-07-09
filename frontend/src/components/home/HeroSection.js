import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-cover bg-center h-96 flex items-center justify-center" style={{ backgroundImage: "url('/images/hero-dosa.jpg')" }}>
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Welcome to Dosa Menu</h1>
        <p className="text-xl text-white mb-8">Order your favorite dosas now!</p>
        <Link to="/menu" className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 inline-block">View Menu</Link>
      </div>
    </section>
  );
};

export default HeroSection;