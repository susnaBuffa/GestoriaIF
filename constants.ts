
import React from 'react';
import type { Service, Testimonial, BlogPost, FaqItem } from './types';
import { TruckIcon, FileAltIcon, WrenchIcon, GavelIcon, ShieldIcon, CalculatorIcon } from './components/Icons';

export const servicesData: Service[] = [
  {
    icon: React.createElement(TruckIcon),
    title: "Trámites de Vehículos",
    description: "Gestionamos transferencias, matriculaciones, bajas y más, de forma rápida y segura.",
  },
  {
    icon: React.createElement(FileAltIcon),
    title: "Permisos de Transporte",
    description: "Obtenemos y renovamos tarjetas de transporte y autorizaciones especiales para que operes sin problemas.",
  },
  {
    icon: React.createElement(WrenchIcon),
    title: "Inspecciones Técnicas",
    description: "Coordinamos y gestionamos la ITV y otras inspecciones obligatorias para tu flota.",
  },
  {
    icon: React.createElement(GavelIcon),
    title: "Gestión de Multas",
    description: "Te asesoramos y presentamos recursos para minimizar el impacto de las sanciones de tráfico.",
  },
  {
    icon: React.createElement(ShieldIcon),
    title: "Seguros",
    description: "Encontramos el seguro que mejor se adapta a tus necesidades, con la mejor cobertura y precio.",
  },
  {
    icon: React.createElement(CalculatorIcon),
    title: "Gestión Contable",
    description: "Llevamos tu contabilidad al día, especializándonos en las normativas del sector transporte.",
  },
];

export const testimonialsData: Testimonial[] = [
    {
        quote: "GestoriaIF resolvió un problema con mi tarjeta de transporte que otras gestorías no pudieron. Su atención es personalizada y realmente se involucran. ¡Totalmente recomendados!",
        author: {
            name: "Juan Pérez",
            title: "Transportista Autónomo",
            image: "https://picsum.photos/id/1005/100/100"
        }
    },
    {
        quote: "La eficiencia con la que gestionaron la matriculación de nuestra nueva flota fue increíble. Nos ahorraron tiempo y dinero. Un socio de confianza para nuestra empresa.",
        author: {
            name: "María Rodríguez",
            title: "Gerente de Logística, TransCargo S.A.",
            image: "https://picsum.photos/id/1027/100/100"
        }
    },
    {
        quote: "Tenía un camión detenido en la frontera y no sabía qué hacer. Contacté a GestoriaIF un viernes por la tarde y para el sábado ya estaba en camino. Su capacidad de resolución es impresionante.",
        author: {
            name: "Carlos Gómez",
            title: "Propietario de Flota",
            image: "https://picsum.photos/id/1011/100/100"
        }
    }
];

