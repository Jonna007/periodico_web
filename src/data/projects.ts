import { Project } from '../types/Project';

export const projects: Project[] = [
  {
    id: 1,
    name: "Sistema Integrado de Gestión Financiera (SIGEF) - Ecuador",
    authors: ["Ministerio de Finanzas del Ecuador", "Subsecretaría de Innovación", "Equipo Técnico SIGEF"],
    description: "Modernización completa del sistema de gestión financiera del Estado ecuatoriano, integrando presupuesto, contabilidad, tesorería y nómina en una plataforma única para todas las instituciones públicas.",
    effects: "Reducción del 45% en tiempos de procesamiento de pagos estatales, ahorro de $180 millones anuales en costos administrativos, transparencia total en el manejo de recursos públicos, y eliminación del 90% de procesos manuales en finanzas públicas.",
    costs: "$95 millones USD",
    date: "Abril 2025",
    category: 'national-success',
    image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: 'success',
    scope: 'national'
  },
  {
    id: 2,
    name: "OpenAI GPT-5 Global Deployment",
    authors: ["OpenAI Team", "Sam Altman", "Ilya Sutskever", "Greg Brockman"],
    description: "Lanzamiento mundial de GPT-5, la quinta generación del modelo de lenguaje de OpenAI, con capacidades multimodales avanzadas y razonamiento mejorado para revolucionar la productividad global.",
    effects: "Revolución en productividad empresarial con incremento promedio del 40% en eficiencia, creación de 2.5 millones de empleos en IA, avances significativos en investigación científica automatizada, y democratización del acceso a inteligencia artificial avanzada.",
    costs: "$12.5 billones USD",
    date: "Febrero 2025",
    category: 'international-success',
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: 'success',
    scope: 'international'
  },
  {
    id: 3,
    name: "Plataforma Nacional de Telemedicina - Ecuador",
    authors: ["Ministerio de Salud Pública", "IESS", "Hospital Metropolitano", "Fundación Telefónica Ecuador"],
    description: "Sistema nacional de telemedicina para conectar centros de salud rurales con especialistas en hospitales principales, incluyendo diagnóstico remoto y consultas virtuales para todo el territorio ecuatoriano.",
    failureReasons: "Infraestructura de internet deficiente en zonas rurales, resistencia cultural de pacientes mayores a consultas virtuales, falta de capacitación adecuada del personal médico en tecnologías digitales, y problemas de interoperabilidad entre sistemas hospitalarios existentes.",
    costs: "$78 millones USD (inversión perdida)",
    date: "Noviembre 2024",
    category: 'national-failure',
    image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: 'failure',
    scope: 'national'
  },
  {
    id: 4,
    name: "Meta Horizon Worlds Enterprise",
    authors: ["Meta Platforms Inc.", "Mark Zuckerberg", "Andrew Bosworth", "Equipo Reality Labs"],
    description: "Plataforma empresarial de realidad virtual para reuniones corporativas y colaboración remota, diseñada para reemplazar las videoconferencias tradicionales y crear espacios de trabajo virtuales inmersivos.",
    failureReasons: "Adopción empresarial extremadamente baja (menos del 2%), problemas técnicos persistentes con mareos y fatiga visual, costos prohibitivos de hardware VR para empresas, preferencia empresarial por soluciones tradicionales más estables, y falta de casos de uso convincentes para justificar la inversión.",
    costs: "$15.8 billones USD (inversión perdida)",
    date: "Diciembre 2024",
    category: 'international-failure',
    image: "https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: 'failure',
    scope: 'international'
  }
];