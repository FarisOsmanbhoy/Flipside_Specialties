import React, { useState, useEffect } from 'react';
import { listBucketImages, altFromFilename } from '../lib/listBucket';

interface LogoCarouselProps {
  bucket: string;
  heading: string;
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({ bucket, heading }) => {
  const [logos, setLogos] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        setLoading(true);
        setError(null);
        const urls = await listBucketImages(bucket);
        setLogos(urls);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load logos');
      } finally {
        setLoading(false);
      }
    };

    fetchLogos();
  }, [bucket]);

  if (loading) {
    return (
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-center mb-8 uppercase tracking-wide text-slate-900">
          {heading}
        </h3>
        <div className="overflow-hidden mx-12">
          <div className="flex gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-48 h-24 bg-gray-200 animate-pulse rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-center mb-8 uppercase tracking-wide text-slate-900">
          {heading}
        </h3>
        <div className="text-center text-red-600">
          Error loading logos: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-center mb-8 uppercase tracking-wide text-slate-900">
        {heading}
      </h3>
      <div className="overflow-hidden mx-12">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory py-2 scrollbar-hide">
          {logos.map((url, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-48 h-24 mx-2 bg-white rounded-lg border border-gray-200 
                hover:border-orange-500 hover:shadow-lg transition-all duration-300 cursor-pointer
                flex items-center justify-center snap-start"
            >
              <img
                src={url}
                alt={altFromFilename(url)}
                className="max-w-full max-h-full object-contain p-2"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;