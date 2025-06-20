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
      <NewsCarousel />
      <NewsGrid />
      <CarrerasSection />
      <Statistics />
      <Footer />
    </div>
  );
}

export default App;