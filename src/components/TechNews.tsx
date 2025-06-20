import React from 'react';
import { Clock, User, ArrowRight, Cpu, Smartphone, Shield, Zap, Globe, Building } from 'lucide-react';

interface TechArticle {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  time: string;
  image: string;
  category: string;
  icon: any;
}

const techArticles: TechArticle[] = [
  {
    id: 1,
    title: "Ecuador Implementa Blockchain en Registro Civil",
    excerpt: "El Registro Civil ecuatoriano adopta tecnología blockchain para certificados de nacimiento y matrimonio, garantizando inmutabilidad y seguridad total.",
    author: "Tech Ecuador",
    time: "Hace 1 hora",
    image: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Blockchain",
    icon: Shield
  },
  {
    id: 2,
    title: "Quito Smart City: Sensores IoT Revolucionan el Tráfico",
    excerpt: "La capital ecuatoriana instala 500 sensores inteligentes que reducen el tráfico en un 30% mediante optimización de semáforos en tiempo real.",
    author: "Smart Cities",
    time: "Hace 3 horas",
    image: "https://images.pexels.com/photos/2882552/pexels-photo-2882552.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "IoT",
    icon: Zap
  },
  {
    id: 3,
    title: "Banco del Pacífico Lanza Billetera Digital Avanzada",
    excerpt: "Nueva aplicación móvil integra pagos QR, transferencias internacionales y gestión de criptomonedas para clientes ecuatorianos.",
    author: "Fintech Analyst",
    time: "Hace 5 horas",
    image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Fintech",
    icon: Smartphone
  },
  {
    id: 4,
    title: "Universidad San Francisco de Quito Crea Supercomputadora",
    excerpt: "USFQ inaugura el centro de cómputo de alto rendimiento más potente del país para investigación en inteligencia artificial y simulaciones científicas.",
    author: "Research Team",
    time: "Hace 7 horas",
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Investigación",
    icon: Cpu
  },
  {
    id: 5,
    title: "Startup Ecuatoriana Desarrolla App para Agricultura de Precisión",
    excerpt: "AgroTech Ecuador lanza plataforma que usa drones e IA para optimizar cultivos, aumentando productividad agrícola en un 25%.",
    author: "AgTech Reporter",
    time: "Hace 9 horas",
    image: "https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "AgTech",
    icon: Globe
  },
  {
    id: 6,
    title: "Ministerio de Educación Digitaliza Todas las Escuelas Rurales",
    excerpt: "Proyecto nacional conecta 2,500 escuelas rurales con internet satelital y tablets educativas, beneficiando a 180,000 estudiantes.",
    author: "Education Tech",
    time: "Hace 11 horas",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "EdTech",
    icon: Building
  }
];

export default function TechNews() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-slate-800">Tecnología Nacional</h2>
          <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors">
            <span>Ver todas</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group border border-slate-200"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 flex items-center space-x-2">
                  <div className="bg-blue-600 p-1.5 rounded-full">
                    <article.icon className="w-3 h-3 text-white" />
                  </div>
                  <span className="bg-white/90 backdrop-blur-sm text-blue-600 px-2 py-1 rounded text-xs font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-slate-600 mb-3 line-clamp-3 text-sm">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center space-x-1">
                    <User className="w-3 h-3" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
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