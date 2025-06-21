import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectsGrid from './components/ProjectsGrid';
import IntroductionSection from './components/IntroductionSection';
import ObjectivesSection from './components/ObjectivesSection';
import ConclusionsSection from './components/ConclusionsSection';
import BibliographySection from './components/BibliographySection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section id="inicio">
        <HeroSection />
      </section>
      <section id="introduccion">
        <IntroductionSection />
      </section>
      <section id="objetivos">
        <ObjectivesSection />
      </section>
      <section id="casos">
        <ProjectsGrid />
      </section>
      <section id="analisis">
        <div className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">Análisis Comparativo</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Factores determinantes en el éxito y fracaso de proyectos informáticos
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 border border-green-200 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-green-800 mb-6">Factores de Éxito</h3>
                <ul className="space-y-4 text-green-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Planificación técnica adecuada y escalabilidad</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Colaboración internacional y multidisciplinaria</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Enfoque en necesidades reales del usuario</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Financiamiento sostenible y transparente</span>
                  </li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-red-800 mb-6">Factores de Fracaso</h3>
                <ul className="space-y-4 text-red-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Falta de escalabilidad y capacidad técnica</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Problemas de seguridad y ciberataques</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Sobrevaloración de capacidades tecnológicas</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Dependencia excesiva de financiamiento externo</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="conclusiones">
        <ConclusionsSection />
      </section>
      <section id="bibliografia">
        <BibliographySection />
      </section>
    </div>
  );
}

export default App;