// src/pages/Login.jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { auth } from '../firebaseConfig';
import { signInWithCustomToken } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const getCustomTokenFromServer = async (userEmail, userPassword) => {
    try {
      const response = await fetch('/api/getCustomToken', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: userEmail, password: userPassword }),
      });

      if (!response.ok) {
        throw new Error('Échec de l\'obtention du token personnalisé');
      }
      const data = await response.json();
      return data.customToken;
    } catch (err) {
      console.error("Erreur lors de l'obtention du token :", err);
      setError(err.message);
      return null;
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const customToken = await getCustomTokenFromServer(email, password);

      if (!customToken) {
        setError("Impossible d'obtenir un token d'authentification.");
        return;
      }

      await signInWithCustomToken(auth, customToken);

      console.log("Connexion réussie avec token personnalisé !");
      navigate('/');
    } catch (err) {
      console.error("Erreur de connexion :", err.code, err.message);
      let errorMessage = "Une erreur inattendue est survenue lors de la connexion.";
      if (err.code === "auth/invalid-custom-token") {
        errorMessage = "Le token de connexion est invalide ou a expiré.";
      } else if (err.code === "auth/user-disabled") {
        errorMessage = "Votre compte a été désactivé.";
      } else if (err.code === "auth/network-request-failed") {
        errorMessage = "Problème de connexion réseau. Veuillez réessayer.";
      } else if (err.message) {
        errorMessage = err.message;
      }
      setError(errorMessage);
    }
  };

  return (
    <div className="container mx-auto p-8 my-8 bg-white shadow-lg rounded-lg max-w-md">
      <Helmet>
        <title>Connexion | Confort Immobilier SI</title>
        <meta
          name="description"
          content="Connectez-vous à votre espace personnel sur Confort Immobilier SI pour gérer vos biens et demandes."
        />
        <link rel="canonical" href="https://www.confortimmobilierci.com/login" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Connexion - Confort Immobilier SI",
              "url": "https://www.confortimmobilierci.com/login",
              "description": "Connectez-vous à votre espace personnel pour gérer vos biens et vos devis."
            }
          `}
        </script>
      </Helmet>

      <h1 className="text-4xl font-extrabold text-[#004aad] text-center mb-8">Se connecter</h1>

      <form onSubmit={handleLogin} className="space-y-6">
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
            placeholder="Votre mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && (
          <p className="text-red-500 text-center text-sm">{error}</p>
        )}

        <button
          type="submit"
          className="w-full bg-[#ff3131] text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-[#cc2727] transition duration-300 transform hover:scale-105"
        >
          Connexion
        </button>
      </form>
      <p className="mt-6 text-center text-gray-600">
        Pas encore de compte ? <Link to="/register" className="text-[#004aad] hover:underline">S'inscrire</Link>
      </p>
    </div>
  );
}

export default Login;
