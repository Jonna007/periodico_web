import React from 'react';
import { Calendar, Users, DollarSign, CheckCircle, XCircle, Globe, MapPin } from 'lucide-react';
import { Project } from '../types/Project';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isSuccess = project.status === 'success';
  const statusColor = isSuccess ? 'text-green-600' : 'text-red-600';
  const statusBg = isSuccess ? 'bg-green-100' : 'bg-red-100';
  const statusIcon = isSuccess ? CheckCircle : XCircle;
  const StatusIcon = statusIcon;

  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-200">
      <div className="relative">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4 flex space-x-2">
          <span className={`${statusBg} ${statusColor} px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1`}>
            <StatusIcon className="w-3 h-3" />
            <span>{isSuccess ? 'ÉXITO' : 'FRACASO'}</span>
          </span>
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
            {project.scope === 'national' ? <MapPin className="w-3 h-3" /> : <Globe className="w-3 h-3" />}
            <span>{project.scope === 'national' ? 'NACIONAL' : 'INTERNACIONAL'}</span>
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2">
          {project.name}
        </h3>

        <div className="flex items-center space-x-4 text-sm text-slate-600 mb-4">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{project.date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <DollarSign className="w-4 h-4" />
            <span>{project.costs}</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center space-x-2 mb-2">
            <Users className="w-4 h-4 text-slate-500" />
            <span className="text-sm font-semibold text-slate-700">Autores:</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {project.authors.map((author, index) => (
              <span
                key={index}
                className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs"
              >
                {author}
              </span>
            ))}
          </div>
        </div>

        <p className="text-slate-600 mb-4 line-clamp-3 text-sm leading-relaxed">
          {project.description}
        </p>

        {isSuccess && project.effects && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
            <h4 className="text-sm font-semibold text-green-800 mb-1">Efectos Positivos:</h4>
            <p className="text-green-700 text-xs line-clamp-3">{project.effects}</p>
          </div>
        )}

        {!isSuccess && project.failureReasons && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
            <h4 className="text-sm font-semibold text-red-800 mb-1">Motivos de Fracaso:</h4>
            <p className="text-red-700 text-xs line-clamp-3">{project.failureReasons}</p>
          </div>
        )}

        <button className="w-full bg-slate-800 text-white py-2 rounded-lg hover:bg-slate-700 transition-colors text-sm font-medium">
          Ver Análisis Completo
        </button>
      </div>
    </article>
  );
}