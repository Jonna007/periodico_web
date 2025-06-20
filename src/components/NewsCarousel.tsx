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
    title: "Ecuador Lidera Transformación Digital en Latinoamérica con SIGEF",
    excerpt: "El Sistema Integrado de Gestión Financiera del Estado ecuatoriano se convierte en modelo regional, generando ahorros millonarios y transparencia total en las finanzas públicas.",
    author: "María Fernanda Vásquez",
    time: "Hace 2 horas",
    image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Gobierno Digital",
    featured: true
  },
  {
    id: 2,
    title: "OpenAI Revoluciona la Industria con el Lanzamiento de GPT-5",
    excerpt: "El modelo más avanzado de inteligencia artificial promete transformar sectores completos con capacidades multimodales sin precedentes y razonamiento avanzado.",
    author: "Dr. Carlos Mendoza",
    time: "Hace 4 horas",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Inteligencia Artificial",
    featured: true
  },
  {
    id: 3,
    title: "Fracaso de Telemedicina en Ecuador: Lecciones Aprendidas",
    excerpt: "El ambicioso proyecto nacional de telemedicina enfrenta obstáculos técnicos y culturales que revelan los desafíos de la digitalización en salud rural.",
    author: "Ana Lucía Morales",
    time: "Hace 6 horas",
    image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Salud Digital",
    featured: true
  },
  {
    id: 4,
    title: "Meta Abandona Horizon Worlds Enterprise Tras Pérdidas Millonarias",
    excerpt: "La baja adopción empresarial y los problemas técnicos persistentes llevan a Meta a cancelar su ambicioso proyecto de realidad virtual corporativa.",
    author: "Roberto Silva",
    time: "Hace 8 horas",
    image: "https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Realidad Virtual",
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
    <section className="relative bg-slate-900 text-white overflow-hidden">
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
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="mb-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {featuredNews[currentSlide].category}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              {featuredNews[currentSlide].title}
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-6 leading-relaxed">
              {featuredNews[currentSlide].excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-slate-300">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{featuredNews[currentSlide].author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{featuredNews[currentSlide].time}</span>
                </div>
              </div>
              <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
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