
import React from 'react';
import { PaperPlaneIcon, FacebookIcon, InstagramIcon, LinkedinIcon } from './Icons';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary-blue text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* About Column */}
                    <div className="col-span-1 lg:col-span-1">
                        <h4 className="text-xl font-bold mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-12 after:h-0.5 after:bg-primary-orange">GestoriaIF</h4>
                        <p className="text-gray-300 text-sm mt-6 leading-relaxed">Tu socio confiable para la gestión integral de transporte en Uruguay. Eficiencia, experiencia y compromiso a tu servicio.</p>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h4 className="text-xl font-bold mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-12 after:h-0.5 after:bg-primary-orange">Enlaces Rápidos</h4>
                        <ul className="mt-6 space-y-3">
                            <li><a href="#services" className="text-gray-300 hover:text-primary-orange transition-colors">Servicios</a></li>
                            <li><a href="#testimonials" className="text-gray-300 hover:text-primary-orange transition-colors">Testimonios</a></li>
                            <li><a href="#faq" className="text-gray-300 hover:text-primary-orange transition-colors">Preguntas Frecuentes</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-primary-orange transition-colors">Política de Privacidad</a></li>
                        </ul>
                    </div>
                    
                    {/* Subscribe Column */}
                    <div className="lg:col-span-2">
                        <h4 className="text-xl font-bold mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-12 after:h-0.5 after:bg-primary-orange">Suscríbete</h4>
                        <p className="text-gray-300 text-sm mt-6 mb-4">Recibe noticias y consejos del sector.</p>
                        <form className="flex">
                            <input type="email" placeholder="tu@email.com" className="w-full py-2 px-4 rounded-l-md border-0 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-orange" />
                            <button type="submit" aria-label="Suscribirse" className="bg-primary-orange hover:bg-secondary-orange text-white px-4 py-2 rounded-r-md transition-colors">
                                <PaperPlaneIcon className="w-5 h-5"/>
                            </button>
                        </form>
                        <div className="mt-6 flex space-x-4">
                            <a href="#" aria-label="Facebook" className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full hover:bg-primary-orange transition-colors"><FacebookIcon className="h-5 w-5"/></a>
                            <a href="#" aria-label="Instagram" className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full hover:bg-primary-orange transition-colors"><InstagramIcon className="h-5 w-5"/></a>
                            <a href="#" aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full hover:bg-primary-orange transition-colors"><LinkedinIcon className="h-5 w-5"/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/20 py-6">
                <p className="text-center text-sm text-gray-400">
                    &copy; {currentYear} GestoriaIF. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
