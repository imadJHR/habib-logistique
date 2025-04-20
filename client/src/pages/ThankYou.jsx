import { useLocation, Link } from "react-router-dom";

const ThankYou = () => {
  const location = useLocation();
  const { message, contactEmail } = location.state || {};

  return (
    <div className="min-h-screen bg-gray-100">
      <section className="bg-yellow-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Merci pour votre demande</h1>
          <p className="text-xl">Nous avons bien reçu votre demande de devis</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="mb-6">
              <svg
                className="w-16 h-16 text-green-500 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {message || "Votre demande a été envoyée avec succès!"}
            </h2>

            <p className="text-gray-600 mb-6">
              Notre équipe va traiter votre demande dans les plus brefs délais.
              {contactEmail && (
                <>
                  <br />
                  Un email de confirmation a été envoyé à{" "}
                  <span className="font-semibold">{contactEmail}</span>.
                </>
              )}
            </p>

            <div className="space-y-4 max-w-xs mx-auto">
              <Link
                to="/"
                className="block w-full bg-yellow-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-yellow-700 transition"
              >
                Retour à l'accueil
              </Link>

              <p className="text-gray-500 text-sm">
                Vous avez une question?{" "}
                <Link to="/contact" className="text-yellow-600 hover:underline">
                  Contactez-nous
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Prochaines étapes
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-yellow-100 rounded-full p-2 mr-4">
                  <svg
                    className="w-6 h-6 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">
                    Réponse sous 24h
                  </h4>
                  <p className="text-gray-600">
                    Notre équipe s'engage à vous répondre dans un délai maximum
                    de 24 heures ouvrées.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-yellow-100 rounded-full p-2 mr-4">
                  <svg
                    className="w-6 h-6 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">
                    Email de confirmation
                  </h4>
                  <p className="text-gray-600">
                    Vous recevrez un email récapitulatif avec les détails de
                    votre demande.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-yellow-100 rounded-full p-2 mr-4">
                  <svg
                    className="w-6 h-6 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Service client</h4>
                  <p className="text-gray-600">
                    Notre service client reste à votre disposition pour toute
                    question supplémentaire.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThankYou;
