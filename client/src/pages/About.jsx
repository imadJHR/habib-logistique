const About = () => {
  const certifications = [
    "ISO 9001:2015",
    "Certifié GDP (Good Distribution Practice)",
    "Autorisation de transport de marchandises dangereuses",
    "Membre de la Fédération des Entreprises de Transport et Logistique",
  ];

  return (
    <div>
      <section className="bg-yellow-600 text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">À propos de TransportLog</h1>
          <p className="text-xl">Notre histoire, nos valeurs et notre équipe</p>
        </div>
      </section>

      <section className="mb-16">
        <div className="container justify-center mx-auto px-4">
          <h2 className="text-3xl  text-yellow-400 font-bold mb-6">
            Notre histoire
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="mt-20">
              <p className="mb-4">
                Fondée en 2010 par Jean Dupont, TransportLog a commencé comme
                une petite entreprise de transport régional avec 3 camions et
                une équipe de 5 personnes.
              </p>
              <p className="mb-4">
                Grâce à notre engagement envers la qualité et la satisfaction
                client, nous avons rapidement grandi pour devenir un acteur
                national puis international de la logistique.
              </p>
              <p>
                Aujourd'hui, nous disposons de 12 entrepôts stratégiquement
                situés en Europe et d'une flotte de plus de 150 véhicules.
              </p>
            </div>
            <div className="bg-white object-cover rounded-lg flex items-center justify-center">
              <img
                className="rounded-lg object-cover"
                src="https://img.freepik.com/free-photo/interior-large-distribution-warehouse-with-shelves-stacked-with-palettes-goods-ready-market_342744-1481.jpg?uid=R115960642&ga=GA1.1.519463234.1718278238&semt=ais_hybrid&w=740"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mb-16 bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-yellow-400 font-bold mb-8 text-center">
            Nos valeurs
          </h2>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">
              Nos valeurs fondamentales
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-2 text-yellow-600">
                  Fiabilité
                </h4>
                <p>Respect systématique des délais et engagements</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-2 text-yellow-600">
                  Innovation
                </h4>
                <p>Solutions technologiques pour une logistique performante</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-2 text-yellow-600">
                  Écologie
                </h4>
                <p>Engagement pour une logistique durable et responsable</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-yellow-400 font-bold mb-6">
            Certifications et sécurité
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="mt-20">
              <p className="mb-6">
                TransportLog s'engage à respecter les normes les plus strictes
                en matière de qualité, sécurité et conformité réglementaire.
              </p>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg flex items-center justify-center">
              <img
                src="https://img.freepik.com/free-photo/aerial-view-container-cargo-ship-sea_335224-720.jpg?uid=R115960642&ga=GA1.1.519463234.1718278238&semt=ais_hybrid&w=740"
                className="object-cover rounded-lg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
