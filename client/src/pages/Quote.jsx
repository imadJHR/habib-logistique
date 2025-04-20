import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Quote = () => {
  const serviceTypes = [
    "Transport National",
    "Transport International",
    "Stockage",
    "Livraison Express",
    "Dédouanement",
    "Autre",
  ];

  const [formData, setFormData] = useState({
    serviceType: "",
    weight: "",
    length: "",
    width: "",
    height: "",
    fromAddress: "",
    toAddress: "",
    additionalInfo: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.serviceType)
      newErrors.serviceType = "Veuillez sélectionner un service";
    if (!formData.weight || formData.weight <= 0)
      newErrors.weight = "Poids invalide";
    if (!formData.length || formData.length <= 0)
      newErrors.length = "Longueur invalide";
    if (!formData.width || formData.width <= 0)
      newErrors.width = "Largeur invalide";
    if (!formData.height || formData.height <= 0)
      newErrors.height = "Hauteur invalide";
    if (!formData.fromAddress) newErrors.fromAddress = "Adresse requise";
    if (!formData.toAddress) newErrors.toAddress = "Adresse requise";
    if (!formData.firstName) newErrors.firstName = "Nom requis";
    if (!formData.lastName) newErrors.lastName = "Prénom requis";
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Email invalide";
    if (!formData.phone || !/^[0-9\s+-]+$/.test(formData.phone))
      newErrors.phone = "Téléphone invalide";
    if (!formData.termsAccepted)
      newErrors.termsAccepted = "Vous devez accepter les conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const quoteData = {
        serviceType: formData.serviceType,
        weight: parseFloat(formData.weight),
        dimensions: {
          length: parseFloat(formData.length),
          width: parseFloat(formData.width),
          height: parseFloat(formData.height),
        },
        fromAddress: formData.fromAddress,
        toAddress: formData.toAddress,
        additionalInfo: formData.additionalInfo,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        termsAccepted: formData.termsAccepted,
      };

      const response = await axios.post(
        "http://localhost:5000/api/quotes",
        quoteData
      );

      if (response.status === 201) {
        navigate("/thank-you", {
          state: {
            message: "Votre demande de devis a été soumise avec succès!",
            contactEmail: formData.email,
          },
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError(
        error.response?.data?.message ||
          "Une erreur est survenue lors de la soumission"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <section className="bg-yellow-600 text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Demander un devis</h1>
          <p className="text-xl">
            Obtenez une estimation rapide et personnalisée
          </p>
        </div>
      </section>

      <section className="mb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl text-yellow-400 font-bold mb-6">
              Formulaire de devis
            </h2>

            {submitError && (
              <div className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
                <p>{submitError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Type de service*
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-yellow-500 focus:border-yellow-500 ${
                    errors.serviceType ? "border-red-500" : "border-gray-300"
                  }`}
                  required
                >
                  <option value="">Sélectionnez un service</option>
                  {serviceTypes.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.serviceType && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.serviceType}
                  </p>
                )}
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Informations sur le colis
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Poids (kg)*
                    </label>
                    <input
                      type="number"
                      name="weight"
                      value={formData.weight}
                      onChange={handleChange}
                      step="0.1"
                      min="0.1"
                      className={`w-full px-4 py-2 border rounded-lg ${
                        errors.weight ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="0.5"
                      required
                    />
                    {errors.weight && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.weight}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Dimensions (L x l x H en cm)*
                    </label>
                    <div className="flex space-x-2">
                      <input
                        type="number"
                        name="length"
                        value={formData.length}
                        onChange={handleChange}
                        className={`w-1/3 px-4 py-2 border rounded-lg ${
                          errors.length ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Longueur"
                        min="1"
                        required
                      />
                      <input
                        type="number"
                        name="width"
                        value={formData.width}
                        onChange={handleChange}
                        className={`w-1/3 px-4 py-2 border rounded-lg ${
                          errors.width ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Largeur"
                        min="1"
                        required
                      />
                      <input
                        type="number"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                        className={`w-1/3 px-4 py-2 border rounded-lg ${
                          errors.height ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Hauteur"
                        min="1"
                        required
                      />
                    </div>
                    {(errors.length || errors.width || errors.height) && (
                      <div className="mt-1 text-sm text-red-500">
                        {errors.length || errors.width || errors.height}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Destination</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Adresse de départ*
                    </label>
                    <input
                      type="text"
                      name="fromAddress"
                      value={formData.fromAddress}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg ${
                        errors.fromAddress
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="Adresse complète"
                      required
                    />
                    {errors.fromAddress && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.fromAddress}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Adresse de livraison*
                    </label>
                    <input
                      type="text"
                      name="toAddress"
                      value={formData.toAddress}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg ${
                        errors.toAddress ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Adresse complète"
                      required
                    />
                    {errors.toAddress && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.toAddress}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Informations supplémentaires
                </label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows="4"
                  placeholder="Délai souhaité, nature des marchandises, instructions spéciales..."
                ></textarea>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Vos coordonnées</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Nom*
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg ${
                        errors.lastName ? "border-red-500" : "border-gray-300"
                      }`}
                      required
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Prénom*
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg ${
                        errors.firstName ? "border-red-500" : "border-gray-300"
                      }`}
                      required
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      required
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Téléphone*
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                      required
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  className="mt-1 mr-2"
                  required
                />
                <label htmlFor="terms" className="text-gray-700">
                  J'accepte les conditions générales de service*
                </label>
              </div>
              {errors.termsAccepted && (
                <p className="text-sm text-red-500">{errors.termsAccepted}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-yellow-600 text-white py-3 rounded-lg font-semibold hover:bg-yellow-700 transition ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting
                  ? "Envoi en cours..."
                  : "Envoyer la demande de devis"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;
