import React from 'react';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Globe } from 'lucide-react';

export default function Footer() {
  const footerSections = [
    {
      title: "Carreras",
      links: ["Desarrollo de Software", "Gastronomía", "Administración de Empresas", "Enfermería", "Diseño Gráfico", "Contabilidad y Auditoría"]
    },
    {
      title: "Servicios",
      links: ["Biblioteca Digital", "Laboratorios", "Bolsa de Empleo", "Bienestar Estudiantil", "Educación Continua", "Certificaciones"]
    },
    {
      title: "Información",
      links: ["Sobre SUDA", "Admisiones", "Calendario Académico", "Reglamentos", "Transparencia", "Contacto"]
    }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-orange-600 p-2 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  <span className="text-blue-400">SUDA</span> <span className="text-orange-400">NOTICIAS</span>
                </h3>
                <p className="text-xs text-slate-400">Instituto Superior Sudamericano</p>
              </div>
            </div>
            <p className="text-slate-300 mb-6 text-sm leading-relaxed">
              Mantente informado sobre todas las actividades, logros y noticias del Instituto Superior 
              Sudamericano, la institución líder en educación superior en Cuenca.
            </p>
            
            <div className="space-y-2 text-sm text-slate-300 mb-6">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Av. Turuhuayco 3-69 y Av. La Prensa, Cuenca</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>(07) 282-3773 / (07) 282-3774</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>info@sudamericano.edu.ec</span>
              </div>
            </div>

            <div className="flex space-x-4">
              {[Facebook, Instagram, Youtube, Globe].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-slate-300 hover:text-blue-400 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="bg-gradient-to-r from-blue-600/20 to-orange-600/20 rounded-xl p-6 mb-8">
            <div className="text-center">
              <h4 className="text-xl font-bold mb-2">Boletín Informativo SUDA</h4>
              <p className="text-slate-300 mb-4">Recibe las últimas noticias del Instituto Superior Sudamericano</p>
              <div className="flex max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 px-4 py-2 rounded-l-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-r-lg transition-colors">
                  Suscribirse
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © 2025 Instituto Superior Sudamericano. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <span className="bg-slate-800 px-3 py-1 rounded-full">Cuenca, Ecuador</span>
              <a href="#" className="hover:text-blue-400 transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Términos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}