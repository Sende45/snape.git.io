import React from "react";
import { Helmet } from "react-helmet";

const categories = [
  {
    name: "Biens en Location",
    properties: [
      {
        image: "/images/maison3.jpg",
        type: "",
        statut: "LOCATION",
        prix: "500 000 FCFA",
        localisation: "Plateau - Abidjan",
        code: "AP04560",
        chambres: 3,
        surface: 120,
      },
      {
        image: "/images/maison5.jpg",
        type: "",
        statut: "LOCATION",
        prix: "700 000 FCFA",
        localisation: "Yopougon - Abidjan",
        code: "MA07890",
        chambres: 4,
        surface: 220,
      },
      {
        image: "/images/maison6.jpg",
        type: "",
        statut: "LOCATION",
        prix: "400 000 FCFA",
        localisation: "Koumassi - Abidjan",
        code: "AP09987",
        chambres: 2,
        surface: 90,
      },
    ],
  },
  {
    name: "Biens en Vente",
    properties: [
      {
        image: "/images/maison1.jpg",
        type: "",
        statut: "VENTE",
        prix: "1 300 000 FCFA",
        localisation: "Cocody - Abidjan",
        code: "AP01230",
        chambres: 4,
        surface: 98,
      },
      {
        image: "/images/maison2.jpg",
        type: "",
        statut: "VENTE",
        prix: "1 400 000 FCFA",
        localisation: "Riviera - Abidjan",
        code: "MA02340",
        chambres: 3,
        surface: 100,
      },
      {
        image: "/images/maison4.jpg",
        type: "",
        statut: "VENTE",
        prix: "1 000 000 FCFA",
        localisation: "Marcory - Abidjan",
        code: "AP06789",
        chambres: 2,
        surface: 110,
      },
    ],
  },
];

function Proprietes() {
  return (
    <>
      <Helmet>
        <title>Nos propriétés à Abidjan - Location et Vente | Votre Agence Immobilière</title>
        <meta
          name="description"
          content="Découvrez nos biens immobiliers disponibles à la location et à la vente à Abidjan. Maisons et appartements de qualité pour tous vos besoins."
        />
        <link rel="canonical" href="https://votre-site.com/proprietes" />
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Nos propriétés à Abidjan - Location et Vente" />
        <meta property="og:description" content="Maisons et appartements disponibles à la location et à la vente à Abidjan." />
        <meta property="og:url" content="https://votre-site.com/proprietes" />
        <meta property="og:type" content="website" />
        {/* Twitter */}
        <meta name="twitter:title" content="Nos propriétés à Abidjan - Location et Vente" />
        <meta name="twitter:description" content="Maisons et appartements disponibles à la location et à la vente à Abidjan." />
      </Helmet>

      {/* Données structurées schema.org */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Propriétés à Abidjan",
          "itemListElement": categories.flatMap((cat) =>
            cat.properties.map((prop, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": `Propriété ${prop.code}`,
              "image": prop.image,
              "url": `https://votre-site.com/proprietes/${prop.code}`,
              "description": `${prop.statut} - ${prop.localisation} - ${prop.chambres} chambres - ${prop.surface} m²`,
              "offers": {
                "@type": "Offer",
                "price": prop.prix.replace(/\sFCFA/, ''),
                "priceCurrency": "XOF",
                "availability": prop.statut === "LOCATION" ? "https://schema.org/ForRent" : "https://schema.org/ForSale",
              },
            }))
          ),
        })}
      </script>

      <main className="bg-white py-16 px-4 md:px-10">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-10">
          Nos Propriétés
        </h1>

        {categories.map((cat, index) => (
          <section key={index} className="mb-16" aria-labelledby={`section-${index}`}>
            <div className="flex justify-between items-center mb-6">
              <h2 id={`section-${index}`} className="text-2xl font-bold text-blue-800">
                {cat.name}
              </h2>
              <button className="text-sm text-blue-700 hover:underline" aria-label={`Voir tous les biens de la catégorie ${cat.name}`}>
                Voir tous
              </button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {cat.properties.map((item, i) => (
                <article
                  key={i}
                  className="group bg-white rounded-xl shadow-md hover:shadow-2xl transform transition duration-300 hover:-translate-y-1 relative overflow-hidden"
                  aria-label={`Propriété ${item.code}, ${item.statut}, située à ${item.localisation}, ${item.chambres} chambres, ${item.surface} mètres carrés, au prix de ${item.prix}`}
                >
                  {/* Image & Badge */}
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={`Propriété située à ${item.localisation}`}
                      className="w-full h-56 object-cover rounded-t-xl"
                      loading="lazy"
                    />
                    <span
                      className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full"
                      aria-label={item.statut === "LOCATION" ? "Bien en location" : "Bien en vente"}
                    >
                      {item.statut}
                    </span>
                  </div>

                  {/* Contenu */}
                  <div className="p-5">
                    <div className="flex justify-between items-center mb-1">
                      {/* Optionnel : afficher type si tu veux */}
                      {/* <span className="text-xs text-gray-600 uppercase font-semibold">{item.type}</span> */}
                      <span className="text-sm font-bold text-orange-600">{item.prix}</span>
                    </div>

                    <p className="text-gray-700 text-sm mb-3">{item.localisation}</p>

                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{item.chambres} ch.</span>
                      <span>{item.surface} m²</span>
                      <span>{item.code}</span>
                    </div>

                    <button
                      className="mt-4 w-full py-2 text-sm bg-blue-800 text-white rounded-md hover:bg-blue-900 transition-all"
                      aria-label={`Voir les détails de la propriété ${item.code}`}
                    >
                      Voir détail
                    </button>
                  </div>

                  {/* Overlay au hover */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}

export default Proprietes;
