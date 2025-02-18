import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2B2B2B] text-white py-10">
      {/* Wrapper container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer content in columns on large screens, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & description */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold mb-2">Infirix</h2>
            <p className="text-sm mb-4">
              is a general contractor company based in Jakarta. More than 25
              years of experience in building and carving out Indonesia's
              development.
            </p>
            {/* Social icons */}
            <div className="flex space-x-3">
              {/* Replace the text placeholders with actual icons (FontAwesome, Heroicons, etc.) */}
              <a
                href="#"
                className="hover:text-gray-300 transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M..." />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M..." />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors"
                aria-label="Google"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M..." />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M..." />
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Infirix</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  Term
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">More</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom area (optional) */}
        <div className="mt-10 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Infirix All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
