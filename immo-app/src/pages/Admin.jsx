import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";

function Admin() {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) navigate("/login");
    });
    return () => unsubscribe();
  }, [navigate]);

  return (
    <div className="max-w-4xl mx-auto mt-12">
      <h1 className="text-3xl font-bold mb-6">Dashboard Admin</h1>
      <p>Bienvenue sur ton espace de gestion des biens & devis.</p>
      {/* Tu rajouteras ici un tableau (listes des biens) + boutons Edit/Delete */}
    </div>
  );
}

export default Admin;
