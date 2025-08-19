import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoCarousel from './LogoCarousel';

interface ManufacturerShowcaseProps {
  onDivision8Click: () => void;
  onDivision10Click: () => void;
}

const ManufacturerShowcase: React.FC<ManufacturerShowcaseProps> = ({
  onDivision8Click,
  onDivision10Click
}) => {
  const navigate = useNavigate();

  const handleDivisionClick = (division: '8' | '10') => {
    window.scrollTo(0, 0);
    navigate(division === '8' ? '/division8' : '/division10');
  };

  return (
    <section id="manufacturer-showcase" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Division 8 */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 uppercase tracking-wide text-slate-900">
            Division 8 Partners
          </h3>
          <LogoCarousel division="Division 8" />
        </div>

        {/* Division 10 */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 uppercase tracking-wide text-slate-900">
            Division 10 Partners
          </h3>
          <LogoCarousel division="Division 10" />
        </div>
      </div>
    </section>
  );
};

export default ManufacturerShowcase;