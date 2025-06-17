import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Button from '../components/Button';

const Division8Page: React.FC = () => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Placeholder manufacturer data
  const manufacturers = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Manufacturer ${i + 1}`,
    logo: `https://via.placeholder.com/200x100?text=Logo+${i + 1}`,
  }));

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
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {manufacturers.map((manufacturer) => (
              <div
                key={manufacturer.id}
                className={`bg-white p-6 rounded-lg border border-gray-200 
                  hover:border-orange-500 hover:shadow-lg hover:scale-105 
                  transition-all duration-300 cursor-pointer
                  transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${(manufacturer.id % 8) * 100}ms` }}
              >
                <img
                  src={manufacturer.logo}
                  alt={manufacturer.name}
                  className="w-full h-auto object-contain mb-4"
                />
                <h3 className="text-center text-slate-700 font-medium">
                  {manufacturer.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

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