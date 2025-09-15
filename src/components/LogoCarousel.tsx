import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { listBucketImages } from '../lib/listBucket';

interface LogoCarouselProps {
  division: string;
  onLogoClick?: () => void;
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({ division, onLogoClick }) => {
  const [urls, setUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Number of logos to show at once
  const logosPerView = 4;
  const logoWidth = 192; // w-48 = 192px
  const gapWidth = 16; // gap-4 = 16px
  const slideWidth = logoWidth + gapWidth;

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        setLoading(true);
        // Use single bucket with division-specific subfolders
        const subfolder = division === 'Division 8' ? 'company-logos/division8' : 'company-logos/division10';
        const logoUrls = await listBucketImages('company-logos', subfolder);
        
        setUrls(logoUrls);
        setCurrentSlide(0); // Reset slide when division changes
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load logos');
      } finally {
        setLoading(false);
      }
    };

    fetchLogos();
  }, [division]);

  const maxSlides = Math.max(0, urls.length - logosPerView);
  const canGoPrev = currentSlide > 0;
  const canGoNext = currentSlide < maxSlides;

  const handlePrev = () => {
    if (canGoPrev) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (canGoNext) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  if (loading) {
    return (
      <div className="relative overflow-hidden mx-12">
        <div className="flex gap-4">
          {Array.from({ length: logosPerView }).map((_, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-48 h-24 bg-white rounded-lg border border-gray-200 animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="overflow-hidden mx-12">
        <div className="text-center py-8">
          <p className="text-red-600">Error loading logos: {error}</p>
        </div>
      </div>
    );
  }

  if (urls.length === 0) {
    return (
      <div className="overflow-hidden mx-12">
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-48 h-24 bg-white rounded-lg border border-gray-200 
                         flex items-center justify-center">
            <p className="text-gray-500 text-sm">No logos yet</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden mx-12">
      {/* Left Navigation Button */}
      {canGoPrev && (
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white 
                     rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Previous logos"
        >
          <ChevronLeft className="h-6 w-6 text-gray-600" />
        </button>
      )}

      {/* Right Navigation Button */}
      {canGoNext && (
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white 
                     rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Next logos"
        >
          <ChevronRight className="h-6 w-6 text-gray-600" />
        </button>
      )}

      {/* Carousel Content */}
      <div className="overflow-hidden">
        <div 
          className="flex gap-4 transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(-${currentSlide * slideWidth}px)`
          }}
        >
          {urls.map((url, i) => (
            <div
              key={i}
              onClick={onLogoClick}
              className="flex-shrink-0 w-48 h-24 bg-white rounded-lg border border-gray-200 
                         hover:border-orange-500 hover:shadow-lg transition-all duration-300 cursor-pointer
                         flex items-center justify-center p-4"
            >
              <img
                src={url}
                alt="Partner logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Slide Indicators */}
      {maxSlides > 0 && (
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: maxSlides + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                i === currentSlide 
                  ? 'bg-orange-500 w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default LogoCarousel;