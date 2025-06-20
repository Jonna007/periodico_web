import React from 'react';
import Header from './components/Header';
import NewsCarousel from './components/NewsCarousel';
import NewsGrid from './components/NewsGrid';
import CarrerasSection from './components/CarrerasSection';
import Statistics from './components/Statistics';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section id="inicio">
        <NewsCarousel />
      </section>
      <section id="noticias">
        <NewsGrid />
      </section>
      <section id="carreras">
        <CarrerasSection />
      </section>
      <section id="estudiantes">
        <Statistics />
      </section>
      <section id="docentes">
        <div className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Nuestros Docentes</h2>
            <p className="text-xl text-slate-600 mb-8">Profesionales especializados comprometidos con la excelencia educativa</p>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-lg text-slate-700">
                Contamos con más de 180 docentes altamente calificados, con títulos de cuarto nivel y experiencia profesional en sus áreas de especialización.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="eventos">
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Próximos Eventos</h2>
            <p className="text-xl text-slate-600 mb-8">Mantente informado sobre las actividades académicas y culturales</p>
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl shadow-lg p-8">
              <p className="text-lg text-slate-700">
                Feria de Empleo SUDA 2025, Semana Cultural, Conferencias Magistrales y más eventos próximamente.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="admisiones">
        <div className="py-16 bg-gradient-to-br from-orange-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Proceso de Admisiones</h2>
            <p className="text-xl text-slate-600 mb-8">Únete a la familia SUDA y transforma tu futuro profesional</p>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-lg text-slate-700 mb-6">
                Inscripciones abiertas para el período académico 2025. Más de 3,500 aspirantes ya se han registrado.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-orange-700 transition-all">
                Inscríbete Ahora
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;