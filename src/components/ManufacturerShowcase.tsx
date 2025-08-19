import React from 'react';
import LogoCarousel from './LogoCarousel';

const ManufacturerShowcase: React.FC = () => {

  return (
    <section id="manufacturer-showcase" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LogoCarousel bucket="Division 8" heading="Division 8 Partners" />

        <LogoCarousel bucket="Division 10" heading="Division 10 Partners" />
      </div>
    </section>
  );
};

export default ManufacturerShowcase;