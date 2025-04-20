import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Transport National",

    image:
      "https://img.freepik.com/free-photo/buses-bus-terminal-valletta_1398-182.jpg?uid=R115960642&ga=GA1.1.519463234.1718278238&semt=ais_hybrid&w=740",
    description:
      "Solutions complètes pour le transport de marchandises en France",
    features: [
      "Livraison express 24h",
      "Transport palettisé et colis",
      "Service dédié selon vos besoins",
    ],
  },
  {
    title: "Transport International",
    image:
      "https://img.freepik.com/free-vector/hand-drawn-flat-design-international-trade_23-2149154534.jpg?uid=R115960642&ga=GA1.1.519463234.1718278238&semt=ais_hybrid&w=740",
    description: "Réseau mondial de partenaires pour vos envois à l'étranger",
    features: [
      "Fret aérien, maritime et routier",
      "Dédouanement inclus",
      "Suivi en temps réel",
    ],
  },
  {
    title: "Logistique et Stockage",
    image:
      "https://img.freepik.com/free-photo/interior-large-distribution-warehouse-with-shelves-stacked-with-palettes-goods-ready-market_342744-1481.jpg?uid=R115960642&ga=GA1.1.519463234.1718278238&semt=ais_hybrid&w=740",
    description: "Solutions de stockage et préparation de commandes",
    features: [
      "Entrepôts sécurisés",
      "Gestion des stocks",
      "Préparation de commandes",
    ],
  },
];
const NewHome = () => {
  return (
    <div>
      <section className="relative lg:grid lg:h-screen lg:place-content-center overflow-hidden">
        <video
          className="absolute inset-0 z-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src=""
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <div className="relative z-20 mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="max-w-prose text-left text-white">
            <h1 className="text-4xl text-yellow-400 uppercase font-bold sm:text-5xl">
              Transport <span className="text-white"> et </span>
              <h1 className="text-yellow-400"> logistique </h1>
            </h1>

            <div className="mt-4 flex gap-4 sm:mt-6">
              <Link
                className="inline-block rounded border border-yellow-600 bg-yellow-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-yellow-700"
                to="/demander-un-devis"
              >
                Demander Un Devis
              </Link>

              <Link
                className="inline-block rounded border border-white px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-white hover:text-gray-900"
                to="/about"
              >
                A propos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-yellow-600 font-bold text-center mb-8">
            Qui sommes-nous ?
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-lg mb-4">
                TransportLog est une entreprise de logistique fondée en 2010.
                Nous sommes spécialisés dans le transport, le stockage et la
                gestion de la chaîne d'approvisionnement.
              </p>
              <p className="text-lg mb-4">
                Nous accompagnons les entreprises de toutes tailles avec des
                solutions personnalisées et innovantes.
              </p>
              <Link
                to="/about"
                className="text-yellow-600 font-semibold hover:underline"
              >
                En savoir plus →
              </Link>
            </div>
            <div>
              <img
                src="https://img.freepik.com/free-photo/container-ship-cargo-freight-transportation_53876-104208.jpg"
                alt="Logistique"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-yellow-600 font-bold text-center mb-12">
            Nos services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <img
                  src={service.image}
                  className="object-cover h-62 w-full"
                  alt=""
                />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to="/services"
                  className="text-yellow-600 hover:underline font-semibold"
                >
                  En savoir plus →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewHome;
