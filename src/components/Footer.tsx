import { Mail, MessageCircle, Phone } from 'lucide-react'; // make sure lucide-react is installed
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

export const Footer = ({ handleLinkClick, setShowMap }) => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (path) => {
    navigate(path);
    scrollToTop();
  };

  return (
    <footer className="py-16 px-4 bg-gray-900 border-t border-gray-700">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Column 1 - Logo and Description */}
          <div className="space-y-4">
            <div className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                INLIGHN TECH
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              At INLIGHN TECH, we believe that the future of education lies in bridging the gap between academic learning and industry needs.
            </p>
          </div>

          {/* Column 2 - Menu */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Menu</h4>
            <div className="space-y-2 text-gray-400">
              <button onClick={() => handleLinkClick('home')} className="block hover:text-cyan-400 text-left">
                Home
              </button>
              <button onClick={() => handleLinkClick('about')} className="block hover:text-cyan-400 text-left">
                About Us
              </button>
              <button onClick={() => handleLinkClick('programs')} className="block hover:text-cyan-400 text-left">
                Programs
              </button>
              <button onClick={() => handleLinkClick('contact')} className="block hover:text-cyan-400 text-left">
                Contact Us
              </button>
              <a href="#login" className="block hover:text-cyan-400">Login To Portal</a>
            </div>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <div className="space-y-2 text-gray-400">
              <button onClick={() => handleNavigation('/privacy-policy')} className="block hover:text-cyan-400 text-left">
                Privacy Policy
              </button>
              <button onClick={() => handleNavigation('/terms-conditions')} className="block hover:text-cyan-400 text-left">
                Terms & Conditions
              </button>
              <button onClick={() => handleNavigation('/disclaimer')} className="block hover:text-cyan-400 text-left">
                Disclaimer
              </button>
              <button onClick={() => handleNavigation('/faq')} className="block hover:text-cyan-400 text-left">
                FAQ's
              </button>
            </div>
          </div>

          {/* Column 4 - Social + Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Follow Us</h4>
            <div className="space-y-4">
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-cyan-400">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">f</span>
                  </div>
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">in</span>
                  </div>
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">ig</span>
                  </div>
                </a>
                <a href="https://wa.me/919368842663" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle size={16} className="text-white" />
                  </div>
                </a>
              </div>

              <div className="space-y-3 text-sm">
                <div className="text-white font-semibold">Corporate Office</div>
                <div
                  className="text-gray-400 leading-relaxed cursor-pointer hover:text-cyan-400"
                  onClick={() => setShowMap(true)}
                >
                  Office No: VO-301, WeWork Prestige Central, Ground Floor, 36, Infantry Rd, Bengaluru, KA 560001
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Phone size={14} />
                  <a href="tel:+919368842663" className="hover:text-cyan-400">+91 9368842663</a>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail size={14} />
                  <a href="mailto:info@inlighntech.com" className="hover:text-cyan-400">info@inlighntech.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} INLIGHN TECH. All rights reserved. Empowering the next generation of tech professionals.</p>
        </div>
      </div>
    </footer>
  );
};
