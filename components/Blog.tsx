
import React, { useState } from 'react';
import type { BlogPost } from '../types';
import BlogModal from './BlogModal';


const HeartIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-orange" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
    </svg>
);


const BlogCard: React.FC<BlogPost> = ({ image, title, author, likes }) => (
    <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col group h-full">
        <div className="overflow-hidden">
             <img src={image} alt={title} className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-primary-blue mb-4 flex-grow">{title}</h3>
            <div className="flex justify-between items-center text-sm text-dark-gray mt-4">
                <span>Por: {author}</span>
                <span className="flex items-center gap-1">
                    <HeartIcon />
                    {likes}
                </span>
            </div>
        </div>
    </article>
);

interface BlogProps {
    posts: BlogPost[];
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

    const handleCardClick = (post: BlogPost) => {
        setSelectedPost(post);
    };

    const handleCloseModal = () => {
        setSelectedPost(null);
    };


    return (
        <section id="blog" className="bg-light-gray py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue">Últimas Noticias del Sector</h2>
                     <div className="w-24 h-1 bg-primary-orange mx-auto mt-4 rounded"></div>
                     <p className="mt-4 text-lg text-dark-gray max-w-2xl mx-auto">
                        Haz clic en un artículo para leer el contenido completo.
                     </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <div 
                           key={index} 
                           onClick={() => handleCardClick(post)} 
                           onKeyDown={(e) => e.key === 'Enter' && handleCardClick(post)}
                           className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-4 rounded-xl"
                           role="button"
                           tabIndex={0}
                           aria-label={`Leer artículo: ${post.title}`}
                        >
                           <BlogCard {...post} />
                        </div>
                    ))}
                </div>
            </div>
            {selectedPost && (
                <BlogModal 
                    post={selectedPost}
                    onClose={handleCloseModal}
                />
            )}
        </section>
    );
};

export default Blog;
