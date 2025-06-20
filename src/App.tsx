import React from 'react';
import Header from './components/Header';
import NewsCarousel from './components/NewsCarousel';
import TechNews from './components/TechNews';
import NewsGrid from './components/NewsGrid';
import ProjectsGrid from './components/ProjectsGrid';
import StartupSpotlight from './components/StartupSpotlight';
import Statistics from './components/Statistics';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <NewsCarousel />
      <TechNews />
      <NewsGrid />
      <ProjectsGrid />
      <StartupSpotlight />
      <Statistics />
      <Footer />
    </div>
  );
}

export default App;