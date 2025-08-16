
import React from 'react';
import { testimonialsData } from '../constants';
import type { Testimonial } from '../types';

const TestimonialCard: React.FC<Testimonial> = ({ quote, author }) => (
    <div className="bg-light-gray p-8 rounded-lg border-l-4 border-primary-orange shadow-sm flex flex-col h-full">
        <p className="text-dark-gray italic mb-6 flex-grow">"{quote}"</p>
        <div className="flex items-center gap-4">
            <img src={author.image} alt={`Foto de ${author.name}`} className="w-16 h-16 rounded-full object-cover border-2 border-primary-orange/50" />
            <div>
                <h4 className="font-bold text-primary-blue text-lg">{author.name}</h4>
                <span className="text-dark-gray text-sm">{author.title}</span>
            </div>
        </div>
    </div>
);


const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="bg-white py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue">Lo que Dicen Nuestros Clientes</h2>
                    <div className="w-24 h-1 bg-primary-orange mx-auto mt-4 rounded"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialsData.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
