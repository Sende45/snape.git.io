// src/pages/Inscription.jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';

function Inscription() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      setSuccessMessage("Inscription réussie ! Vous pouvez maintenant vous connecter.");
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setTimeout(() => navigate('/login'), 2000);

    } catch (err) {
      console.error("Erreur d'inscription :", err.code, err.message);
      let errorMessage = "Une erreur inattendue est survenue lors de l'inscription.";
      if (err.code === "auth/email-already-in-use") {
        errorMessage = "Cette adresse email est déjà utilisée.";
      } else if (err.code === "auth/invalid-email") {
        errorMessage = "L'adresse email est invalide.";
      } else if (err.code === "auth/weak-password") {
        errorMessage = "Le mot de passe est trop faible (minimum 6 caractères).";
      } else if (err.message) {
        errorMessage = err.message;
      }
      setError(errorMessage);
    }
  };

  return (
    <div className="container mx-auto p-8 my-8 bg-white shadow-lg rounded-lg max-w-md">
      <Helmet>
        <title>Inscription | Confort Immobilier SI</title>
        <meta
          name="description"
          content="Créez votre compte sur Confort Immobilier SI pour gérer vos biens et devis en toute simplicité."
        />
        <link rel="canonical" href="https://www.confortimmobilierci.com/register" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Inscription - Confort Immobilier SI",
              "url": "https://www.confortimmobilierci.com/register",
              "description": "Créez votre compte pour gérer vos biens immobiliers et demandes de devis en ligne."
            }
          `}
        </script>
      </Helmet>

      <h1 className="text-4xl font-extrabold text-[#004aad] text-center mb-8">S'inscrire</h1>

      <form onSubmit={handleRegister} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            aria-label="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#004aad] focus:border-[#004aad] transition duration-200"
            placeholder="Votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-lg font-medium text-gray-700 mb-2">Mot de passe</label>
          <input
            type="password"
            id="password"
            aria-label="Mot de passe"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#004aad] focus:border-[#004aad] transition duration-200"
            placeholder="Minimum 6 caractères"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="6"
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block text-lg font-medium text-gray-700 mb-2">Confirmer le mot de passe</label>
          <input
            type="password"
            id="confirmPassword"
            aria-label="Confirmer le mot de passe"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#004aad] focus:border-[#004aad] transition duration-200"
            placeholder="Confirmez votre mot de passe"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="text-red-500 text-center text-sm">{error}</p>}
        {successMessage && <p className="text-green-600 text-center text-sm">{successMessage}</p>}

        <button
          type="submit"
          className="w-full bg-[#004aad] text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-[#00338d] transition duration-300 transform hover:scale-105"
        >
          S'inscrire
        </button>
      </form>
      <p className="mt-6 text-center text-gray-600">
        Déjà un compte ? <Link to="/login" className="text-[#ff3131] hover:underline">Se connecter</Link>
      </p>
    </div>
  );
}

export default Inscription;
