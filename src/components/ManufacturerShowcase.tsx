import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ManufacturerShowcaseProps {
  onDivision8Click: () => void;
  onDivision10Click: () => void;
}

const ManufacturerShowcase: React.FC<ManufacturerShowcaseProps> = ({
  onDivision8Click,
  onDivision10Click
}) => {
  const [div8Scroll, setDiv8Scroll] = useState(0);
  const [div10Scroll, setDiv10Scroll] = useState(0);
  const navigate = useNavigate();

  const scrollAmount = 250;
  const maxScroll = (20 - 5) * 200; // 20 items total, 5 visible, 200px width each

  const handleDivisionClick = (division: '8' | '10') => {
    window.scrollTo(0, 0);
    navigate(division === '8' ? '/division8' : '/division10');
  };

  const createPlaceholders = (count: number, division: '8' | '10') => {
    return Array.from({ length: count }, (_, i) => (
      <div
        key={i}
        onClick={() => handleDivisionClick(division)}
        className="flex-shrink-0 w-48 h-24 mx-2 bg-white rounded-lg border border-gray-200 
                   hover:border-orange-500 hover:shadow-lg transition-all duration-300 cursor-pointer
                   flex items-center justify-center"
      >
        <div className="text-gray-400 font-medium">Logo {i + 1}</div>
      </div>
    ));
  };

  return (
    <section id="manufacturer-showcase" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Division 8 */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 uppercase tracking-wide text-slate-900">
            Division 8 Partners
          </h3>
          <div className="relative">
            <button
              onClick={() => setDiv8Scroll(Math.max(0, div8Scroll - scrollAmount))}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg
                         hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={div8Scroll <= 0}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="overflow-hidden mx-12">
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${div8Scroll}px)` }}
              >
                {createPlaceholders(20, '8')}
              </div>
            </div>
            <button
              onClick={() => setDiv8Scroll(Math.min(maxScroll, div8Scroll + scrollAmount))}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg
                         hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={div8Scroll >= maxScroll}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Division 10 */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 uppercase tracking-wide text-slate-900">
            Division 10 Partners
          </h3>
          <div className="relative">
            <button
              onClick={() => setDiv10Scroll(Math.max(0, div10Scroll - scrollAmount))}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg
                         hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={div10Scroll <= 0}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="overflow-hidden mx-12">
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${div10Scroll}px)` }}
              >
                {createPlaceholders(20, '10')}
              </div>
            </div>
            <button
              onClick={() => setDiv10Scroll(Math.min(maxScroll, div10Scroll + scrollAmount))}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg
                         hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={div10Scroll >= maxScroll}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturerShowcase;