import React from 'react';
import { Clock, User, ArrowRight, GraduationCap, Users, Award, Calendar, BookOpen, Briefcase } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  time: string;
  image: string;
  category: string;
  icon: any;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Nueva Carrera de Inteligencia Artificial se Incorpora a la Oferta Académica",
    excerpt: "SUDA amplía su portafolio educativo con una carrera innovadora que responde a las demandas del mercado tecnológico actual, con énfasis en machine learning y análisis de datos.",
    author: "Vicerrectorado Académico",
    time: "Hace 2 horas",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Carreras",
    icon: GraduationCap
  },
  {
    id: 2,
    title: "Docentes de SUDA Participan en Congreso Internacional de Educación",
    excerpt: "Cinco profesores del Instituto presentaron ponencias sobre metodologías innovadoras en el Congreso Internacional de Educación Superior realizado en Quito.",
    author: "Desarrollo Docente",
    time: "Hace 4 horas",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Docentes",
    icon: Users
  },
  {
    id: 3,
    title: "Estudiante de Gastronomía Gana Concurso Regional de Cocina Fusión",
    excerpt: "María Fernanda Vásquez, estudiante de segundo año de Gastronomía, se coronó campeona del Concurso Regional de Cocina Fusión Andina con su innovadora propuesta culinaria.",
    author: "Escuela de Gastronomía",
    time: "Hace 6 horas",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Estudiantes",
    icon: Award
  },
  {
    id: 4,
    title: "SUDA Organiza Feria de Empleo con Más de 80 Empresas Participantes",
    excerpt: "La décima edición de la Feria de Empleo SUDA conecta a estudiantes y graduados con oportunidades laborales en empresas locales, nacionales e internacionales.",
    author: "Bolsa de Empleo",
    time: "Hace 8 horas",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Eventos",
    icon: Briefcase
  },
  {
    id: 5,
    title: "Biblioteca Digital de SUDA Incorpora 5,000 Nuevos Títulos",
    excerpt: "La biblioteca institucional amplía significativamente su colección digital con libros especializados, revistas científicas y recursos multimedia para todas las carreras.",
    author: "Biblioteca SUDA",
    time: "Hace 10 horas",
    image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Recursos",
    icon: BookOpen
  },
  {
    id: 6,
    title: "Proceso de Admisiones 2025 Registra Récord de Postulantes",
    excerpt: "Con más de 3,500 aspirantes, el proceso de admisiones para el período académico 2025 supera todas las expectativas, consolidando a SUDA como referente educativo regional.",
    author: "Admisiones SUDA",
    time: "Hace 12 horas",
    image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Admisiones",
    icon: Calendar
  }
];

export default function NewsGrid() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-slate-800">Noticias Destacadas</h2>
          <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors">
            <span>Ver Todas</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <div className="bg-blue-600 p-1.5 rounded-full">
                    <article.icon className="w-3 h-3 text-white" />
                  </div>
                  <span className="bg-white/90 backdrop-blur-sm text-blue-600 px-2 py-1 rounded text-xs font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-slate-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{article.time}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}