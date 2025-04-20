// src/components/Footer.jsx
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  const services = [
    { name: "Transport National", link: "/services#national" },
    { name: "Transport International", link: "/services#international" },
    { name: "Logistique et Stockage", link: "/services#logistics" },
    { name: "Livraison Express", link: "/services#express" },
    { name: "Dédouanement", link: "/services#customs" },
  ];

  const quickLinks = [
    { name: "Accueil", link: "/" },
    { name: "À propos", link: "/about" },
    { name: "Nos Services", link: "/services" },
    { name: "Demander un devis", link: "/quote" },
  ];

  return (
    <footer className="bg-yellow-500 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl text-black font-bold mb-4">TransportLog</h3>
            <p className="mb-4">
              Votre partenaire logistique fiable pour le transport national et
              international.
            </p>
            <div className="flex space-x-4">
              <a href="#" className=" hover:text-white transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className=" hover:text-white transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className=" hover:text-white transition">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className=" hover:text-white transition">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl text-black font-bold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to={service.link} className=" transition">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl text-black font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.link} className=" transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl text-black font-bold mb-4">
              Contactez-nous
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-black" />
                <span> Casablanca, maroc</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-black" />
                <span>+212 677-299764</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-black" />
                <span>contact@habibtransportlog.ma</span>
              </li>
              <li className="flex items-start">
                <FaClock className="mt-1 mr-3 text-black" />
                <div>
                  <p>Lun-Ven: 8h-19h</p>
                  <p>Sam: 9h-13h</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 my-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className=" mb-4 md:mb-0">
            © {new Date().getFullYear()} TransportLog. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
