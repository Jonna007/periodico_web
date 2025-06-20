import React from 'react';
import { Users, GraduationCap, Award, Building, BookOpen, Globe } from 'lucide-react';

export default function Statistics() {
  const stats = [
    {
      title: "Estudiantes Activos",
      value: "2,800+",
      description: "Estudiantes matriculados en todas las carreras",
      icon: Users,
      color: "text-blue-600",
      bg: "bg-blue-100"
    },
    {
      title: "Graduados",
      value: "15,000+",
      description: "Profesionales formados en 25 años",
      icon: GraduationCap,
      color: "text-green-600",
      bg: "bg-green-100"
    },
    {
      title: "Docentes",
      value: "180+",
      description: "Profesores especializados y certificados",
      icon: Award,
      color: "text-orange-600",
      bg: "bg-orange-100"
    },
    {
      title: "Convenios",
      value: "120+",
      description: "Empresas aliadas para prácticas profesionales",
      icon: Building,
      color: "text-purple-600",
      bg: "bg-purple-100"
    },
    {
      title: "Carreras",
      value: "12",
      description: "Programas académicos de pregrado",
      icon: BookOpen,
      color: "text-red-600",
      bg: "bg-red-100"
    },
    {
      title: "Inserción Laboral",
      value: "85%",
      description: "Graduados empleados en su área",
      icon: Globe,
      color: "text-indigo-600",
      bg: "bg-indigo-100"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            SUDA en Números
          </h2>
          <p className="text-xl text-slate-600">
            25 años de excelencia educativa en Cuenca
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-shadow">
              <div className={`${stat.bg} ${stat.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-2">{stat.value}</h3>
              <h4 className="text-lg font-semibold text-slate-700 mb-1">{stat.title}</h4>
              <p className="text-slate-600 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Formar profesionales competentes, éticos y comprometidos con el desarrollo sostenible, 
                mediante una educación superior de calidad que contribuya al progreso de la sociedad ecuatoriana.
              </p>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Excelencia académica con enfoque práctico</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Formación integral del ser humano</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Compromiso con la comunidad cuencana</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <GraduationCap className="w-16 h-16 text-orange-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Instituto Superior Sudamericano</h4>
                <p className="text-blue-200">Cuenca, Ecuador</p>
                <p className="text-sm text-blue-300 mt-2">Desde 1999 formando el futuro</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}