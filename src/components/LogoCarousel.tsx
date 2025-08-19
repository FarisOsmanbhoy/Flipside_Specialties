import React, { useState, useEffect } from 'react';
import { listBucketImages } from '../lib/listBucket';

interface LogoCarouselProps {
  division: string;
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({ division }) => {
  const [urls, setUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        setLoading(true);
        // Use single bucket with division-specific subfolders
        const subfolder = division === 'Division 8' ? 'division8' : 'division10';
        const logoUrls = await listBucketImages('company-logos', subfolder);
        
        setUrls(logoUrls);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load logos');
      } finally {
        setLoading(false);
      }
    };

    fetchLogos();
  }, [division]);

  if (loading) {
    return (
      <div className="overflow-hidden mx-12">
        <div className="flex gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
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

  return (
    <div className="overflow-hidden mx-12">
      <div className="flex transition-transform duration-300 ease-out gap-4">
        {urls.map((url, i) => (
          <div
            key={i}
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
        {urls.length === 0 && (
          <div className="flex-shrink-0 w-48 h-24 bg-white rounded-lg border border-gray-200 
                         flex items-center justify-center">
            <p className="text-gray-500 text-sm">No logos yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LogoCarousel;