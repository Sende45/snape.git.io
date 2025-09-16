// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages principales
import Accueil from './pages/Accueil';
import Proprietes from './pages/Proprietes';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Inscription from './pages/Inscription';
import Devis from './pages/Devis';
import NosServices from './pages/NosServices'; // La page qui liste tous les services

// Pages spécifiques
import ServiceDetailPage from './pages/ServiceDetailPage'; // La page pour le détail d'un service
import SubscriptionFormPage from './pages/SubscriptionFormPage'; // La page du formulaire de souscription

// Helper pour remonter en haut à chaque navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/proprietes" element={<Proprietes />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Inscription />} />
            <Route path="/devis" element={<Devis />} />
            <Route path="/subscribe" element={<SubscriptionFormPage />} />

            {/* ROUTE POUR LA LISTE DES SERVICES */}
            {/* Quand l'URL est /nosservices, le composant NosServices est affiché */}
            <Route path="/nosservices" element={<NosServices />} />

            {/* ROUTE POUR LE DÉTAIL D'UN SERVICE SPÉCIFIQUE */}
            {/* Quand l'URL est /services/mon-id-de-service, le composant ServiceDetailPage est affiché */}
            <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
            
            {/* 📌 Pour ton futur sitemap.xml ou robots.txt :
              Pense à lister ces routes pour un SEO complet et à générer les metas pour chacune.
            */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;