import React from 'react';
import { Calendar, Users, DollarSign, CheckCircle, XCircle, Globe, MapPin, ExternalLink } from 'lucide-react';
import { Project } from '../types/Project';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isSuccess = project.status === 'success';
  const statusColor = isSuccess ? 'text-green-600' : 'text-red-600';
  const statusBg = isSuccess ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200';
  const statusIcon = isSuccess ? CheckCircle : XCircle;
  const StatusIcon = statusIcon;

  return (
    <article className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Header */}
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-full ${isSuccess ? 'bg-green-100' : 'bg-red-100'}`}>
              <StatusIcon className={`w-5 h-5 ${statusColor}`} />
            </div>
            <div>
              <span className={`text-xs font-bold uppercase tracking-wide ${statusColor}`}>
                {isSuccess ? 'CASO DE ÉXITO' : 'CASO DE FRACASO'}
              </span>
              <div className="flex items-center space-x-2 mt-1">
                {project.scope === 'national' ? (
                  <MapPin className="w-3 h-3 text-slate-400" />
                ) : (
                  <Globe className="w-3 h-3 text-slate-400" />
                )}
                <span className="text-xs text-slate-500 uppercase">
                  {project.scope === 'national' ? 'Nacional' : 'Internacional'}
                </span>
              </div>
            </div>
          </div>
          <button className="p-2 text-slate-400 hover:text-slate-600">
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        <h3 className="text-xl font-bold text-slate-900 leading-tight mb-3">
          {project.name}
        </h3>

        <div className="flex items-center space-x-4 text-xs text-slate-500 mb-4">
          <div className="flex items-center space-x-1">
            <Calendar className="w-3 h-3" />
            <span>{project.date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <DollarSign className="w-3 h-3" />
            <span>{project.costs}</span>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="relative">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Authors */}
        <div className="mb-4">
          <div className="flex items-center space-x-2 mb-2">
            <Users className="w-4 h-4 text-slate-400" />
            <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
              Responsables
            </span>
          </div>
          <div className="flex flex-wrap gap-1">
            {project.authors.slice(0, 2).map((author, index) => (
              <span
                key={index}
                className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs"
              >
                {author}
              </span>
            ))}
            {project.authors.length > 2 && (
              <span className="text-xs text-slate-500">
                +{project.authors.length - 2} más
              </span>
            )}
          </div>
        </div>

        {/* Results */}
        {isSuccess && project.effects && (
          <div className={`${statusBg} border rounded-lg p-4 mb-4`}>
            <h4 className="text-sm font-bold text-green-800 mb-2 uppercase tracking-wide">
              Resultados Positivos
            </h4>
            <p className="text-green-700 text-sm leading-relaxed">
              {project.effects}
            </p>
          </div>
        )}

        {!isSuccess && project.failureReasons && (
          <div className={`${statusBg} border rounded-lg p-4 mb-4`}>
            <h4 className="text-sm font-bold text-red-800 mb-2 uppercase tracking-wide">
              Factores de Fracaso
            </h4>
            <p className="text-red-700 text-sm leading-relaxed">
              {project.failureReasons}
            </p>
          </div>
        )}

        <button className="w-full bg-slate-900 text-white py-3 rounded font-medium hover:bg-slate-800 transition-colors text-sm uppercase tracking-wide">
          Leer Análisis Completo
        </button>
      </div>
    </article>
  );
}