import { MapPin, Phone, Mail } from "lucide-react";

function Contact() {
  return (
    <div style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      {/* Bannière Bleue */}
      <section style={bannerStyle}>
        <div style={containerStyle}>
          <h1 style={h1Style}>Contactez-nous</h1>
          <p style={pStyle}>Notre équipe est à votre disposition pour répondre à toutes vos questions</p>
        </div>
      </section>

      <div style={contentGrid}>
        {/* Formulaire à gauche */}
        <div style={formCard}>
          <h2 style={cardTitle}>Envoyez-nous un message</h2>
          <form style={formStyle}>
            <div style={inputGroup}>
              <label style={labelStyle}>Nom complet *</label>
              <input type="text" placeholder="Votre nom complet" style={inputStyle} />
            </div>

            <div style={row}>
              <div style={{...inputGroup, flex: 1}}>
                <label style={labelStyle}>Email *</label>
                <input type="email" placeholder="votre@email.com" style={inputStyle} />
              </div>
              <div style={{...inputGroup, flex: 1}}>
                <label style={labelStyle}>Téléphone *</label>
                <input type="text" placeholder="+225 XX XX XX XX XX" style={inputStyle} />
              </div>
            </div>

            <div style={inputGroup}>
              <label style={labelStyle}>Sujet *</label>
              <select style={inputStyle}>
                <option>Sélectionnez un sujet</option>
                <option>Information Voyage</option>
                <option>Réservation</option>
              </select>
            </div>

            <div style={inputGroup}>
              <label style={labelStyle}>Message *</label>
              <textarea placeholder="Votre message..." style={{...inputStyle, height: "120px", resize: "none"}}></textarea>
            </div>

            <button type="submit" style={submitBtn}>Envoyer le message</button>
          </form>
        </div>

        {/* Blocs d'infos à droite */}
        <div style={infoColumn}>
          <div style={infoCard}>
            <div style={iconBox}><MapPin color="#2563eb" size={24} /></div>
            <div>
              <h3 style={infoTitle}>Adresse</h3>
              <p style={infoText}>Cocody, Angré<br/>Abidjan, Côte d'Ivoire</p>
            </div>
          </div>

          <div style={infoCard}>
            <div style={iconBox}><Phone color="#2563eb" size={24} /></div>
            <div>
              <h3 style={infoTitle}>Téléphone</h3>
              <p style={infoText}>+225 XX XX XX XX XX<br/>+225 XX XX XX XX XX</p>
            </div>
          </div>

          <div style={infoCard}>
            <div style={iconBox}><Mail color="#2563eb" size={24} /></div>
            <div>
              <h3 style={infoTitle}>Email</h3>
              <p style={infoText}>contact@lymsservices.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Carte Google Maps Instantanée */}
      <div style={mapContainer}>
        <iframe 
          title="Localisation Lyms Services"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127110.15570077182!2d-4.049688439364124!3d5.348434209549363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc193498906649f%3A0xc6485906c6463402!2sAbidjan!5e0!3m2!1sfr!2sci!4v1700000000000!5m2!1sfr!2sci" 
          width="100%" 
          height="450" 
          style={{ border: 0, borderRadius: "16px" }} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

// --- Styles ---
const bannerStyle = { backgroundColor: "#2563eb", color: "#fff", padding: "80px 5%", marginBottom: "50px" };
const containerStyle = { maxWidth: "1200px", margin: "0 auto" };
const h1Style = { fontSize: "48px", fontWeight: "800", margin: 0 };
const pStyle = { fontSize: "18px", opacity: 0.9, marginTop: "10px" };
const contentGrid = { maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr", gap: "30px", padding: "0 20px" };
const formCard = { backgroundColor: "#fff", padding: "40px", borderRadius: "16px", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" };
const cardTitle = { fontSize: "24px", fontWeight: "700", marginBottom: "30px", color: "#1e293b" };
const formStyle = { display: "flex", flexDirection: "column", gap: "20px" };
const row = { display: "flex", gap: "20px" };
const inputGroup = { display: "flex", flexDirection: "column", gap: "8px" };
const labelStyle = { fontSize: "14px", fontWeight: "600", color: "#475569" };
const inputStyle = { padding: "12px", borderRadius: "8px", border: "1px solid #e2e8f0", fontSize: "15px", outline: "none" };
const submitBtn = { backgroundColor: "#2563eb", color: "#fff", padding: "14px", borderRadius: "8px", border: "none", fontWeight: "600", cursor: "pointer", marginTop: "10px" };
const infoColumn = { display: "flex", flexDirection: "column", gap: "20px" };
const infoCard = { backgroundColor: "#fff", padding: "25px", borderRadius: "16px", display: "flex", gap: "20px", alignItems: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" };
const iconBox = { backgroundColor: "#eff6ff", padding: "15px", borderRadius: "12px" };
const infoTitle = { margin: "0 0 5px 0", fontSize: "16px", fontWeight: "700" };
const infoText = { margin: 0, color: "#64748b", lineHeight: "1.5", fontSize: "15px" };
const mapContainer = { maxWidth: "1200px", margin: "50px auto", padding: "0 20px 80px" };

export default Contact;