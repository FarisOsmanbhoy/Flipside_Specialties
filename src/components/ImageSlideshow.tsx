import React, { useState, useEffect } from 'react';

interface SlideshowProps {
  images: string[];
  interval?: number;
}

const ImageSlideshow: React.FC<SlideshowProps> = ({ 
  images, 
  interval = 5000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        const next = (currentIndex + 1) % images.length;
        setCurrentIndex(next);
        setNextIndex((next + 1) % images.length);
        setTransitioning(false);
      }, 1000); // Transition duration
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, images.length, interval]);

  if (images.length === 0) return null;
  if (images.length === 1) {
    return (
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{ backgroundImage: `url(${images[0]})` }}
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          transitioning ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${images[nextIndex]})` }}
      />
      <div className="absolute inset-0 bg-black opacity-50" />
    </div>
  );
};

export default ImageSlideshow;