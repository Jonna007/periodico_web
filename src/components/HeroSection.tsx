import React from 'react';
import { Calendar, MapPin, User, Clock } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="bg-white">
      {/* Main Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="bg-red-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-wide">
                INVESTIGACIÓN ESPECIAL
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
              Análisis Exhaustivo de Proyectos Informáticos: 
              <span className="text-red-600"> Éxitos y Fracasos</span> en la Era Digital
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-6">
              Un estudio detallado revela los factores críticos que determinan el destino de los 
              proyectos tecnológicos más ambiciosos del período 2024-2025, desde iniciativas 
              gubernamentales hasta startups internacionales.
            </p>

            <div className="flex items-center space-x-6 text-sm text-slate-500 mb-6">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span className="font-medium">Equipo de Investigación</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Publicado hace 2 horas</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>14 Enero 2025</span>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Análisis de proyectos tecnológicos"
                className="w-full h-64 lg:h-80 object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
                Proyectos tecnológicos bajo análisis en 2024-2025
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Key Stats */}
            <div className="bg-slate-50 p-6 rounded-lg border">
              <h3 className="text-lg font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                DATOS CLAVE
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Proyectos Analizados</span>
                  <span className="font-bold text-slate-900">4</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Casos Exitosos</span>
                  <span className="font-bold text-green-600">2</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Casos Fracasados</span>
                  <span className="font-bold text-red-600">2</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Período de Estudio</span>
                  <span className="font-bold text-slate-900">12 meses</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Inversión Total</span>
                  <span className="font-bold text-slate-900">$16B+</span>
                </div>
              </div>
            </div>

            {/* Related Stories */}
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                ARTÍCULOS RELACIONADOS
              </h3>
              <div className="space-y-4">
                <article className="group cursor-pointer">
                  <h4 className="text-sm font-semibold text-slate-800 group-hover:text-red-600 transition-colors leading-tight">
                    Crisis en Builder.ai: Lecciones de una Caída Millonaria
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">Hace 3 horas</p>
                </article>
                <article className="group cursor-pointer">
                  <h4 className="text-sm font-semibold text-slate-800 group-hover:text-red-600 transition-colors leading-tight">
                    Éxito de Techint: Innovación en la Amazonía Ecuatoriana
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">Hace 5 horas</p>
                </article>
                <article className="group cursor-pointer">
                  <h4 className="text-sm font-semibold text-slate-800 group-hover:text-red-600 transition-colors leading-tight">
                    Computación Cuántica: El Proyecto NordIQuEst Marca Historia
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">Hace 8 horas</p>
                </article>
              </div>
            </div>

            {/* Breaking News Ticker */}
            <div className="bg-red-600 text-white p-4 rounded-lg">
              <h3 className="text-sm font-bold uppercase tracking-wide mb-2">ÚLTIMA HORA</h3>
              <p className="text-sm">
                Registro Civil ecuatoriano reporta nuevos problemas en su plataforma digital tras ciberataques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}