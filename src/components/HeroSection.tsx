import React from 'react';
import { TrendingUp, TrendingDown, Calendar, Monitor } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Calendar className="w-4 h-4 mr-2" />
            ESTUDIO ACADÉMICO 2024-2025
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Análisis de Proyectos
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-400">
              Informáticos Reales
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Estudio exhaustivo de proyectos tecnológicos exitosos y fracasados a nivel nacional e internacional 
            durante el período junio 2024 - junio 2025
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8 text-green-400" />
              <span className="text-2xl font-bold text-green-400">2</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Proyectos Exitosos</h3>
            <p className="text-slate-300 text-sm">Casos de éxito analizados</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <TrendingDown className="w-8 h-8 text-red-400" />
              <span className="text-2xl font-bold text-red-400">2</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Proyectos Fracasados</h3>
            <p className="text-slate-300 text-sm">Casos de fracaso estudiados</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <Monitor className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold text-blue-400">4</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Casos Totales</h3>
            <p className="text-slate-300 text-sm">Proyectos analizados</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <Calendar className="w-8 h-8 text-yellow-400" />
              <span className="text-2xl font-bold text-yellow-400">12</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Meses Analizados</h3>
            <p className="text-slate-300 text-sm">Período de estudio</p>
          </div>
        </div>
      </div>
    </section>
  );
}