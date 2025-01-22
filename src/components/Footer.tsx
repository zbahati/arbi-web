import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ARBI</h3>
            <p className="text-gray-400">
              Africa Restoring Bridges Initiative - Working towards healed, reconciled, and prosperous communities.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                Avenue Jacarandas, 32 D, Q. Les Volcans, Goma, DRC
              </p>
              <p className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                +243-971 944 496
              </p>
              <p className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                arbi.drc@gmail.com
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Our Values</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Dedication with excellence</li>
              <li>Humanity and compassion</li>
              <li>Equality</li>
              <li>Unity in diversity</li>
              <li>Transparency</li>
              <li>Stewardship</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Africa Restoring Bridges Initiative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;