import React, { useState } from "react";
import { Calendar, User, ArrowRight, Search } from "lucide-react";

function Blog() {
  const [hoveredId, setHoveredId] = useState(null);

  // Données de test (à dynamiser avec ta future BDD)
  const articles = [
    {
      id: 1,
      titre: "Comment bien préparer son voyage pour Dubaï en 2024",
      description: "Découvrez les astuces indispensables pour réussir votre séjour aux Émirats Arabes Unis...",
      date: "28 Décembre 2024",
      auteur: "Lyms Services",
      img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
      categorie: "CONSEILS"
    },
    {
      id: 2,
      titre: "Les nouvelles règles pour l'immigration au Canada",
      description: "Tout ce qu'il faut savoir sur les changements récents pour les permis d'études et de travail...",
      date: "25 Décembre 2024",
      auteur: "Lyms Services",
      img: "https://images.unsplash.com/photo-1541339907198-e08756dee402?auto=format&fit=crop&w=800&q=80",
      categorie: "ACTUALITÉS"
    },
    {
      id: 3,
      titre: "Top 5 des destinations pour un safari inoubliable",
      description: "Du Kenya à la Tanzanie, explorez les meilleures options pour voir les Big Five...",
      date: "20 Décembre 2024",
      auteur: "Lyms Services",
      img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
      categorie: "DESTINATIONS"
    }
  ];

  return (
    <div style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      
      {/* BANNIÈRE BLEUE (Style identique à Nos Offres) */}
      <section style={headerStyle}>
        <h1 style={titleStyle}>Notre Blog & Actualités</h1>
        <p style={subtitleStyle}>Restez informés sur les dernières tendances du voyage et de l'immigration</p>
      </section>

      {/* BARRE DE RECHERCHE D'ARTICLES */}
      <div style={searchWrapper}>
        <div style={searchCard}>
          <div style={innerInput}>
            <Search size={18} color="#94a3b8" />
            <input type="text" placeholder="Rechercher un article..." style={cleanInput} />
          </div>
          <button style={btnSearch}>Rechercher</button>
        </div>
      </div>

      {/* GRILLE DES ARTICLES */}
      <div style={gridStyle}>
        {articles.map((art) => (
          <article 
            key={art.id} 
            style={{
              ...cardStyle, 
              opacity: hoveredId && hoveredId !== art.id ? 0.8 : 1,
              transform: hoveredId === art.id ? "translateY(-8px)" : "none",
              transition: "0.3s ease"
            }}
            onMouseEnter={() => setHoveredId(art.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div style={{ position: "relative", overflow: "hidden" }}>
              <img src={art.img} alt={art.titre} style={imgStyle} />
              <span style={catBadge}>{art.categorie}</span>
            </div>
            
            <div style={{ padding: "24px" }}>
              <div style={metaStyle}>
                <span style={metaItem}><Calendar size={14} /> {art.date}</span>
                <span style={metaItem}><User size={14} /> {art.auteur}</span>
              </div>
              
              <h3 style={artTitle}>{art.titre}</h3>
              <p style={artDesc}>{art.description}</p>
              
              <button style={btnMore}>
                Lire la suite <ArrowRight size={16} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

// STYLES
const headerStyle = { backgroundColor: "#2563eb", color: "white", padding: "60px 10% 100px", textAlign: "left" };
const titleStyle = { fontSize: "42px", fontWeight: "900", margin: 0 };
const subtitleStyle = { fontSize: "18px", opacity: 0.9, marginTop: "10px" };

const searchWrapper = { padding: "0 10%", marginTop: "-40px" };
const searchCard = { backgroundColor: "white", borderRadius: "16px", padding: "12px 20px", display: "flex", gap: "15px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", maxWidth: "600px" };
const innerInput = { flex: 1, display: "flex", alignItems: "center", gap: "10px" };
const cleanInput = { border: "none", outline: "none", width: "100%", fontSize: "15px" };
const btnSearch = { backgroundColor: "#2563eb", color: "white", padding: "10px 20px", borderRadius: "10px", border: "none", fontWeight: "600", cursor: "pointer" };

const gridStyle = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "30px", padding: "60px 10%" };
const cardStyle = { backgroundColor: "white", borderRadius: "24px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" };
const imgStyle = { width: "100%", height: "240px", objectFit: "cover" };
const catBadge = { position: "absolute", bottom: "15px", left: "15px", backgroundColor: "#2563eb", color: "white", padding: "5px 15px", borderRadius: "20px", fontSize: "11px", fontWeight: "700" };

const metaStyle = { display: "flex", gap: "15px", color: "#64748b", fontSize: "13px", marginBottom: "15px" };
const metaItem = { display: "flex", alignItems: "center", gap: "5px" };
const artTitle = { fontSize: "20px", fontWeight: "800", color: "#1e293b", marginBottom: "12px", lineHeight: "1.4" };
const artDesc = { color: "#64748b", fontSize: "15px", lineHeight: "1.6", marginBottom: "20px" };
const btnMore = { display: "flex", alignItems: "center", gap: "8px", color: "#2563eb", fontWeight: "700", border: "none", background: "none", cursor: "pointer", padding: 0 };

export default Blog;