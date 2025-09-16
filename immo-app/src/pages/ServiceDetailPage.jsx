// src/pages/ServiceDetailPage.jsx
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // Importation de Helmet

// Les données de services sont définies ici pour être utilisées par ce composant.
// Idéalement, elles pourraient être importées d'un fichier commun ou d'un contexte.
const services = [
  {
    id: 'achat-et-vente-de-terrain',
    title: 'Achat et Vente de Terrain',
    image: 'https://placehold.co/600x400/004aad/ffffff?text=Terrain',
    description:
      "Nous vous accompagnons dans l'acquisition ou la cession de terrains avec une expertise complète. Notre équipe vous guide à chaque étape pour sécuriser votre investissement et réaliser vos projets fonciers en toute confiance.",
  },
  {
    id: 'construction',
    title: 'Construction',
    image: 'https://placehold.co/600x400/ff3131/ffffff?text=Construction',
    description:
      "De la conception à la livraison, nous gérons votre projet de construction neuve avec rigueur et professionnalisme. Nous veillons à respecter les délais et la qualité, pour que votre futur bien corresponde parfaitement à vos attentes.",
  },
  {
    id: 'gestion-locative',
    title: 'Gestion Locative',
    image: 'https://placehold.co/600x400/004aad/ffffff?text=Gestion+Locative',
    description:
      "Simplifiez la gestion de vos biens locatifs grâce à notre service clé en main. Nous prenons en charge la recherche de locataires, la rédaction des contrats, le suivi des paiements et l’entretien, pour une tranquillité d’esprit totale.",
  },
  {
    id: 'renovation',
    title: 'Rénovation',
    image: 'https://placehold.co/600x400/ff3131/ffffff?text=Renovation',
    description:
      "Donnez une nouvelle vie à vos espaces grâce à nos services de rénovation complets. Que ce soit pour moderniser, agrandir ou réaménager, nous mettons notre savoir-faire au service de votre confort et de la valeur de votre bien.",
  },
  {
    id: 'rehabilitation',
    title: 'Réhabilitation',
    image: 'https://placehold.co/600x400/004aad/ffffff?text=Rehabilitation',
    description:
      "Réhabilitez vos bâtiments anciens ou dégradés avec des solutions modernes adaptées. Nous restaurons le charme et la solidité de vos biens tout en intégrant les normes actuelles pour un résultat durable et esthétique.",
  },
  {
    id: 'entretien-immeuble-et-maison',
    title: 'Entretien Immeuble et Maison',
    image: 'https://placehold.co/600x400/ff3131/ffffff?text=Entretien',
    description:
      "Assurez la longévité et la qualité de vos biens grâce à nos services d'entretien réguliers et personnalisés. Notre équipe intervient pour la maintenance, les réparations et le suivi technique afin de préserver la valeur de votre patrimoine.",
  },
];

function ServiceDetailPage() {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        {/* Helmet pour la page "Service non trouvé" */}
        <Helmet>
          <title>Service non trouvé - Agence Immobilière</title>
          <meta name="description" content="La page du service demandé n'a pas été trouvée." />
          <link rel="canonical" href={`https://ton-site.com/services/${serviceId}`} /> {/* Utilise serviceId même si non trouvé pour le canonical */}
        </Helmet>
        <h2 className="text-3xl font-bold text-red-600 mb-4">Service non trouvé</h2>
        <Link to="/nosservices" className="text-blue-600 underline">
          Retour à la liste des services
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 bg-gray-100 min-h-screen">
      {/* Balises Helmet pour le SEO de la page de détail */}
      <Helmet>
        <title>{service.title} - Agence Immobilière</title>
        <meta name="description" content={service.description} />
        {/* Assurez-vous de remplacer 'ton-site.com' par le domaine réel de votre site */}
        <link rel="canonical" href={`https://ton-site.com/services/${service.id}`} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold mb-6">{service.title}</h1>
        <img
          src={service.image}
          alt={service.title}
          className="rounded-lg shadow-lg mb-6 object-cover w-full h-64"
          onError={e => {
            e.target.onerror = null;
            e.target.src = 'https://placehold.co/800x400/CCCCCC/333333?text=Image+Manquante';
          }}
        />
        <p className="text-lg text-gray-700 mb-6">{service.description}</p>

        <div className="flex space-x-4">
          <button
            // Lien vers le formulaire de souscription, passant l'ID du service en paramètre d'URL
            onClick={() => navigate(`/subscribe?service=${service.id}`)}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200"
          >
            Souscrire à ce service
          </button>

          <Link
            to="/nosservices"
            className="bg-[#004aad] hover:bg-[#00338d] text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200"
          >
            Retour à la liste des services
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetailPage;