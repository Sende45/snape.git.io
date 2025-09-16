import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { db } from '../firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

function DevisPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    services: {},
    message: '',
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const serviceOptions = [
    { id: 'terrain', name: 'Achat/Vente Terrain', price: 500 },
    { id: 'construction', name: 'Projet de Construction', price: 1500 },
    { id: 'gestionLocative', name: 'Gestion Locative', price: 800 },
    { id: 'renovationSimple', name: 'Rénovation Simple', price: 300 },
    { id: 'renovationMajeure', name: 'Rénovation Majeure', price: 800 },
    { id: 'rehabilitation', name: 'Réhabilitation', price: 1200 },
    { id: 'entretienRegulier', name: 'Entretien Régulier', price: 150 },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (e) => {
    const { id, checked } = e.target;
    const servicePrice = serviceOptions.find(opt => opt.id === id)?.price || 0;

    setFormData(prev => {
      const newServices = { ...prev.services };
      if (checked) newServices[id] = true;
      else delete newServices[id];
      return { ...prev, services: newServices };
    });

    setTotalPrice(prev => Math.max(0, checked ? prev + servicePrice : prev - servicePrice));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const selectedServices = Object.keys(formData.services).filter(k => formData.services[k]);
    if (selectedServices.length === 0) {
      setError("Veuillez sélectionner au moins un service.");
      setLoading(false);
      return;
    }

    try {
      await addDoc(collection(db, "devisRequests"), {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        requestedServices: selectedServices.map(id => {
          const s = serviceOptions.find(x => x.id === id);
          return { id: s.id, name: s.name, price: s.price };
        }),
        message: formData.message,
        estimatedPrice: totalPrice,
        timestamp: serverTimestamp(),
      });

      setSuccess("Votre demande de devis a été envoyée avec succès !");
      setFormData({ fullName: '', email: '', phone: '', services: {}, message: '' });
      setTotalPrice(0);
      setTimeout(() => window.scrollTo(0, 0), 100);
    } catch (err) {
      console.error("Erreur :", err);
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-8 my-8 bg-white shadow-lg rounded-lg max-w-3xl">
      <Helmet>
        <title>Devis Immobilier | Confort Immobilier SI</title>
        <meta name="description" content="Demandez votre devis personnalisé pour votre projet immobilier en Côte d'Ivoire : terrain, construction, gestion locative et plus." />
        <link rel="canonical" href="https://www.confortimmobilierci.com/devis" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Quotation",
              "name": "Demande de Devis Immobilier",
              "description": "Estimation personnalisée des coûts pour votre projet immobilier avec Confort Immobilier SI.",
              "url": "https://www.confortimmobilierci.com/devis",
              "provider": {
                "@type": "RealEstateAgent",
                "name": "Confort Immobilier SI",
                "areaServed": "Abidjan, Côte d'Ivoire"
              }
            }
          `}
        </script>
      </Helmet>

      <h1 className="text-4xl font-extrabold text-[#004aad] text-center mb-8">Demande de Devis Personnalisé</h1>
      <p className="text-lg text-gray-700 text-center mb-8">
        Obtenez une estimation rapide pour vos projets immobiliers.
      </p>

      {success && <p className="text-green-600 text-center mb-4">{success}</p>}
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-lg font-medium text-gray-700 mb-2">Nom Complet</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            aria-label="Nom complet"
            autoComplete="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#004aad] focus:border-[#004aad]"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            aria-label="Email"
            autoComplete="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#004aad] focus:border-[#004aad]"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-lg font-medium text-gray-700 mb-2">Téléphone (facultatif)</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            aria-label="Téléphone"
            autoComplete="tel"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#004aad] focus:border-[#004aad]"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>

        <div className="border border-gray-200 p-4 rounded-md">
          <label className="block text-lg font-medium text-gray-700 mb-3">Sélectionnez les services :</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {serviceOptions.map(service => (
              <div key={service.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={service.id}
                  name={service.id}
                  checked={!!formData.services[service.id]}
                  onChange={handleServiceChange}
                  className="h-5 w-5 text-[#004aad] rounded border-gray-300 focus:ring-[#004aad]"
                />
                <label htmlFor={service.id} className="ml-3 cursor-pointer text-base text-gray-800">
                  {service.name} <span className="font-semibold text-gray-600">({service.price}€)</span>
                </label>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
            <span className="text-xl font-bold text-gray-800">Coût total estimé :</span>
            <span className="text-2xl font-extrabold text-[#ff3131]">{totalPrice}€</span>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Description du projet (facultatif)</label>
          <textarea
            id="message"
            name="message"
            aria-label="Description du projet"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#004aad] focus:border-[#004aad]"
            placeholder="Détaillez votre besoin..."
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#ff3131] text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-[#cc2727] transition transform hover:scale-105"
        >
          {loading ? 'Envoi en cours...' : 'Demander mon devis'}
        </button>
      </form>
    </div>
  );
}

export default DevisPage;
