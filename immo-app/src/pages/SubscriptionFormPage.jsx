// src/pages/SubscriptionFormPage.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Helmet } from 'react-helmet';

function SubscriptionFormPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Utilisation de useMemo pour s'assurer que 'allServices' n'est créé qu'une fois
  // et ne provoque pas de re-rendus inutiles du useEffect
  const allServices = useMemo(() => [
    { id: 'achat-vente-terrain', name: 'Achat et Vente de Terrain' },
    { id: 'construction', name: 'Construction' },
    { id: 'gestion-locative', name: 'Gestion Locative' },
    { id: 'renovation', name: 'Rénovation' },
    { id: 'rehabilitation', name: 'Réhabilitation' },
    { id: 'entretien-immeuble-maison', name: 'Entretien Immeuble et Maison' },
  ], []); // Le tableau de dépendances vide signifie que le calcul n'est fait qu'au premier rendu

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    selectedServices: [],
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceIdFromUrl = params.get('service');
    // Vérifie si un serviceId est dans l'URL et s'il correspond à un service existant
    if (serviceIdFromUrl && allServices.some(s => s.id === serviceIdFromUrl)) {
      setFormData(prev => ({
        ...prev,
        selectedServices: [serviceIdFromUrl], // Pré-sélectionne le service
      }));
    }
  }, [location.search, allServices]); // allServices est une dépendance stable grâce à useMemo

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => {
        const newSelectedServices = checked
          ? [...prev.selectedServices, value]
          : prev.selectedServices.filter(service => service !== value);
        return { ...prev, selectedServices: newSelectedServices };
      });
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    if (formData.selectedServices.length === 0) {
      setError("Veuillez sélectionner au moins un service.");
      setLoading(false);
      return;
    }

    try {
      await addDoc(collection(db, "subscriptions"), {
        ...formData,
        timestamp: serverTimestamp(),
      });

      setSuccess("Votre demande de souscription a été envoyée avec succès !");
      setFormData({ // Réinitialise le formulaire
        fullName: '',
        email: '',
        phone: '',
        message: '',
        selectedServices: [],
      });
      setTimeout(() => navigate('/'), 3000); // Redirige vers la page d'accueil après 3 secondes
    } catch (err) {
      console.error("Erreur lors de l'envoi de la souscription :", err);
      setError("Une erreur est survenue lors de l'envoi de votre demande. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Souscrire à nos Services Immobiliers</title>
        <meta
          name="description"
          content="Formulaire de souscription aux services immobiliers : achat, construction, gestion locative, rénovation, et plus."
        />
        {/* Assurez-vous de remplacer 'ton-site.com' par le domaine réel de votre site */}
        <link rel="canonical" href="https://ton-site.com/subscribe" />
      </Helmet>

      <div className="container mx-auto p-8 my-8 bg-white shadow-lg rounded-lg max-w-2xl">
        <h1 className="text-4xl font-extrabold text-[#004aad] text-center mb-8">Souscrire à nos Services</h1>

        {success && (
          <p
            className="text-green-600 text-center text-lg mb-4"
            role="alert"
            aria-live="polite"
          >
            {success}
          </p>
        )}
        {error && (
          <p
            className="text-red-500 text-center text-lg mb-4"
            role="alert"
            aria-live="assertive"
          >
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div>
            <label htmlFor="fullName" className="block text-lg font-medium text-gray-700 mb-2">
              Nom Complet
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#004aad] focus:border-[#004aad] transition duration-200"
              value={formData.fullName}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#004aad] focus:border-[#004aad] transition duration-200"
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-lg font-medium text-gray-700 mb-2">
              Téléphone (facultatif)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#004aad] focus:border-[#004aad] transition duration-200"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <fieldset>
            <legend className="block text-lg font-medium text-gray-700 mb-2">Services demandés :</legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {allServices.map(service => (
                <div key={service.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={service.id}
                    name="selectedServices"
                    value={service.id}
                    checked={formData.selectedServices.includes(service.id)}
                    onChange={handleChange}
                    className="h-5 w-5 text-[#004aad] rounded border-gray-300 focus:ring-[#004aad]"
                    // Ajout d'aria-describedby pour l'accessibilité en cas d'erreur de sélection
                    aria-describedby={error && formData.selectedServices.length === 0 ? "error-services" : undefined}
                  />
                  <label htmlFor={service.id} className="ml-3 text-base text-gray-800 cursor-pointer">
                    {service.name}
                  </label>
                </div>
              ))}
            </div>
            {error && formData.selectedServices.length === 0 && (
              <p id="error-services" className="text-red-500 mt-1" role="alert" aria-live="assertive">
                Veuillez sélectionner au moins un service.
              </p>
            )}
          </fieldset>

          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
              Votre message (facultatif)
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#004aad] focus:border-[#004aad] transition duration-200"
              placeholder="Décrivez votre besoin ou toute information complémentaire."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#004aad] text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-[#00338d] transition duration-300 transform hover:scale-105"
            disabled={loading}
          >
            {loading ? 'Envoi en cours...' : 'Envoyer ma demande'}
          </button>
        </form>
      </div>
    </>
  );
}

export default SubscriptionFormPage;