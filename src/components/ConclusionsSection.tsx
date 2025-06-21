import React from 'react';
import { CheckCircle, AlertTriangle, TrendingUp, Users } from 'lucide-react';

export default function ConclusionsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Conclusiones</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Lecciones aprendidas del análisis de proyectos informáticos
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-blue-900 rounded-2xl p-8 text-white mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Reflexión Principal</h3>
            <p className="text-lg text-slate-200 leading-relaxed max-w-4xl mx-auto">
              Estos ejemplos muestran cómo el éxito o fracaso en proyectos informáticos dependen en gran medida 
              de la gestión, la planificación, la capacidad técnica y la adaptación a los cambios.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-green-50 border border-green-200 rounded-xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-bold text-green-800">Proyectos Exitosos</h3>
            </div>
            <p className="text-green-700 mb-6 leading-relaxed">
              Algunos proyectos logran aportar soluciones innovadoras y eficientes, generando valor real 
              para sus usuarios y organizaciones.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <TrendingUp className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-green-700">Mejoran procesos existentes significativamente</span>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-green-700">Benefician a comunidades y organizaciones</span>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600" />
              <h3 className="text-2xl font-bold text-red-800">Proyectos Fracasados</h3>
            </div>
            <p className="text-red-700 mb-6 leading-relaxed">
              Otros no logran sus objetivos debido a problemas previsibles o imprevistos, 
              resultando en pérdidas significativas.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                <span className="text-red-700">Problemas técnicos y de escalabilidad</span>
              </div>
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                <span className="text-red-700">Falta de planificación adecuada</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">Valor del Análisis</h3>
          <p className="text-blue-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            Analizar estos casos permite entender mejor cómo llevar adelante iniciativas tecnológicas 
            que realmente funcionen y generen valor. El aprendizaje de experiencias pasadas es fundamental 
            para el éxito de futuros proyectos informáticos.
          </p>
        </div>
      </div>
    </section>
  );
}