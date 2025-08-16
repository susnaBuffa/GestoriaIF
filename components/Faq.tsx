
import React, { useState } from 'react';
import { faqData } from '../constants';
import type { FaqItem as FaqItemType } from '../types';
import { PlusIcon } from './Icons';

interface FaqItemProps {
  item: FaqItemType;
  isActive: boolean;
  onToggle: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ item, isActive, onToggle }) => {
  return (
    <div className="border-b border-medium-gray py-4">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left focus:outline-none"
        aria-expanded={isActive}
      >
        <h3 className="text-lg font-semibold text-primary-blue">{item.question}</h3>
        <span className="text-primary-orange flex-shrink-0 ml-4">
            <PlusIcon className={`transform transition-transform duration-300 ${isActive ? 'rotate-45' : 'rotate-0'}`} />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-96 mt-4' : 'max-h-0'}`}
      >
        <p className="text-dark-gray leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
};


const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue">Preguntas Frecuentes</h2>
           <div className="w-24 h-1 bg-primary-orange mx-auto mt-4 rounded"></div>
        </div>
        <div>
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              item={item}
              isActive={activeIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
