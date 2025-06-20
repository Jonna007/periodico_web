import React from 'react';
import { Clock, User, ArrowRight, Globe, Briefcase, Heart, Zap, Shield, Cpu } from 'lucide-react';

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
    title: "Ecuador Firma Acuerdo de Cooperación Tecnológica con Singapur",
    excerpt: "Convenio bilateral permitirá intercambio de conocimientos en ciudades inteligentes, gobierno digital y ciberseguridad entre ambos países.",
    author: "Diplomacia Digital",
    time: "Hace 2 horas",
    image: "https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Internacional",
    icon: Globe
  },
  {
    id: 2,
    title: "Banco Central del Ecuador Estudia Implementar Moneda Digital",
    excerpt: "CBDC ecuatoriana podría revolucionar el sistema financiero nacional, reduciendo costos de transacciones y mejorando la inclusión financiera.",
    author: "Economía Digital",
    time: "Hace 4 horas",
    image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Finanzas",
    icon: Briefcase
  },
  {
    id: 3,
    title: "Hospital Metropolitano Implementa Cirugía Robótica Avanzada",
    excerpt: "Primer centro médico ecuatoriano en adquirir robot quirúrgico Da Vinci Xi, revolucionando procedimientos mínimamente invasivos.",
    author: "Salud Innovadora",
    time: "Hace 6 horas",
    image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Salud",
    icon: Heart
  },
  {
    id: 4,
    title: "Ecuador Inaugura Primera Planta Solar Flotante en Sudamérica",
    excerpt: "Innovador proyecto en la represa Mazar genera 50MW de energía limpia, posicionando al país como líder en energías renovables.",
    author: "Energía Verde",
    time: "Hace 8 horas",
    image: "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Energía",
    icon: Zap
  },
  {
    id: 5,
    title: "Ciberataque a Instituciones Financieras Ecuatorianas Frustrado",
    excerpt: "Unidad de Ciberseguridad Nacional neutraliza intento de ransomware contra bancos locales, fortaleciendo defensas digitales del país.",
    author: "Seguridad Nacional",
    time: "Hace 10 horas",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Ciberseguridad",
    icon: Shield
  },
  {
    id: 6,
    title: "ESPOL Desarrolla Supercomputadora para Investigación Oceánica",
    excerpt: "Centro de cómputo de alto rendimiento estudiará corrientes marinas y cambio climático en el Pacífico ecuatoriano con IA avanzada.",
    author: "Investigación Científica",
    time: "Hace 12 horas",
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Investigación",
    icon: Cpu
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