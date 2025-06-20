import React, { useState } from 'react';
import { Search, Menu, X, GraduationCap, BookOpen } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigationItems = [
    { name: 'Inicio', href: '#' },
    { name: 'Noticias', href: '#noticias' },
    { name: 'Carreras', href: '#carreras' },
    { name: 'Estudiantes', href: '#estudiantes' },
    { name: 'Docentes', href: '#docentes' },
    { name: 'Eventos', href: '#eventos' },
    { name: 'Admisiones', href: '#admisiones' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span className="hidden sm:block text-blue-200">Última actualización:</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Martes, 14 de Enero 2025 - 15:30 ECT</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="hidden md:block">Cuenca, Ecuador</span>
              <GraduationCap className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center py-8">
          {/* Logo y Título Principal */}
          <div className="text-center mb-6">
            <div className="flex justify-center items-center space-x-4 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-3 rounded-full">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <div className="bg-gradient-to-r from-orange-500 to-red-600 p-3 rounded-full">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-800 to-orange-600 mb-2">
              SUDA NOTICIAS
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 font-semibold mb-2">
              Instituto Superior Sudamericano
            </p>
            <p className="text-base text-slate-600">
              Formando profesionales de excelencia en Cuenca, Ecuador
            </p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 bg-slate-50 px-8 py-3 rounded-full shadow-md">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group px-3 py-2"
              >
                {item.name}
                <span className="absolute -bottom-1 left-3 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-[calc(100%-24px)]"></span>
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation and Search */}
        <div className="flex items-center justify-center space-x-4 pb-4 lg:hidden">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 text-slate-600 hover:text-blue-600 transition-colors rounded-lg hover:bg-slate-100"
          >
            <Search className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-slate-600 hover:text-blue-600 transition-colors rounded-lg hover:bg-slate-100"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar noticias del Instituto Superior Sudamericano..."
                className="w-full px-4 py-3 pl-12 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              />
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <nav className="grid grid-cols-1 gap-2 bg-slate-50 rounded-lg p-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-white rounded-lg transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}