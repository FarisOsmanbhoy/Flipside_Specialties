import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import LogoGrid from '../components/LogoGrid';

const Division8Page: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Division 8 – Doors, Frames & Hardware
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            We specialize in high-performance door systems, architectural frames, and 
            commercial-grade hardware — trusted by contractors for durability, code 
            compliance, and aesthetics. Our Division 8 manufacturers offer premium 
            solutions for schools, hospitals, offices, and government buildings.
          </p>
        </div>
      </section>

      {/* Manufacturers Grid */}
      <LogoGrid bucket="Division 8" title="Division 8 Partners" />

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Want to spec a brand or get a quote?
          </h2>
          <Button
            size="lg"
            onClick={() => navigate('/#contact')}
            className="animate-fadeIn"
          >
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Division8Page;