import React, { useState } from 'react';
import { Search, Menu, X, Monitor, Newspaper } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigationItems = [
    { name: 'Inicio', href: '#' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Tecnología', href: '#tech' },
    { name: 'Startups', href: '#startups' },
    { name: 'Ciberseguridad', href: '#security' },
    { name: 'IA & ML', href: '#ai' },
    { name: 'Análisis', href: '#analysis' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span className="hidden sm:block text-blue-400">Última actualización:</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Martes, 14 de Enero 2025 - 15:30 GMT</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="hidden md:block">Edición Digital</span>
              <Monitor className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <Newspaper className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-800">
                <span className="text-blue-600">Tech</span><span className="text-purple-600">Herald</span>
              </h1>
              <p className="text-sm text-slate-600">El Periódico de la Era Digital</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Search and Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-slate-600 hover:text-blue-600 transition-colors rounded-lg hover:bg-slate-100"
            >
              <Search className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors rounded-lg hover:bg-slate-100"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar noticias tecnológicas, proyectos, startups..."
                className="w-full px-4 py-3 pl-12 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              />
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <nav className="grid grid-cols-1 gap-2">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
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