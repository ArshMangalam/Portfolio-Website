import React from 'react';
import { Link } from 'react-scroll';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link
              to="header"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-2xl font-bold text-white cursor-pointer"
            >
              John<span className="text-purple-500">Doe</span>
            </Link>
            <p className="mt-4 text-gray-400">
              A passionate developer focused on creating impactful digital experiences 
              through clean code and thoughtful design.
            </p>
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://github.com/johndoe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/johndoe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/johndoe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Skills', 'Certificates', 'Achievements', 'Education', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-400 hover:text-purple-500 transition-colors cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>San Francisco, CA</li>
              <li>john.doe@example.com</li>
              <li>+1 (123) 456-7890</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            © {currentYear} John Doe. All rights reserved. Made with 
            <Heart className="h-4 w-4 text-red-500 mx-1" fill="currentColor" /> 
            and passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;