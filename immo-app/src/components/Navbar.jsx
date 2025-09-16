import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
// Assurez-vous que 'logo.png' est bien l'icône seule ou que vous avez une version séparée de l'icône
import logoIcon from "../assets/logo.png"; // <-- Gardons 'logo.png' ici, en supposant que c'est votre icône seule ou que vous allez le modifier.
// Si vous avez une icône séparée, importez-la ainsi: import logoIcon from "../assets/logo-icon.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Propriétés", path: "/proprietes" },
    { name: "Nos Services", path: "/nosservices" }, // <-- MODIFIÉ ici: 'Nos Services' pour l'affichage
    { name: "Contact", path: "/contact" },
    { name: "Devis", path: "/devis" },
  ];

  const linkClass = (path) =>
    `relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] ${
      location.pathname === path
        ? "text-[#ff3131] after:bg-[#ff3131]"
        : "text-[#004aad] hover:text-[#ff3131] after:bg-[#ff3131] after:scale-x-0 hover:after:scale-x-100"
    } after:transition-transform after:duration-300 after:origin-left transition-colors duration-300`;

  // Fonction pour rendre le bouton "Se connecter" afin d'éviter la duplication de JSX
  const renderLoginButton = (onClickHandler) => (
    <Link
      to="/login"
      onClick={onClickHandler}
      className="bg-[#004aad] text-white px-4 py-2 rounded-full hover:bg-[#00338d] transition"
    >
      Se connecter
    </Link>
  );

  return (
    <nav className="bg-[#f0f6ff] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Nom */}
        <Link to="/" className="flex items-center space-x-3">
          {/* MODIFIÉ: Ajustement de la taille de l'icône et du texte du nom */}
          <div className="bg-white p-1 rounded shadow-md">
          <img src={logoIcon} alt="Logo Confort Immobilier SI" className="h-14 w-auto" />
      </div>
          <span className="text-blue-800 text-2xl md:text-3xl font-bold whitespace-nowrap"> {/* <-- Taille et couleur du texte ajustées */}
            CONFORT IMMOBILIER SI
          </span>
        </Link>

        {/* Menu desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 font-medium text-base">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className={linkClass(link.path)}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* Utilisation du bouton de connexion pour le desktop */}
          <div className="ml-4">
            {renderLoginButton(null)}
          </div>
        </div>

        {/* Burger mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`md:hidden px-6 pb-4 transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col space-y-4 text-[#004aad] font-medium text-base">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path} onClick={toggleMenu} className={linkClass(link.path)}>
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            {/* Utilisation du bouton de connexion pour le mobile, avec toggleMenu */}
            {renderLoginButton(toggleMenu)}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;