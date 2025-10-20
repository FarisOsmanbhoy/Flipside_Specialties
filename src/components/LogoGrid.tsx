import React, { useState, useEffect } from 'react';
import { listBucketImages } from '../lib/listBucket';

interface LogoGridProps {
  division: string;
}

const LogoGrid: React.FC<LogoGridProps> = ({ division }) => {
  const [urls, setUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        setLoading(true);
        const subfolder = division === 'Division 8' ? 'company-logos/division8' : 'company-logos/division10';
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="bg-white p-6 rounded-lg border border-gray-200 animate-pulse">
            <div className="w-full h-24 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">Error loading logos: {error}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {urls.map((url, i) => (
        <div
          key={i}
          className="bg-white p-6 rounded-lg border border-gray-200
                     hover:border-brand-500 hover:shadow-lg hover:scale-105
                     transition-all duration-300 cursor-pointer
                     flex items-center justify-center"
        >
          <img
            src={url}
            alt="Partner logo"
            className="w-full h-24 object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              console.error('Image failed to load:', url, e);
              console.log('Image src:', target.src);
              target.style.display = 'none';
            }}
          />
        </div>
      ))}
      {urls.length === 0 && (
        <div className="col-span-full text-center py-12">
          <p className="text-gray-500">No logos available yet</p>
        </div>
      )}
    </div>
  );
};

export default LogoGrid;