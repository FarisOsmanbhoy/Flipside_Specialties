import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Hero from '../components/Hero';
import CompanySummary from '../components/CompanySummary';
import ManufacturerShowcase from '../components/ManufacturerShowcase';
import BlogSummary from '../components/BlogSummary';
import ContactSection from '../components/ContactSection';
import CTASection from '../components/CTASection';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="w-full">
      <Hero />
      <div ref={ref} className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <CompanySummary />
        <ManufacturerShowcase
        />
        <BlogSummary />
        <ContactSection />
        <CTASection />
      </div>
    </div>
  );
};

export default HomePage