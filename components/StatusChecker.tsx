import React, { useState } from 'react';
import { Search, CheckCircle, XCircle, Loader2, FileText } from 'lucide-react';
import { InvoiceStatus } from '../types';

export const StatusChecker: React.FC = () => {
  const [invoiceId, setInvoiceId] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<InvoiceStatus | null>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!invoiceId) return;

    setLoading(true);
    setResult(null);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Mock logic based on input length to show different states for demo
      if (invoiceId.length % 2 === 0) {
        setResult({
          id: invoiceId,
          amount: 299.00,
          date: new Date().toLocaleDateString(),
          status: 'failed',
          message: 'Card Issuer Declined Transaction (Do Not Honor)'
        });
      } else {
        setResult({
          id: invoiceId,
          amount: 299.00,
          date: new Date().toLocaleDateString(),
          status: 'paid',
          message: 'Payment processed successfully.'
        });
      }
    }, 1500);
  };

  return (
    <section id="status" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-50 rounded-lg text-zabah-600">
                    <FileText size={24} />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Check Invoice Status</h2>
                    <p className="text-gray-500">Enter your Invoice ID to see real-time status details.</p>
                </div>
            </div>

            <form onSubmit={handleCheck} className="flex gap-4 mb-8">
              <input
                type="text"
                value={invoiceId}
                onChange={(e) => setInvoiceId(e.target.value)}
                placeholder="e.g. INV-2023-001"
                className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-zabah-500 focus:border-zabah-500 outline-none transition-all"
              />
              <button
                type="submit"
                disabled={loading || !invoiceId}
                className="bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 font-medium"
              >
                {loading ? <Loader2 className="animate-spin" size={20} /> : <Search size={20} />}
                Check
              </button>
            </form>

            {result && (
              <div className={`rounded-xl p-6 border ${result.status === 'paid' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'} animate-fade-in-up`}>
                <div className="flex items-start gap-4">
                  <div className={`mt-1 ${result.status === 'paid' ? 'text-green-600' : 'text-red-600'}`}>
                    {result.status === 'paid' ? <CheckCircle size={24} /> : <XCircle size={24} />}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                        <h3 className={`font-bold text-lg ${result.status === 'paid' ? 'text-green-900' : 'text-red-900'}`}>
                        {result.status === 'paid' ? 'Payment Successful' : 'Payment Failed'}
                        </h3>
                        <span className="text-sm font-mono text-gray-500">#{result.id}</span>
                    </div>
                    
                    <p className={`mt-1 ${result.status === 'paid' ? 'text-green-700' : 'text-red-700'}`}>
                      {result.message}
                    </p>
                    
                    <div className="mt-4 pt-4 border-t border-gray-200/50 flex justify-between text-sm">
                        <span className="text-gray-500">Amount: <strong className="text-gray-900">${result.amount.toFixed(2)}</strong></span>
                        <span className="text-gray-500">Date: <strong className="text-gray-900">{result.date}</strong></span>
                    </div>

                    {result.status === 'failed' && (
                        <button className="mt-4 w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
                            Update Payment Method
                        </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};