import React from 'react';
import { Quote, TrendingUp, AlertTriangle } from 'lucide-react';

export default function IntroductionSection() {
  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-l-4 border-red-600 pl-6 mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Introducción</h2>
          <p className="text-slate-600">El contexto actual de los proyectos informáticos</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <div className="flex items-start space-x-4">
                <Quote className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg text-slate-700 leading-relaxed mb-4">
                    En la actualidad, el desarrollo de proyectos informáticos es clave para la modernización 
                    de instituciones y empresas. La transformación digital se ha acelerado significativamente, 
                    pero no todos los proyectos logran sus objetivos.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Ya sea por problemas técnicos, fallas de planificación o cambios en el contexto, 
                    es crucial analizar tanto éxitos como fracasos para extraer lecciones valiosas.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Propósito del Estudio</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Este trabajo presenta el análisis de cuatro proyectos informáticos recientes 
                (dos nacionales y dos internacionales) realizados entre junio de 2024 y junio de 2025.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r">
                <p className="text-blue-800 font-medium">
                  Con estos ejemplos se busca identificar los factores que contribuyen al éxito 
                  o fracaso de un proyecto de tecnología.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <div className="flex items-center space-x-3 mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-bold text-slate-900">Factores de Éxito</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Planificación técnica sólida</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Colaboración efectiva</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Enfoque en necesidades reales</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <div className="flex items-center space-x-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                <h3 className="text-lg font-bold text-slate-900">Señales de Alerta</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Falta de escalabilidad</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Problemas de seguridad</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Sobrevaloración tecnológica</span>
                </li>
              </ul>
            </div>

            {/* Quote Box */}
            <div className="bg-slate-900 text-white p-6 rounded-lg">
              <blockquote className="text-sm italic leading-relaxed">
                "El análisis de casos reales permite entender mejor cómo llevar adelante 
                iniciativas tecnológicas que realmente funcionen y generen valor."
              </blockquote>
              <cite className="text-xs text-slate-400 mt-3 block">
                — Equipo de Investigación
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}