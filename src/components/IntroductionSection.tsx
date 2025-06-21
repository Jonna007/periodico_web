import React from 'react';
import { BookOpen, Target, TrendingUp } from 'lucide-react';

export default function IntroductionSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Introducción</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
            <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Contexto Actual</h3>
            <p className="text-slate-600 leading-relaxed">
              En la actualidad, el desarrollo de proyectos informáticos es clave para la modernización 
              de instituciones y empresas. La transformación digital se ha acelerado significativamente.
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
            <div className="bg-slate-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Realidad de los Proyectos</h3>
            <p className="text-slate-600 leading-relaxed">
              No todos los proyectos logran sus objetivos, ya sea por problemas técnicos, fallas de 
              planificación o cambios en el contexto. Es crucial analizar tanto éxitos como fracasos.
            </p>
          </div>

          <div className="bg-green-50 rounded-xl p-8 border border-green-200">
            <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Importancia del Análisis</h3>
            <p className="text-slate-600 leading-relaxed">
              Es importante conocer tanto los casos exitosos como los que han tenido dificultades 
              para aprender de sus experiencias y mejorar futuros proyectos.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-800 to-blue-900 rounded-2xl p-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">Propósito del Estudio</h3>
            <p className="text-lg text-slate-200 leading-relaxed mb-6">
              Este trabajo presenta el análisis de cuatro proyectos informáticos recientes 
              (dos nacionales y dos internacionales) realizados entre junio de 2024 y junio de 2025.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <p className="text-blue-200 font-semibold">
                Con estos ejemplos se busca identificar los factores que contribuyen al éxito 
                o fracaso de un proyecto de tecnología.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}