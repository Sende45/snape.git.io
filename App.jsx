import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NosOffres from "./pages/NosOffres";
import Terrain from "./pages/Terrain";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import { db } from "./firebase";

function App() {
  return (
    <> {/* Utilise un fragment au lieu d'un second Router */}
      <Header />
      <div style={{ paddingTop: "70px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offres" element={<NosOffres />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/terrains" element={<Terrains />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;