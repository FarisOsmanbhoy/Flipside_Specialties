import React from 'react';
import { Phone } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">
          Need a Quote or Have Questions?
        </h2>
        <a 
          href="tel:832.844.2521" 
          className="inline-flex items-center gap-2 text-xl font-medium text-slate-900 hover:text-brand-500 transition-colors"
        >
          <Phone className="h-5 w-5" />
          832.844.2521
        </a>
      </div>
    </section>
  );
};

export default CTASection;