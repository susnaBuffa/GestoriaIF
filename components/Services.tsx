
import React from 'react';
import { servicesData } from '../constants';
import type { Service } from '../types';

const ServiceCard: React.FC<Service> = ({ icon, title, description }) => (
  <div className="bg-white p-8 text-center rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out flex flex-col items-center">
    {icon}
    <h3 className="text-xl font-bold text-primary-blue mb-3">{title}</h3>
    <p className="text-dark-gray leading-relaxed">{description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-light-gray py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue">Nuestros Servicios</h2>
          <div className="w-24 h-1 bg-primary-orange mx-auto mt-4 rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
