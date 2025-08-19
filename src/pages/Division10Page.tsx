import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import LogoGrid from '../components/LogoGrid';

const Division10Page: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Division 10 – Specialties & Accessories
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            From restroom partitions and accessories to specialty fixtures and fire extinguishers, 
            we work with leading Division 10 manufacturers to supply secure, code-compliant products. 
            Our solutions are ideal for high-traffic commercial and public spaces.
          </p>
        </div>
      </section>

      {/* Manufacturers Grid */}
      <LogoGrid bucket="Division 10" title="Division 10 Partners" />

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Need submittals or product guidance?
          </h2>
          <Button
            size="lg"
            onClick={() => navigate('/#contact')}
            className="animate-fadeIn"
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Division10Page;