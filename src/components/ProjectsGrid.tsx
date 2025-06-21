import React, { useState } from 'react';
import { Filter, CheckCircle, XCircle, Globe, MapPin, BarChart3 } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function ProjectsGrid() {
  const [filter, setFilter] = useState<'all' | 'success' | 'failure' | 'national' | 'international'>('all');

  const filteredProjects = projects.filter(project => {
    switch (filter) {
      case 'success':
        return project.status === 'success';
      case 'failure':
        return project.status === 'failure';
      case 'national':
        return project.scope === 'national';
      case 'international':
        return project.scope === 'international';
      default:
        return true;
    }
  });

  const filterButtons = [
    { key: 'all', label: 'Todos los Casos', icon: Filter, count: projects.length },
    { key: 'success', label: 'Éxitos', icon: CheckCircle, count: projects.filter(p => p.status === 'success').length },
    { key: 'failure', label: 'Fracasos', icon: XCircle, count: projects.filter(p => p.status === 'failure').length },
    { key: 'national', label: 'Nacional', icon: MapPin, count: projects.filter(p => p.scope === 'national').length },
    { key: 'international', label: 'Internacional', icon: Globe, count: projects.filter(p => p.scope === 'international').length },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-l-4 border-red-600 pl-6 mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Casos de Estudio</h2>
          <p className="text-slate-600">Análisis detallado de proyectos informáticos significativos</p>
        </div>

        {/* Statistics Bar */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <BarChart3 className="w-6 h-6 text-slate-600" />
            <h3 className="text-lg font-bold text-slate-900">Resumen Estadístico</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">{projects.length}</div>
              <div className="text-sm text-slate-600">Total Casos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {projects.filter(p => p.status === 'success').length}
              </div>
              <div className="text-sm text-slate-600">Exitosos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">
                {projects.filter(p => p.status === 'failure').length}
              </div>
              <div className="text-sm text-slate-600">Fracasados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">50%</div>
              <div className="text-sm text-slate-600">Tasa de Éxito</div>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-8 p-4 bg-slate-50 rounded-lg border border-slate-200">
          <span className="text-sm font-semibold text-slate-700 self-center">Filtrar por:</span>
          {filterButtons.map(({ key, label, icon: Icon, count }) => (
            <button
              key={key}
              onClick={() => setFilter(key as any)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                filter === key
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                filter === key 
                  ? 'bg-white/20 text-white' 
                  : 'bg-slate-100 text-slate-600'
              }`}>
                {count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-lg border border-slate-200">
            <p className="text-slate-500 text-lg">No se encontraron proyectos con los filtros seleccionados.</p>
          </div>
        )}
      </div>
    </section>
  );
}