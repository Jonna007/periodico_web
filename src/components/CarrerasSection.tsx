import React from 'react';
import { Code, Utensils, Briefcase, Heart, Palette, Calculator, ArrowRight } from 'lucide-react';

interface Carrera {
  id: number;
  name: string;
  description: string;
  duration: string;
  modality: string;
  icon: any;
  color: string;
  bgColor: string;
}

const carreras: Carrera[] = [
  {
    id: 1,
    name: "Desarrollo de Software",
    description: "Forma profesionales capaces de diseñar, desarrollar y mantener aplicaciones y sistemas informáticos innovadores.",
    duration: "3 años",
    modality: "Presencial / Virtual",
    icon: Code,
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    id: 2,
    name: "Gastronomía",
    description: "Prepara chefs profesionales con conocimientos en cocina nacional e internacional, gestión gastronómica y emprendimiento.",
    duration: "3 años",
    modality: "Presencial",
    icon: Utensils,
    color: "text-orange-600",
    bgColor: "bg-orange-100"
  },
  {
    id: 3,
    name: "Administración de Empresas",
    description: "Capacita líderes empresariales con visión estratégica para la gestión eficiente de organizaciones modernas.",
    duration: "3 años",
    modality: "Presencial / Virtual",
    icon: Briefcase,
    color: "text-green-600",
    bgColor: "bg-green-100"
  },
  {
    id: 4,
    name: "Enfermería",
    description: "Forma profesionales de la salud comprometidos con el cuidado integral del ser humano en todas las etapas de la vida.",
    duration: "3 años",
    modality: "Presencial",
    icon: Heart,
    color: "text-red-600",
    bgColor: "bg-red-100"
  },
  {
    id: 5,
    name: "Diseño Gráfico",
    description: "Desarrolla creativos capaces de comunicar ideas a través del diseño visual, branding y medios digitales.",
    duration: "3 años",
    modality: "Presencial / Virtual",
    icon: Palette,
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    id: 6,
    name: "Contabilidad y Auditoría",
    description: "Prepara profesionales especializados en el manejo financiero, tributario y de auditoría de las organizaciones.",
    duration: "3 años",
    modality: "Presencial / Virtual",
    icon: Calculator,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100"
  }
];

export default function CarrerasSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Nuestras Carreras
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Oferta académica de calidad que responde a las demandas del mercado laboral actual
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {carreras.map((carrera) => (
            <div
              key={carrera.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-slate-200 group cursor-pointer"
            >
              <div className={`${carrera.bgColor} ${carrera.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <carrera.icon className="w-8 h-8" />
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                {carrera.name}
              </h3>

              <p className="text-slate-600 mb-4 line-clamp-3">
                {carrera.description}
              </p>

              <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                <div>
                  <span className="font-semibold">Duración:</span> {carrera.duration}
                </div>
              </div>

              <div className="mb-4">
                <span className="text-xs font-semibold text-slate-700">Modalidad:</span>
                <p className="text-sm text-slate-600">{carrera.modality}</p>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Más información</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}