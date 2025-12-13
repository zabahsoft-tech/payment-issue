import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FaqItem } from '../types';

const faqData: FaqItem[] = [
  {
    question: "Why was my payment declined?",
    answer: "Common reasons include expired credit cards, insufficient funds, or your bank flagging the transaction as unusual. We recommend contacting your bank to authorize 'ZabahSoft' transactions."
  },
  {
    question: "How do I update my payment method?",
    answer: "Log in to your client dashboard, navigate to 'Billing & Invoices', and click 'Manage Payment Methods'. You can add a new card or link a bank account there."
  },
  {
    question: "Will my service be interrupted?",
    answer: "We provide a 7-day grace period for failed payments. If the issue is resolved within this window, your service will remain active without interruption."
  },
  {
    question: "Can I get an invoice copy?",
    answer: "Yes, all invoices are sent to your registered email automatically. You can also download them from the 'History' tab in your billing dashboard."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-purple-100 text-purple-600 rounded-xl mb-4">
                <HelpCircle size={24} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-gray-600">Quick answers to common billing inquiries.</p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all hover:border-zabah-200 hover:shadow-md"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
              >
                <span className="font-semibold text-gray-800">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-zabah-500" size={20} />
                ) : (
                  <ChevronDown className="text-gray-400" size={20} />
                )}
              </button>
              <div
                className={`px-6 text-gray-600 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};