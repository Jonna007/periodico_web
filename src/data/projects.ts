import { Project } from '../types/Project';

export const projects: Project[] = [
  {
    id: 1,
    name: "Plataforma 'Gobierno Digital' - Actualización del Registro Civil 2024",
    authors: ["Dirección General del Registro Civil del Ecuador"],
    description: "Proyecto de modernización del sistema de turnos en línea para cédulas y pasaportes. La idea era agilizar la atención al público mediante la plataforma 'Gobierno Digital', permitiendo a los ciudadanos agendar citas por internet.",
    failureReasons: "Los servidores no soportaron la alta demanda, hubo falta de escalabilidad en el sistema, se presentaron fallos de seguridad y posibles ciberataques. El Registro Civil procesa más de USD 2.5 millones de trámites al año, por lo que el impacto fue alto.",
    costs: "No informado oficialmente (impacto estimado > USD 2.5M)",
    date: "2024-2025",
    category: 'national-failure',
    image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: 'failure',
    scope: 'national'
  },
  {
    id: 2,
    name: "Builder.ai - Bancarrota mayo 2025",
    authors: ["Sachin Dev Duggal (Fundador y CEO)"],
    description: "Empresa británica que ofrecía una plataforma para crear aplicaciones con ayuda de inteligencia artificial. La empresa recibió apoyo de grandes inversores, pero en 2025 entró en quiebra.",
    failureReasons: "Las capacidades de IA fueron sobrevaloradas en el mercado, existieron problemas contables y falta de transparencia, la empresa dependía demasiado de financiamiento externo y no logró generar ingresos suficientes.",
    costs: "USD 500M+ en financiamiento, USD 115M en deudas",
    date: "Mayo 2025",
    category: 'international-failure',
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: 'failure',
    scope: 'international'
  },
  {
    id: 3,
    name: "Aplicación Plan de Viaje y Test de Fatiga - Techint E&C",
    authors: ["Jonathan Llivisaca", "Equipo IT Techint Ecuador-Colombia"],
    description: "Aplicación desarrollada por Techint para mejorar la planificación de viajes y evaluar la fatiga de los conductores en la flota de vehículos en la Amazonía ecuatoriana.",
    effects: "Reducción de tiempos de gestión de viajes, mejoras en la seguridad vial y prevención de accidentes, optimización de procesos internos y ahorro de papel.",
    costs: "USD 100,000 - 500,000",
    date: "Diciembre 2024",
    category: 'national-success',
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: 'success',
    scope: 'national'
  },
  {
    id: 4,
    name: "NordIQuEst - Nordic-Estonian Quantum Computing e-Infrastructure Quest",
    authors: ["Costantino Carugno et al.", "Universidades Nórdicas y Estonia"],
    description: "Proyecto internacional que unió a universidades y centros de investigación para desarrollar infraestructura de computación cuántica e híbrida en países nórdicos y Estonia.",
    effects: "Creación de una infraestructura avanzada para la ciencia, publicación de herramientas y software para el uso académico, formación de una comunidad internacional de expertos en computación cuántica.",
    costs: "Varios millones de euros (financiado por NeIC)",
    date: "Junio 2024 - Abril 2025",
    category: 'international-success',
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: 'success',
    scope: 'international'
  }
];