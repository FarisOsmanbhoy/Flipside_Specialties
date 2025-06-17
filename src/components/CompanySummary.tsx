import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const CompanySummary: React.FC = () => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="bg-gray-50 py-24">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className={`w-full md:w-1/2 space-y-6 transition-all duration-1000 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-slate-900">
              Who We Are
            </h2>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              Flipside Specialties is a fast-moving, woman-owned construction supplier 
              based in Houston. We specialize in Division 8 and 10 architectural 
              products — from doors and frames to partitions and specialty fixtures — 
              built on trust, speed, and precision.
            </p>
            
            <p className="text-lg italic text-slate-500">
              We don't just fill the gap — we close it cleanly, on time, every time.
            </p>
            
            <Button
              onClick={() => navigate('/contact')}
              size="lg"
              className="mt-8"
            >
              Get in Touch
            </Button>
          </div>

          {/* Image */}
          <div className={`w-full md:w-1/2 transition-all duration-1000 delay-300 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
              alt="Team planning"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySummary;