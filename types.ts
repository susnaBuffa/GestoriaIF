
import React from 'react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: {
    name: string;
    title: string;
    image: string;
  };
}

export interface BlogPost {
  image: string;
  title:string;
  author: string;
  likes: number;
  content: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
