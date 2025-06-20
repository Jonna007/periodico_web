import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, User, ArrowRight } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  time: string;
  image: string;
  category: string;
  featured: boolean;
}

const featuredNews: NewsItem[] = [
  {
    id: 1,
    title: "Instituto Superior Sudamericano Inaugura Nuevos Laboratorios de Tecnología",
    excerpt: "La institución cuencana invierte $500,000 en equipamiento de última generación para las carreras de Desarrollo de Software y Redes y Telecomunicaciones, beneficiando a más de 800 estudiantes.",
    author: "Redacción SUDA",
    time: "Hace 2 horas",
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Infraestructura",
    featured: true
  },
  {
    id: 2,
    title: "Estudiantes de SUDA Ganan Concurso Nacional de Emprendimiento",
    excerpt: "El equipo 'InnovaTech' de la carrera de Administración de Empresas se alzó con el primer lugar en el Concurso Nacional de Emprendimiento Universitario con su proyecto de aplicación móvil para comercio local.",
    author: "Departamento de Comunicación",
    time: "Hace 4 horas",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Logros Estudiantiles",
    featured: true
  },
  {
    id: 3,
    title: "SUDA Firma Convenio con Empresas Locales para Prácticas Profesionales",
    excerpt: "Más de 50 empresas cuencanas se suman al programa de prácticas pre-profesionales del Instituto, garantizando inserción laboral del 85% de graduados en los últimos dos años.",
    author: "Vinculación con la Comunidad",
    time: "Hace 6 horas",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Convenios",
    featured: true
  },
  {
    id: 4,
    title: "Instituto Superior Sudamericano Celebra 25 Años de Excelencia Educativa",
    excerpt: "Con una ceremonia especial, SUDA conmemora un cuarto de siglo formando profesionales de calidad en Cuenca, con más de 15,000 graduados que contribuyen al desarrollo del país.",
    author: "Rectorado SUDA",
    time: "Hace 8 horas",
    image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Institucional",
    featured: true
  }
];

export default function NewsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredNews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredNews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredNews.length) % featuredNews.length);
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
      
      {/* Carousel Container */}
      <div className="relative h-96 md:h-[500px]">
        {featuredNews.map((news, index) => (
          <div
            key={news.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="mb-4">
              <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {featuredNews[currentSlide].category}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              {featuredNews[currentSlide].title}
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-6 leading-relaxed">
              {featuredNews[currentSlide].excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-blue-200">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{featuredNews[currentSlide].author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{featuredNews[currentSlide].time}</span>
                </div>
              </div>
              <button className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-lg transition-colors">
                <span>Leer más</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {featuredNews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}