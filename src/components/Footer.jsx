import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-carbonYellow mb-4">
              GERMAN · AUTOBAHN
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience the pinnacle of German automotive engineering. Luxury,
              performance, and precision in every drive.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-carbonYellow">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#home" className="hover:text-carbonYellow transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#brands" className="hover:text-carbonYellow transition">
                  Brands
                </a>
              </li>
              <li>
                <a href="#models" className="hover:text-carbonYellow transition">
                  Models
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-carbonYellow transition">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-carbonYellow transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-carbonYellow">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Car Sales</li>
              <li>Test Drives</li>
              <li>Maintenance</li>
              <li>Financing</li>
              <li>Trade-In</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-carbonYellow">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get updates on new arrivals and special offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-zinc-900 border border-gray-700 rounded-l-lg px-4 py-2 text-sm focus:outline-none focus:border-carbonYellow"
              />
              <button className="bg-carbonYellow text-black px-4 py-2 rounded-r-lg font-bold hover:bg-yellow-500 transition">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© {currentYear} German Autobahn. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-carbonYellow transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-carbonYellow transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-carbonYellow transition">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}