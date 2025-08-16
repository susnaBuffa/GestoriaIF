
import React from 'react';
import { WhatsappIcon, EnvelopeIcon, PhoneIcon, MapMarkerIcon } from './Icons';

const Contact: React.FC = () => {
    const recipientEmail = "contacto.gestoriaif@gmail.com";

    return (
        <section id="contact" className="bg-light-gray py-20 lg:py-28">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue">Ponte en Contacto</h2>
                    <div className="w-24 h-1 bg-primary-orange mx-auto mt-4 rounded"></div>
                </div>
                <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Form */}
                    <div className="contact-form">
                        <h3 className="text-2xl font-bold text-primary-blue mb-6">Envíanos un Mensaje</h3>
                        <form action={`https://formsubmit.co/${recipientEmail}`} method="POST">
                            <input type="hidden" name="_subject" value="Nueva consulta desde la web de GestoriaIF" />
                            <div className="mb-5">
                                <label htmlFor="name" className="block mb-2 font-medium text-dark-gray">Tu Nombre</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required 
                                    className="w-full px-4 py-3 bg-white text-black border border-medium-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange transition-shadow"
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email" className="block mb-2 font-medium text-dark-gray">Tu Correo Electrónico</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    className="w-full px-4 py-3 bg-white text-black border border-medium-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange transition-shadow"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block mb-2 font-medium text-dark-gray">Tu Mensaje</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows={5} 
                                    required 
                                    className="w-full px-4 py-3 bg-white text-black border border-medium-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange transition-shadow"
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full px-8 py-4 bg-primary-orange text-white font-semibold rounded-full border-2 border-primary-orange hover:bg-secondary-orange hover:border-secondary-orange transition-all duration-300 transform hover:-translate-y-1">
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>

                    {/* Info */}
                    <div className="contact-info flex flex-col">
                        <h3 className="text-2xl font-bold text-primary-blue mb-6">Información de Contacto</h3>
                        <div className="space-y-4 mb-8">
                            <a href="tel:+59899014729" className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-primary-blue text-white font-semibold rounded-full border-2 border-primary-blue hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1">
                                <PhoneIcon className="h-6 w-6" />
                                <span>Llamar Ahora</span>
                            </a>
                            <a href="https://wa.me/59899014729" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-green-500 text-white font-semibold rounded-full border-2 border-green-500 hover:bg-green-600 hover:border-green-600 transition-all duration-300 transform hover:-translate-y-1">
                                <WhatsappIcon className="h-6 w-6" />
                                <span>Chatear por WhatsApp</span>
                            </a>
                        </div>

                        <div className="space-y-6 text-dark-gray">
                            <div className="flex items-center gap-4">
                                <span className="text-primary-orange w-8 flex justify-center"><EnvelopeIcon className="h-6 w-6"/></span>
                                <a href="mailto:contacto.gestoriaif@gmail.com" className="hover:text-primary-orange transition-colors">contacto.gestoriaif@gmail.com</a>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-primary-orange w-8 flex justify-center pt-1"><MapMarkerIcon className="h-6 w-6"/></span>
                                <p>Bartolomé Hidalgo entre Blanes y Sánchez. Rosario. Colonia</p>
                            </div>
                        </div>

                        <div className="mt-auto pt-8 rounded-lg overflow-hidden h-64 shadow-md">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3293.078239088689!2d-57.34823152426867!3d-34.37348987303886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3a52c00000001%3A0x8f7c08361e12254e!2sGestoria%20If!5e0!3m2!1ses!2suy!4v1722891000000!5m2!1ses!2suy"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
