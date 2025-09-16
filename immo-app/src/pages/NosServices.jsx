// src/pages/NosServices.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // useParams n'est plus nécessaire ici
import { Helmet } from 'react-helmet';

function NosServices() {
  // Vos données de services sont ici. Idéalement, elles pourraient venir d'un contexte ou d'une API.
  const services = [
    { id: 'achat-et-vente-de-terrain', title: 'Achat et Vente de Terrain', image: 'https://placehold.co/600x400/004aad/ffffff?text=Terrain', description: "Nous vous accompagnons dans l'acquisition ou la cession de terrains avec une expertise complète.", bgColor: 'bg-gradient-to-br from-[#004aad] to-[#00338d]', textColor: 'text-white' },
    { id: 'construction', title: 'Construction', image: 'https://placehold.co/600x400/ff3131/ffffff?text=Construction', description: 'De la conception à la livraison, nous gérons votre projet de construction neuve.', bgColor: 'bg-gradient-to-br from-[#ff3131] to-[#cc2727]', textColor: 'text-white' },
    { id: 'gestion-locative', title: 'Gestion Locative', image: 'https://placehold.co/600x400/004aad/ffffff?text=Gestion+Locative', description: 'Simplifiez la gestion de vos biens locatifs grâce à notre service clé en main.', bgColor: 'bg-gradient-to-br from-[#004aad] to-[#00338d]', textColor: 'text-white' },
    { id: 'renovation', title: 'Rénovation', image: 'https://placehold.co/600x400/ff3131/ffffff?text=Renovation', description: 'Donnez une nouvelle vie à vos espaces grâce à nos services de rénovation complets.', bgColor: 'bg-gradient-to-br from-[#ff3131] to-[#cc2727]', textColor: 'text-white' },
    { id: 'rehabilitation', title: 'Réhabilitation', image: 'https://placehold.co/600x400/004aad/ffffff?text=Rehabilitation', description: 'Réhabilitez vos bâtiments anciens ou dégradés avec des solutions modernes.', bgColor: 'bg-gradient-to-br from-[#004aad] to-[#00338d]', textColor: 'text-white' },
    { id: 'entretien-immeuble-et-maison', title: 'Entretien Immeuble et Maison', image: 'https://placehold.co/600x400/ff3131/ffffff?text=Entretien', description: "Assurez la longévité et la qualité de vos biens grâce à nos services d'entretien.", bgColor: 'bg-gradient-to-br from-[#ff3131] to-[#cc2727]', textColor: 'text-white' },
  ];

  // La logique pour récupérer serviceId de l'URL est maintenant dans ServiceDetailPage.jsx
  // Ce composant affiche TOUJOURS la liste complète des services.

  return (
    <div className="py-12 bg-gray-100 min-h-screen">
      <Helmet>
        <title>Nos Services - Agence Immobilière</title>
        <meta name="description" content="Découvrez tous les services proposés par notre agence immobilière : achat, vente, construction, gestion locative, rénovation, réhabilitation et entretien." />
        {/* Assurez-vous de remplacer 'ton-site.com' par le domaine réel de votre site */}
        <link rel="canonical" href="https://ton-site.com/nosservices" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-10">
          <h2 className="text-base text-[#ff3131] font-semibold tracking-wide uppercase rounded-full inline-block px-4 py-1 bg-[#ff3131] bg-opacity-10">
            Nos Services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold text-gray-900 sm:text-4xl">
            Découvrez nos différentes prestations immobilières
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Expertise et accompagnement sur mesure pour concrétiser tous vos projets immobiliers.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div
              key={service.id}
              className={`rounded-lg shadow-xl p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out ${service.bgColor} ${service.textColor}`}
            >
              <div className="relative h-48 w-full mb-4 rounded-md overflow-hidden">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src={service.image}
                  alt={service.title}
                  onError={e => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/CCCCCC/333333?text=Image+Manquante'; }}
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-3 leading-tight">{service.title}</h3>
                <p className="text-base leading-relaxed mb-4">{service.description}</p>
                <Link
                  // Lien vers la page de détail du service : Doit correspondre à la route dans App.js
                  to={`/services/${service.id}`} 
                  className={`inline-flex justify-center items-center px-5 py-2.5 border border-transparent text-base font-medium rounded-full shadow-sm ${
                    service.textColor === 'text-white'
                      ? 'text-[#004aad] bg-white hover:bg-gray-100'
                      : 'text-white bg-[#004aad] hover:bg-[#00338d]'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200`}
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NosServices;