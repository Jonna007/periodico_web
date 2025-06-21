import React from 'react';
import { Search, BarChart3, Lightbulb, CheckCircle } from 'lucide-react';

export default function ObjectivesSection() {
  const objectives = [
    {
      icon: Search,
      title: "Investigar casos reales",
      description: "Investigar casos reales de proyectos informáticos recientes del período 2024-2025",
      color: "text-blue-600",
      bg: "bg-blue-100"
    },
    {
      icon: BarChart3,
      title: "Analizar motivos",
      description: "Analizar los motivos que llevaron al éxito o fracaso en cada caso estudiado",
      color: "text-green-600",
      bg: "bg-green-100"
    },
    {
      icon: Lightbulb,
      title: "Extraer lecciones",
      description: "Extraer lecciones útiles para la planificación y gestión de futuros proyectos",
      color: "text-orange-600",
      bg: "bg-orange-100"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Objetivos</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Metas específicas del análisis de proyectos informáticos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {objectives.map((objective, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-slate-200 hover:shadow-xl transition-shadow">
              <div className={`${objective.bg} ${objective.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                <objective.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{objective.title}</h3>
              <p className="text-slate-600 leading-relaxed">{objective.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 w-12 h-12 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-6">Metodología de Análisis</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-slate-700 mb-4">Criterios de Selección</h4>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Proyectos desarrollados entre junio 2024 y junio 2025</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Casos tanto nacionales como internacionales</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Proyectos con resultados claramente definidos</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-700 mb-4">Aspectos Evaluados</h4>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Factores técnicos y de implementación</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Aspectos de planificación y gestión</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Impacto económico y social</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}