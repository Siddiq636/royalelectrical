import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import LivingWell from './components/LivingWell';
import FourPillars from './components/FourPillars';
import HealthyHabits from './components/HealthyHabits';
import Partners from './components/Partners';
import ExclusiveAccess from './components/ExclusiveAccess';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <LivingWell />
      </section>
      <section id="projects">
        <FourPillars />
      </section>
      <section id="companyinfo">
        <HealthyHabits />
        <Partners />
        <ExclusiveAccess />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

export default App;