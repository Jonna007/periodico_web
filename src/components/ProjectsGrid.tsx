import React, { useState } from 'react';
import { Filter, CheckCircle, XCircle, Globe, MapPin } from 'lucide-react';
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
    { key: 'all', label: 'Todos', icon: Filter },
    { key: 'success', label: 'Exitosos', icon: CheckCircle },
    { key: 'failure', label: 'Fracasados', icon: XCircle },
    { key: 'national', label: 'Nacional', icon: MapPin },
    { key: 'international', label: 'Internacional', icon: Globe },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Casos de Estudio
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Análisis detallado de proyectos informáticos significativos del período 2024-2025
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterButtons.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setFilter(key as any)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                filter === key
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
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
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">No se encontraron proyectos con los filtros seleccionados.</p>
          </div>
        )}
      </div>
    </section>
  );
}