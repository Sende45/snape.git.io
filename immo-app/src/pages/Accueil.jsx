// src/pages/Accueil.jsx
import React from "react";
import { Helmet } from "react-helmet";
import Villa from "../assets/Villa.jpg";
import Appartement from "../assets/Appartement.jpg";
import ServicesSection from "../components/ServicesSection";

function Accueil() {
  return (
    <div className="mt-0">
      {/* SEO avec Helmet */}
      <Helmet>
        <title>Accueil | Confort Immobilier SI - Achat, Vente et Location</title>
        <meta
          name="description"
          content="Bienvenue chez Confort Immobilier SI, votre partenaire pour l'achat, la vente et la location de biens immobiliers à Abidjan et en Côte d'Ivoire."
        />
        <link rel="canonical" href="https://www.confortimmobilierci.com/" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Confort Immobilier SI",
              "url": "https://www.confortimmobilierci.com/",
              "logo": "https://www.confortimmobilierci.com/logo.png",
              "description": "Agence immobilière spécialisée dans l'achat, la vente et la location à Abidjan.",
              "areaServed": "Abidjan, Côte d'Ivoire",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+22500000000",
                "contactType": "customer support",
                "areaServed": "CI"
              }
            }
          `}
        </script>
      </Helmet>

      {/* Section d'en-tête avec images */}
      <div className="relative w-full h-[420px] overflow-hidden shadow-lg">
        <div className="grid grid-cols-2 h-full">
          <img
            src={Villa}
            alt="Villa moderne à Abidjan"
            className="w-full h-full object-cover"
          />
          <img
            src={Appartement}
            alt="Appartement haut standing à Abidjan"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Texte superposé */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
          <h1 className="text-white text-3xl md:text-4xl font-bold text-center px-4 mb-2">
            Bienvenue chez Confort Immobilier SI
          </h1>
          <h2 className="text-white text-xl md:text-2xl font-semibold text-center px-4 italic">
            Votre confort, notre priorité
          </h2>
        </div>
      </div>

      <ServicesSection />
    </div>
  );
}

export default Accueil;
