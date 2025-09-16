// src/components/Footer.jsx

import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#004aad] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Section A PROPOS */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold mb-4 text-[#ff3131]">À PROPOS</h1>
          <p className="text-sm leading-relaxed">
            Confort Immobilier SI est votre partenaire de confiance pour toutes vos transactions immobilières en Côte d'Ivoire.
            Forts de notre expertise et de notre connaissance approfondie du marché local, nous vous accompagnons dans la vente,
            l'achat, la location et la gestion de biens immobiliers. Notre mission est de vous offrir un service personnalisé
            et de garantir votre satisfaction à chaque étape de votre projet.
          </p>
        </div>

        {/* Section NOS CONTACTS */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold mb-4 text-[#ff3131]">NOS CONTACTS</h1>
          <ul className="text-sm space-y-2">
            <li><a href="tel:+2250707070707" className="hover:underline">Téléphone : +225 07 04 98 98 98</a></li>
            <li><a href="mailto:contact@confortimmo.ci" className="hover:underline">Email : confortimmobiliersi@gmail.com</a></li>
            <li>Adresse : Rue des Immeubles, Abidjan, Côte d'Ivoire</li>
            <li>BP : 0000 Abidjan 00</li>
          </ul>
        </div>

        {/* Section NOS HORAIRES */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold mb-4 text-[#ff3131]">NOS HORAIRES</h1>
          <ul className="text-sm space-y-2">
            <li>Lundi - Vendredi : 08h00 - 17h00</li>
            <li>Samedi : 09h00 - 13h00</li>
            <li>Dimanche : Fermé</li>
            <li>(Nous sommes disponibles sur rendez-vous en dehors de ces heures)</li>
          </ul>
        </div>

        {/* Section SUIVEZ-NOUS */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold mb-4 text-[#ff3131]">SUIVEZ-NOUS</h1>
          <p className="text-sm mb-4">Rejoignez-nous sur les réseaux sociaux pour ne rien manquer de nos offres et actualités !</p>
          <div className="flex justify-center md:justify-start space-x-4">
            {/* Icônes de réseaux sociaux (SVG) */}
            <a href="#" className="text-white hover:text-[#ff3131] transition-colors">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-[#ff3131] transition-colors">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                <path d="M12.44 11.233L19.46 4h3.04l-7.143 8.358L24 20h-3.235l-6.27-7.297L8 20H4l7.398-8.77L1 4h3.235l6.096 7.105L12.44 11.233zm-4.71 7.2l1.637-.62L4.015 6.07H0l7.73 9.47L4 20h4.256zm11.758-13.8L17 7.039l4.575 10.97H24L19 4h-4.992z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-[#ff3131] transition-colors">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
            {/* Ajoutez d'autres icônes ici */}
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Confort Immobilier SI. Tous droits réservés.
      </div>
    </footer>
  );
}

export default Footer;