import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold mb-4">Zabah<span className="text-zabah-500">Soft</span></h2>
            <p className="text-gray-400 max-w-sm">
              Empowering businesses with cutting-edge software solutions. Secure, reliable, and always here to support your growth.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-gray-200">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">System Status</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-200">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Billing Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} ZabahSoft Inc. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <span>Secure SSL Encryption</span>
             <span>PCI DSS Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};