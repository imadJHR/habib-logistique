// src/pages/Services.jsx
import { Link } from "react-router-dom";

const Services = () => {
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
    {
      title: "Livraison Express/Sur-mesure",
      image:
        "https://img.freepik.com/free-photo/happy-young-man-receiving-parcel-from-female-courier-home_23-2147862242.jpg?uid=R115960642&ga=GA1.1.519463234.1718278238&semt=ais_hybrid&w=740",
      description: "Solutions urgentes et adaptées à vos besoins spécifiques",
      features: [
        "Chauffeurs dédiés",
        "Livraison en J+1",
        "Service 24/7 pour les urgences",
      ],
    },
    {
      title: "Dédouanement",
      image:
        "https://img.freepik.com/free-photo/close-up-signing-package-delivery_23-2148869412.jpg?uid=R115960642&ga=GA1.1.519463234.1718278238&semt=ais_hybrid&w=740",
      description: "Gestion complète des formalités douanières",
      features: [
        "Expertise en réglementation internationale",
        "Déclaration en douane",
        "Optimisation des coûts",
      ],
    },
    {
      title: "Suivi des Colis",
      image:
        "https://img.freepik.com/free-vector/store-staff-check-number-products-that-must-be-delivered-customers-day_1150-51079.jpg?uid=R115960642&ga=GA1.1.519463234.1718278238&semt=ais_hybrid&w=740",
      description: "Technologie de pointe pour le suivi en temps réel",
      features: [
        "Plateforme en ligne 24/7",
        "Alertes en temps réel",
        "Historique complet",
      ],
    },
  ];

  return (
    <div>
      <section className="bg-yellow-600 text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Nos services</h1>
          <p className="text-xl">
            Des solutions logistiques complètes et sur mesure
          </p>
        </div>
      </section>
      <section className="mb-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <div className="bg-gray-200 flex items-center justify-center">
                  <img
                    src={service.image}
                    className="object-cover h-62 w-full"
                    alt=""
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/demander-un-devis"
                    className="inline-block bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition"
                  >
                    Demander un devis
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Besoin d'une solution sur mesure ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour étudier vos besoins
            spécifiques et vous proposer la solution la plus adaptée.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition"
            >
              Nous contacter
            </Link>
            <Link
              to="/quote"
              className="border-2 border-yellow-600 text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
