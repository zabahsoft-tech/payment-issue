import React from 'react';
import { CreditCard, AlertCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zabah-50 to-white pt-16 pb-24 lg:pt-32 lg:pb-32">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100 blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-purple-100 blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-700 text-sm font-medium mb-8 animate-fade-in-down">
            <AlertCircle size={16} />
            <span>Resolving payment issues helps ensure uninterrupted service</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
          Let's get your account <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zabah-600 to-purple-600">
            back on track.
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
          We noticed a payment issue with your ZabahSoft subscription. Don't worry—most issues are resolved in under 2 minutes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
                href="#status"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-zabah-600 rounded-lg hover:bg-zabah-700 transition-all shadow-lg shadow-zabah-200 hover:shadow-xl hover:-translate-y-0.5"
            >
                <CreditCard className="mr-2" size={20} />
                Verify Payment Status
            </a>
            <a 
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-all hover:border-gray-300"
            >
                Contact Billing Team
            </a>
        </div>
      </div>
    </section>
  );
};