
import React from 'react';
import type { BlogPost } from '../types';
import { CloseIcon } from './Icons';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  React.useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-primary-blue bg-opacity-80 flex justify-center items-center z-[100] p-4 animate-fade-in" 
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <style>{`
        @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
      `}</style>
      <div 
        className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 bg-white/70 rounded-full p-2 text-primary-blue hover:bg-white hover:scale-110 transition-all"
            aria-label="Cerrar artículo"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="p-6 md:p-8 overflow-y-auto">
          <h2 className="text-3xl font-extrabold text-primary-blue mb-4">{post.title}</h2>
          <div className="text-sm text-dark-gray mb-6 border-b pb-4">
            <span>Por: <strong>{post.author}</strong></span>
          </div>
          <div className="text-dark-gray leading-relaxed">
            <p style={{whiteSpace: 'pre-line'}}>{post.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
