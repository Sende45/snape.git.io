import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { db } from '../firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus(null);

    try {
      await addDoc(collection(db, 'contactMessages'), {
        name,
        email,
        message,
        timestamp: serverTimestamp()
      });
      setSubmissionStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
      setSubmissionStatus('error');
    }
  };

  return (
    <div className="container mx-auto p-8 my-8 bg-white shadow-lg rounded-lg">
      <Helmet>
        <title>Contact | Confort Immobilier SI</title>
        <meta name="description" content="Contactez Confort Immobilier SI à Abidjan pour vos besoins immobiliers, devis et accompagnement." />
        <link rel="canonical" href="https://www.confortimmobilierci.com/contact" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contactez Confort Immobilier SI",
              "url": "https://www.confortimmobilierci.com/contact",
              "description": "Contactez-nous pour toute demande relative à l'immobilier à Abidjan et en Côte d'Ivoire."
            }
          `}
        </script>
      </Helmet>

      <h1 className="text-4xl font-extrabold text-[#004aad] text-center mb-10">Contactez-Nous</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Formulaire */}
        <div className="lg:w-1/2 p-6 bg-gray-50 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-[#ff3131] mb-6 text-center lg:text-left">Envoyez-nous un message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Nom Complet</label>
              <input
                type="text"
                id="name"
                aria-label="Nom complet"
                autoComplete="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#004aad] focus:border-[#004aad] transition"
                placeholder="Votre nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Adresse Email</label>
              <input
                type="email"
                id="email"
                aria-label="Adresse email"
                autoComplete="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#004aad] focus:border-[#004aad] transition"
                placeholder="votre.email@exemple.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Votre Message</label>
              <textarea
                id="message"
                aria-label="Votre message"
                rows="6"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#004aad] focus:border-[#004aad] transition resize-y"
                placeholder="Tapez votre message ici..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            {submissionStatus === 'success' && (
              <p className="text-green-600 text-center text-sm">Votre message a été envoyé avec succès !</p>
            )}
            {submissionStatus === 'error' && (
              <p className="text-red-500 text-center text-sm">Une erreur est survenue. Veuillez réessayer.</p>
            )}

            <button
              type="submit"
              className="w-full bg-[#004aad] text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-[#00338d] transition transform hover:scale-105"
            >
              Envoyer le message
            </button>
          </form>
        </div>

        {/* Carte Google Maps */}
        <div className="lg:w-1/2 p-6 bg-gray-50 rounded-lg shadow-md flex flex-col items-center">
          <h2 className="text-3xl font-bold text-[#ff3131] mb-6 text-center">Où nous trouver</h2>
          <div className="w-full h-80 lg:h-full min-h-[300px] rounded-lg overflow-hidden border-2 border-gray-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.1009849206686!2d-4.015949325781398!3d5.36015529462828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1eb4bb0d5e2d1%3A0x6d8b7b2b2b2b2b2b!2sAbidjan!5e0!3m2!1sfr!2sci!4v1719119330999!5m2!1sfr!2sci"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation de Confort Immobilier SI"
            ></iframe>
          </div>
          <p className="mt-4 text-base text-gray-700 text-center">
            Notre bureau est situé au cœur d'Abidjan. N'hésitez pas à nous rendre visite !
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
