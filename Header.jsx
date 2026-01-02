import { NavLink } from "react-router-dom";
import { Plane } from "lucide-react";

function Header() {
  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <NavLink to="/" style={logoStyle}>
          <Plane size={24} color="#2563eb" />
          <span style={brandStyle}>Lyms Services</span>
        </NavLink>
        
        <nav>
          <ul style={navStyle}>
            <li>
              <NavLink to="/" style={navLinkLogic}>Accueil</NavLink>
            </li>
            <li>
              <NavLink to="/offres" style={navLinkLogic}>Nos Offres</NavLink>
            </li>
            <li>
              <NavLink to="/blog" style={navLinkLogic}>Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contact" style={navLinkLogic}>Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

// --- Logique dynamique pour le survol et le clic ---
const navLinkLogic = ({ isActive }) => ({
  textDecoration: "none",
  color: isActive ? "#fff" : "#4b5563",
  backgroundColor: isActive ? "#2563eb" : "transparent",
  padding: "8px 18px",
  borderRadius: "8px",
  fontWeight: "500",
  fontSize: "15px",
  transition: "all 0.2s ease",
  // Note : Pour le vrai survol (hover) en JS pur sans CSS externe, 
  // on ajoute souvent une classe CSS, mais voici la version propre :
});

// --- Styles de base ---
const headerStyle = { height: "70px", backgroundColor: "#fff", display: "flex", alignItems: "center", boxShadow: "0 2px 10px rgba(0,0,0,0.05)", position: "sticky", top: 0, zIndex: 1000 };
const containerStyle = { width: "90%", maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" };
const logoStyle = { display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" };
const brandStyle = { fontSize: "20px", fontWeight: "bold", color: "#1a1a1a" };
const navStyle = { display: "flex", listStyle: "none", gap: "10px", margin: 0, padding: 0 };

export default Header;