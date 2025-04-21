import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FiTruck } from "react-icons/fi";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-yellow-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-yellow-200 underline transition">
            <FiTruck />
          </Link>
        </div>
        {/* for desktop */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-yellow-200 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-200 transition">
            About
          </Link>

          <Link to="/services" className="hover:text-yellow-200 transition">
            services
          </Link>
          <Link
            to="/demander-un-devis"
            className="hover:text-yellow-200   transition"
          >
            Demander-un-devis
          </Link>
        </div>
        {/*user button */}
        <div className="flex space-x-4 items-center">
          {user ? (
            <>
              <span className="hidden md:block mr-4">
                Welcome, {user.username}
              </span>
              <button
                onClick={handleLogout}
                className="bg-white hidden lg:flex text-yellow-600 px-4 py-2 rounded hover:bg-yellow-100 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-white hidden md:flex text-yellow-600 px-4 py-2 rounded hover:bg-yellow-100 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-yellow-800 hidden md:flex text-white px-4 py-2 rounded hover:bg-yellow-700 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/*small devices */}
      {isMenuOpen && (
        <div className="md:hidden rounded-xl shadow-2xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              onClick={handleLinkClick}
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-200 transition"
            >
              Home
            </Link>
            <Link
              onClick={handleLinkClick}
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-200 transition"
            >
              About
            </Link>
            <Link
              onClick={handleLinkClick}
              to="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-200 transition"
            >
              services
            </Link>
            <Link
              onClick={handleLinkClick}
              to="/demander-un-devis"
              className="block  px-3 py-2 rounded-md bg-orange-500 border text-base font-medium text-white hover:text-yellow-200 transition"
            >
              demander un devis
            </Link>
            {!user && (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 rounded-md text-base font-medium text-yellow-400 bg-white hover:bg-yellow-100 transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white bg-yellow-800 hover:bg-yellow-700 transition"
                >
                  Register
                </Link>
              </>
            )}
            {user && (
              <button
                onClick={handleLogout}
                className="block w-full px-3 py-2 rounded-md text-base font-medium text-yellow-600 bg-white hover:bg-yellow-100 transition"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
