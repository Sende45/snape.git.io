import React from "react";
import { FaTools, FaBuilding, FaCogs, FaPaintBrush, FaRecycle, FaSeedling } from "react-icons/fa";

const services = [
  {
    title: "Terrains",
    description: "Achat et vente de terrains sécurisés et bien situés.",
    icon: <FaSeedling size={30} />,
  },
  {
    title: "Construction",
    description: "Réalisation de projets immobiliers du plan à la livraison.",
    icon: <FaBuilding size={30} />,
  },
  {
    title: "Gestion",
    description: "Gestion locative, administrative et technique de vos biens.",
    icon: <FaCogs size={30} />,
  },
  {
    title: "Rénovation",
    description: "Remise à neuf de vos bâtiments avec des finitions modernes.",
    icon: <FaPaintBrush size={30} />,
  },
  {
    title: "Réhabilitation",
    description: "Valorisation de biens anciens pour leur redonner vie.",
    icon: <FaRecycle size={30} />,
  },
  {
    title: "Entretien",
    description: "Services de maintenance régulière pour préserver vos biens.",
    icon: <FaTools size={30} />,
  },
];

function ServicesSection() {
  return (
    <section className="bg-[#f9fafb] py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800">
          Ce que nous faisons
        </h2>
        <p className="text-gray-600 mt-4">
          Voici un aperçu des services professionnels que nous offrons.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all"
          >
            <div className="text-orange-500 mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
