import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Safety from './components/Safety';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Expertise />
        <Safety />
      </main>
      <Footer />
    </div>
  );
};

export default App;