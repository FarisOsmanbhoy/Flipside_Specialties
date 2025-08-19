import React, { useState, useEffect } from 'react';
import { listBucketImages, altFromFilename } from '../lib/listBucket';

interface LogoGridProps {
  bucket: string;
  title: string;
}

const LogoGrid: React.FC<LogoGridProps> = ({ bucket, title }) => {
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
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">
            {title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="bg-gray-200 animate-pulse p-6 rounded-lg border border-gray-200 h-24"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">{title}</h2>
          <p className="text-red-600">Error loading logos: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">
          {title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {logos.map((url, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg border border-gray-200 
                hover:border-orange-500 hover:shadow-lg hover:scale-105 
                transition-all duration-300 cursor-pointer h-24 flex items-center justify-center"
            >
              <img
                src={url}
                alt={altFromFilename(url)}
                className="max-w-full max-h-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoGrid;