import React from 'react';
import { BarChart3, PieChart, TrendingUp, TrendingDown, DollarSign, Calendar } from 'lucide-react';

export default function Statistics() {
  const stats = [
    {
      title: "Tasa de Éxito",
      value: "50%",
      description: "2 de 4 proyectos analizados",
      icon: BarChart3,
      color: "text-blue-600",
      bg: "bg-blue-100"
    },
    {
      title: "Inversión Exitosa",
      value: "$13.35B",
      description: "En proyectos que alcanzaron sus objetivos",
      icon: TrendingUp,
      color: "text-green-600",
      bg: "bg-green-100"
    },
    {
      title: "Pérdidas Registradas",
      value: "$17B",
      description: "En proyectos que fracasaron",
      icon: TrendingDown,
      color: "text-red-600",
      bg: "bg-red-100"
    },
    {
      title: "Impacto Promedio",
      value: "Alto",
      description: "Nivel de impacto en la industria",
      icon: PieChart,
      color: "text-purple-600",
      bg: "bg-purple-100"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Estadísticas del Análisis
          </h2>
          <p className="text-xl text-slate-600">
            Métricas clave del período de estudio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-shadow">
              <div className={`${stat.bg} ${stat.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">{stat.value}</h3>
              <h4 className="text-lg font-semibold text-slate-700 mb-1">{stat.title}</h4>
              <p className="text-slate-600 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Conclusiones del Análisis</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Los proyectos exitosos muestran una planificación más robusta y mejor gestión de stakeholders</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>La interoperabilidad y la capacitación del personal son factores críticos de éxito</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Los fracasos se asocian principalmente con subestimación de la complejidad técnica</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Calendar className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Período de Análisis</h4>
                <p className="text-slate-300">Junio 2024 - Junio 2025</p>
                <p className="text-sm text-slate-400 mt-2">12 meses de seguimiento continuo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}