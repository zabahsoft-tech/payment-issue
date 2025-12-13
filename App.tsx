import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatusChecker } from './components/StatusChecker';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { AIChatAssistant } from './components/AIChatAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900 scroll-smooth">
      <Header />
      <main className="flex-grow">
        <Hero />
        <StatusChecker />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <AIChatAssistant />
    </div>
  );
};

export default App;