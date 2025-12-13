import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, send data to backend here
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Still need help?</h2>
            <p className="text-lg text-gray-600 mb-10">
              Our billing support team is available 24/7 to ensure your issues are resolved quickly.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-zabah-600 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email Us</h3>
                  <p className="text-gray-600">info@zabahsoft.com</p>
                  <p className="text-sm text-gray-500 mt-1">Response time: &lt; 2 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-50 text-green-600 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">WhatsApp Support</h3>
                  <p className="text-gray-600">0792929814</p>
                  <p className="text-sm text-gray-500 mt-1">Available for quick chat</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Our Locations</h3>
                  <div className="text-gray-600 text-sm space-y-2 mt-1">
                    <p>
                        <strong>Main Office:</strong><br/>
                        Dawoodzai Business Center B-021<br/>
                        Kabul, Afghanistan
                    </p>
                    <p>
                        <strong>Branch Office:</strong><br/>
                        Naser Safi Medical Center 401<br/>
                        Baharestan, Karte Parwan<br/>
                        Kabul, Afghanistan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-lg">
             {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  required
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-zabah-500 focus:border-zabah-500 outline-none bg-white"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  required
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-zabah-500 focus:border-zabah-500 outline-none bg-white"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Issue Description</label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-zabah-500 focus:border-zabah-500 outline-none bg-white resize-none"
                  placeholder="Please describe the error message you are seeing..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200"
              >
                <Send size={18} />
                Submit Ticket
              </button>
            </form>
             ) : (
                 <div className="h-full flex flex-col items-center justify-center text-center p-6">
                     <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                         <Send size={32} />
                     </div>
                     <h3 className="text-2xl font-bold text-gray-900 mb-2">Ticket Submitted!</h3>
                     <p className="text-gray-600 mb-6">We have received your inquiry and will get back to you at <strong>{formState.email}</strong> shortly.</p>
                     <button onClick={() => setSubmitted(false)} className="text-zabah-600 font-medium hover:underline">
                         Send another message
                     </button>
                 </div>
             )}
          </div>
        </div>
      </div>
    </section>
  );
};