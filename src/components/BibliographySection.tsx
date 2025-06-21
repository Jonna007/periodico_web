import React from 'react';
import { ExternalLink, BookOpen, Calendar } from 'lucide-react';

export default function BibliographySection() {
  const references = [
    {
      title: "No hay turnos en el Registro Civil para cédulas y pasaportes hasta agosto del 2025",
      source: "Metro Ecuador",
      date: "9 de mayo, 2025",
      url: "https://www.metroecuador.com.ec/noticias/2025/05/09/registro-civil-sin-turnos-hasta-agosto/",
      category: "Nacional"
    },
    {
      title: "Registro Civil denuncia presuntos ciberataques a su plataforma virtual",
      source: "El Universo",
      date: "29 de enero, 2025",
      url: "https://www.eluniverso.com/noticias/seguridad/registro-civil-denuncia-presuntos-ciberataques-nota/",
      category: "Nacional"
    },
    {
      title: "Microsoft-backed UK tech unicorn Builder.ai collapses into insolvency",
      source: "Financial Times",
      date: "20 de mayo, 2025",
      url: "https://www.ft.com/content/382c6bd4-77f4-4c1e-a2ef-59b3bb70c13a",
      category: "Internacional"
    },
    {
      title: "Auge y caída de Builder.Ai... mayor escándalo de IA",
      source: "El País",
      date: "6 de junio, 2025",
      url: "https://elpais.com/tecnologia/2025-06-06/builderai-quiebra-por-practicas-irregulares",
      category: "Internacional"
    },
    {
      title: "Proyecto IT: Aplicación Plan de Viaje y Test de Fatiga",
      source: "IT Ahora - Techint E&C",
      date: "19 de diciembre, 2024",
      url: "https://www.itahora.com.ec/proyecto-techint-viaje-fatiga/",
      category: "Nacional"
    },
    {
      title: "NordIQuEst: the Nordic-Estonian Quantum Computing e-Infrastructure Quest",
      source: "arXiv",
      date: "4 de junio, 2024",
      url: "https://arxiv.org/abs/2406.01403",
      category: "Internacional"
    },
    {
      title: "Project Final Event",
      source: "NordIQuEst",
      date: "14 de abril, 2025",
      url: "https://nordiquest.org/news/project-final-event/",
      category: "Internacional"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Bibliografía</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Fuentes consultadas para el análisis de proyectos informáticos
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
          <div className="flex items-center space-x-3 mb-8">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <h3 className="text-2xl font-bold text-slate-800">Referencias Académicas y Periodísticas</h3>
          </div>

          <div className="space-y-6">
            {references.map((ref, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-6 py-4 bg-slate-50 rounded-r-lg hover:bg-blue-50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-800 mb-2 leading-tight">
                      {ref.title}
                    </h4>
                    <div className="flex items-center space-x-4 text-sm text-slate-600 mb-2">
                      <span className="font-medium">{ref.source}</span>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{ref.date}</span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        ref.category === 'Nacional' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {ref.category}
                      </span>
                    </div>
                  </div>
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-100 rounded-lg transition-colors flex-shrink-0"
                    title="Abrir enlace"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-sm text-slate-500 font-mono bg-white px-3 py-2 rounded border">
                  {ref.url}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-slate-600 rounded-xl text-white">
            <h4 className="text-lg font-bold mb-3">Nota Metodológica</h4>
            <p className="text-blue-100 leading-relaxed">
              Las fuentes consultadas incluyen medios de comunicación especializados, publicaciones académicas 
              y reportes oficiales de las organizaciones involucradas. Se priorizaron fuentes primarias y 
              reportes contemporáneos a los eventos analizados para garantizar la precisión de la información.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}