export const blogData: BlogPost[] = [
    {
        image: "https://i.ibb.co/fGSHVgYQ/regulaciones.png",
        title: "Nuevas Regulaciones de Transporte para 2025",
        author: "Ana García",
        likes: 125,
        content: `El sector del transporte de carga en Uruguay se encuentra en un constante proceso de modernización, y el 2025 marcará un hito con la implementación de nuevas regulaciones. Estar informado y preparado es fundamental para que tu operación no se detenga. Estos cambios buscan mejorar la seguridad vial, la eficiencia y la sostenibilidad ambiental.

Uno de los cambios más relevantes será la exigencia del tacógrafo digital de segunda generación (Tacógrafo Inteligente). Este dispositivo registrará de forma más precisa los tiempos de conducción y descanso, combatiendo la fatiga al volante. Además, se introducirán normativas de emisiones más estrictas, alineadas con estándares internacionales, lo que podría requerir la actualización o adaptación de los motores de tu flota. También se prevén actualizaciones en los permisos para el transporte de mercancías peligrosas, con nuevos requisitos de formación para los conductores y señalización en los vehículos.

Para afrontar estos cambios, te recomendamos iniciar un plan de acción. Evalúa qué vehículos de tu flota necesitarán ser actualizados. Comienza a capacitar a tus conductores sobre las nuevas normativas, especialmente en el uso del nuevo tacógrafo. Es un buen momento para revisar tus pólizas de seguro y asegurarte de que cubran las nuevas exigencias.

Adaptarse a las nuevas regulaciones no debe ser visto como un gasto, sino como una inversión en la seguridad y el futuro de tu empresa. Una flota moderna y que cumple con la normativa es más competitiva, eficiente y segura para todos en la carretera.`
    },
    {
        image: "https://i.ibb.co/8n880RDq/optimizacion-costos.png",
        title: "Cómo Optimizar los Costos de tu Flota de Camiones",
        author: "Luis Martínez",
        likes: 98,
        content: `En un sector tan competitivo como el del transporte, cada peso cuenta. Optimizar los costos operativos de tu flota de camiones es esencial para mantener la rentabilidad y asegurar la viabilidad de tu negocio a largo plazo. Una gestión inteligente puede marcar la diferencia entre el éxito y las dificultades financieras.

El primer pilar de la optimización es el mantenimiento preventivo. Un camión parado por una avería inesperada no solo genera costos de reparación, sino también pérdidas por inactividad. Establece un calendario riguroso de revisiones para sistemas clave como frenos, neumáticos y motor. En segundo lugar, la tecnología es tu gran aliada. Utiliza software de gestión de flotas para planificar las rutas más eficientes, minimizando kilómetros recorridos y consumo de combustible. La telemática te permite monitorear en tiempo real el estilo de conducción, identificando hábitos que derrochan combustible, como aceleraciones bruscas o ralentí excesivo.

No subestimes el poder de la capacitación. Un conductor entrenado en técnicas de conducción eficiente puede reducir el consumo de combustible hasta en un 15%. Finalmente, negocia activamente con tus proveedores. Busca acuerdos por volumen para la compra de combustible, neumáticos y repuestos.

Implementar una estrategia integral de control de costos te permitirá no solo ahorrar dinero, sino también mejorar la seguridad, alargar la vida útil de tus vehículos y ofrecer un servicio más confiable y competitivo.`
    },
    {
        image: "https://i.ibb.co/KpvfLJL9/inspeccion-itv.png",
        title: "La Guía Definitiva para Pasar la ITV sin Problemas",
        author: "Sofía Fernández",
        likes: 210,
        content: `La Inspección Técnica Vehicular (ITV), gestionada por applus en Uruguay, es un requisito anual que garantiza que los vehículos de carga circulen en condiciones seguras. Superarla sin inconvenientes es posible con una preparación adecuada, evitando rechazos que implican pérdida de tiempo y dinero.

La clave está en realizar una exhaustiva revisión previa. Comienza por lo básico: los neumáticos. Verifica que la presión sea la correcta y que la profundidad del dibujo cumpla con la normativa. Revisa todas las luces del vehículo: posición, cruce, carretera, intermitentes, freno y marcha atrás. Un foco quemado es una de las causas de rechazo más comunes y fáciles de evitar. Presta atención al sistema de frenos; cualquier ruido o comportamiento anómalo debe ser revisado por un mecánico. Asegúrate de que no haya fugas de aceite, refrigerante o combustible.

La documentación es igualmente importante. Ten a mano la libreta de propiedad, el seguro obligatorio (SOA) y el certificado de la inspección anterior. Un vehículo limpio, tanto por fuera como por dentro, no solo causa una buena impresión, sino que facilita el trabajo del inspector. No dejes la cita para el último día. Agenda tu inspección con antelación para tener margen de maniobra en caso de que necesites hacer alguna reparación.

En resumen, la proactividad es tu mejor herramienta. Un chequeo preventivo detallado y la organización de la documentación transformarán la ITV de un trámite estresante a un simple procedimiento de rutina para tu flota.`
    }
];

export const faqData: FaqItem[] = [
    {
        question: "¿Qué documentos necesito para habilitar mi vehículo de carga?",
        answer: "Para habilitar un vehículo de carga en Uruguay, generalmente necesitarás la libreta de propiedad, el seguro obligatorio (SOA), y la inspección técnica vehicular (SUCTA) al día. Dependiendo del tipo de carga y empresa, pueden requerirse documentos adicionales del MTOP, DGI y BPS. Nosotros te guiamos en cada paso."
    },
    {
        question: "¿Cuánto tiempo demora la habilitación de una empresa de transporte?",
        answer: "El tiempo varía según el tipo de empresa (unipersonal, SRL, etc.) y la carga de trabajo de los organismos públicos. Con nuestra gestión, buscamos agilizar el proceso al máximo, pudiendo completarse en un plazo de 15 a 30 días hábiles si toda la documentación está en orden."
    },
    {
        question: "¿Ofrecen servicios especiales para flotas de empresas?",
        answer: "Sí. Ofrecemos planes de gestión integral para flotas, que incluyen el control de vencimientos de permisos e inspecciones, gestión de multas, asesoramiento contable continuo y tarifas preferenciales. Nos convertimos en tu departamento de gestoría externo."
    },
    {
        question: "¿Qué tipo de seguros de carga gestionan?",
        answer: "Asesoramos y gestionamos una amplia gama de seguros, incluyendo el seguro obligatorio de automotores (SOA), seguros de responsabilidad civil para transporte de mercancías, y seguros específicos para cargas peligrosas o de alto valor, trabajando con las principales aseguradoras del país."
    }
];
