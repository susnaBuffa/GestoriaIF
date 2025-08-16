
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-white text-center bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co/GfZGxcch/camion.png')" }}>
      <div className="absolute inset-0 bg-primary-blue bg-opacity-75"></div>
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight">
            Tu Socio Estratégico en Transporte y Logística
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Resolvemos tus trámites con eficiencia y honestidad para que te enfoques en lo que realmente importa: tu negocio. Te escuchamos, entendemos y acompañamos en cada paso.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="w-full sm:w-auto px-8 py-3 bg-primary-orange text-white font-semibold rounded-full border-2 border-primary-orange hover:bg-secondary-orange hover:border-secondary-orange transition-all duration-300 transform hover:-translate-y-1">
              Quiero una consulta
            </a>
            <a href="#services" className="w-full sm:w-auto px-8 py-3 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white hover:text-primary-blue transition-all duration-300 transform hover:-translate-y-1">
              Ver Servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
