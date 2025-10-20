import React from 'react';
import ImageSlideshow from './ImageSlideshow';
import Button from './Button';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  // Construction site images from Pexels
  const images = [
    'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg',
    'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg',
    'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg',
    'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg'
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDivisions = () => {
    const manufacturerSection = document.querySelector('#manufacturer-showcase');
    if (manufacturerSection) {
      manufacturerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <ImageSlideshow images={images} interval={6000} />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6 transition-all duration-700 animate-fadeIn">
            <span className="block">Doors, details and everything inbetween</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Opening possiblities, securing spaces
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="w-64 sm:w-auto animate-fadeIn"
              onClick={scrollToContact}
            >
              Contact Us <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="w-64 sm:w-auto animate-fadeIn delay-100"
              onClick={scrollToDivisions}
            >
              What We Offer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;