import React from 'react';
import { ExternalLink, BookOpen, Calendar, Globe, MapPin } from 'lucide-react';

export default function BibliographySection() {
  const references = [
    {
      title: "No hay turnos en el Registro Civil para cédulas y pasaportes hasta agosto del 2025",
      source: "Metro Ecuador",
      date: "9 de mayo, 2025",
      url: "https://www.metroecuador.com.ec/noticias/2025/05/09/registro-civil-sin-turnos-hasta-agosto/",
      category: "Nacional",
      type: "Noticia"
    },
    {
      title: "Registro Civil denuncia presuntos ciberataques a su plataforma virtual",
      source: "El Universo",
      date: "29 de enero, 2025",
      url: "https://www.eluniverso.com/noticias/seguridad/registro-civil-denuncia-presuntos-ciberataques-nota/",
      category: "Nacional",
      type: "Reportaje"
    },
    {
      title: "Microsoft-backed UK tech unicorn Builder.ai collapses into insolvency",
      source: "Financial Times",
      date: "20 de mayo, 2025",
      url: "https://www.ft.com/content/382c6bd4-77f4-4c1e-a2ef-59b3bb70c13a",
      category: "Internacional",
      type: "Análisis"
    },
    {
      title: "Auge y caída de Builder.Ai... mayor escándalo de IA",
      source: "El País",
      date: "6 de junio, 2025",
      url: "https://elpais.com/tecnologia/2025-06-06/builderai-quiebra-por-practicas-irregulares",
      category: "Internacional",
      type: "Investigación"
    },
    {
      title: "Proyecto IT: Aplicación Plan de Viaje y Test de Fatiga",
      source: "IT Ahora - Techint E&C",
      date: "19 de diciembre, 2024",
      url: "https://www.itahora.com.ec/proyecto-techint-viaje-fatiga/",
      category: "Nacional",
      type: "Caso de Estudio"
    },
    {
      title: "NordIQuEst: the Nordic-Estonian Quantum Computing e-Infrastructure Quest",
      source: "arXiv",
      date: "4 de junio, 2024",
      url: "https://arxiv.org/abs/2406.01403",
      category: "Internacional",
      type: "Paper Académico"
    },
    {
      title: "Project Final Event",
      source: "NordIQuEst",
      date: "14 de abril, 2025",
      url: "https://nordiquest.org/news/project-final-event/",
      category: "Internacional",
      type: "Comunicado"
    }
  ];

  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-l-4 border-red-600 pl-6 mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Fuentes y Referencias</h2>
          <p className="text-slate-600">Documentación y fuentes consultadas para esta investigación</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main References */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
              <div className="bg-slate-900 text-white p-4">
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-6 h-6" />
                  <h3 className="text-lg font-bold">Referencias Bibliográficas</h3>
                </div>
              </div>

              <div className="divide-y divide-slate-100">
                {references.map((ref, index) => (
                  <div key={index} className="p-6 hover:bg-slate-50 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                            ref.category === 'Nacional' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {ref.category}
                          </span>
                          <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                            {ref.type}
                          </span>
                        </div>
                        
                        <h4 className="text-lg font-bold text-slate-900 leading-tight mb-2">
                          {ref.title}
                        </h4>
                        
                        <div className="flex items-center space-x-4 text-sm text-slate-600 mb-3">
                          <span className="font-semibold">{ref.source}</span>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{ref.date}</span>
                          </div>
                        </div>
                        
                        <div className="bg-slate-50 p-3 rounded border font-mono text-xs text-slate-600 break-all">
                          {ref.url}
                        </div>
                      </div>
                      
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 p-3 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0"
                        title="Abrir enlace externo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Source Statistics */}
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Estadísticas de Fuentes</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Total Referencias</span>
                  <span className="font-bold text-slate-900">{references.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-green-600" />
                    <span className="text-slate-600">Nacionales</span>
                  </div>
                  <span className="font-bold text-green-600">
                    {references.filter(r => r.category === 'Nacional').length}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-blue-600" />
                    <span className="text-slate-600">Internacionales</span>
                  </div>
                  <span className="font-bold text-blue-600">
                    {references.filter(r => r.category === 'Internacional').length}
                  </span>
                </div>
              </div>
            </div>

            {/* Methodology Note */}
            <div className="bg-slate-900 text-white p-6 rounded-lg">
              <h4 className="text-lg font-bold mb-3">Nota Metodológica</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Las fuentes consultadas incluyen medios especializados, publicaciones académicas 
                y reportes oficiales. Se priorizaron fuentes primarias y reportes contemporáneos 
                para garantizar la precisión de la información.
              </p>
            </div>

            {/* Verification Badge */}
            <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                <span className="text-green-800 font-bold text-sm">VERIFICADO</span>
              </div>
              <p className="text-green-700 text-xs">
                Todas las fuentes han sido verificadas y están disponibles públicamente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}