import React, { useState } from 'react';
import { Search, Menu, X, Newspaper, Calendar, Globe } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigationItems = [
    { name: 'Portada', href: '#inicio' },
    { name: 'Introducción', href: '#introduccion' },
    { name: 'Objetivos', href: '#objetivos' },
    { name: 'Investigación', href: '#casos' },
    { name: 'Análisis', href: '#analisis' },
    { name: 'Conclusiones', href: '#conclusiones' },
    { name: 'Fuentes', href: '#bibliografia' }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-slate-200">
      {/* Top Breaking News Bar */}
      <div className="bg-red-600 text-white py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center text-sm font-medium">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="uppercase tracking-wide">ESTUDIO EXCLUSIVO</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Análisis de Proyectos Informáticos 2024-2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo and Title */}
            <div className="flex items-center space-x-4">
              <div className="bg-slate-900 p-2 rounded">
                <Newspaper className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                  TECH ANALYSIS
                </h1>
                <p className="text-xs text-slate-500 uppercase tracking-wide">
                  Investigación Tecnológica
                </p>
              </div>
            </div>

            {/* Date and Weather */}
            <div className="hidden md:flex items-center space-x-6 text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Martes, 14 de Enero 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span>Ecuador • Internacional</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex items-center justify-between">
            <div className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="py-4 px-2 text-sm font-medium text-slate-300 hover:text-white border-b-2 border-transparent hover:border-red-500 transition-all duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-slate-300 hover:text-white"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-4 py-2 space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700 rounded"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="bg-white border-b border-slate-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar en el análisis..."
                className="w-full px-4 py-3 pl-12 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}