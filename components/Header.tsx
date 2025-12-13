import React from 'react';
import { ShieldCheck, Lock, Menu } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-zabah-600 rounded-lg flex items-center justify-center text-white">
              <ShieldCheck size={20} />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              Zabah<span className="text-zabah-600">Soft</span>
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
            <a href="#status" className="hover:text-zabah-600 transition-colors">Check Status</a>
            <a href="#faq" className="hover:text-zabah-600 transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-zabah-600 transition-colors">Contact Support</a>
          </nav>

          <div className="flex items-center gap-3">
             <div className="hidden sm:flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-200">
                <Lock size={12} />
                <span>Secure Portal</span>
             </div>
             <button className="md:hidden p-2 text-gray-500">
                <Menu size={24} />
             </button>
          </div>
        </div>
      </div>
    </header>
  );
};