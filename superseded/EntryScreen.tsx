import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useSound from 'use-sound';
import slidingDoorSound from '/sliding-door.mp3';

interface EntryScreenProps {
  onComplete: () => void;
}

const EntryScreen: React.FC<EntryScreenProps> = ({ onComplete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [playSound] = useSound(slidingDoorSound);

  const handleUnlock = () => {
    setIsOpen(true);
    playSound();
    setTimeout(() => {
      onComplete();
    }, 1000);
  };

  const doorVariants = {
    closed: (isLeft: boolean) => ({
      rotateY: isLeft ? 0 : 0,
      transition: { duration: 0.01 }
    }),
    open: (isLeft: boolean) => ({
      rotateY: isLeft ? -90 : 90,
      transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }
    })
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center perspective-1000 cursor-pointer"
        onClick={handleUnlock}
      >
        {/* Left Door */}
        <motion.div
          custom={true}
          variants={doorVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          className="absolute left-0 w-1/2 h-full origin-left"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'scaleX(-1)',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Left Door Handle */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2">
            <div className="w-3 h-24 bg-gradient-to-br from-zinc-300 to-zinc-400 rounded-full shadow-lg">
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* Right Door */}
        <motion.div
          custom={false}
          variants={doorVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          className="absolute right-0 w-1/2 h-full origin-right"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Right Door Handle */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2">
            <div className="w-3 h-24 bg-gradient-to-br from-zinc-300 to-zinc-400 rounded-full shadow-lg">
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

          {/* Deadbolt */}
          <div className="absolute left-1.5 top-[65%]">
            {/* Deadbolt Housing */}
            <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full shadow-lg flex items-center justify-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                {/* Keyhole */}
                <div className="flex flex-col items-center justify-center">
                  {/* Keyhole slot */}
                  <div className="w-2 h-3 bg-black rounded-t-sm" />
                  {/* Keyhole circle */}
                  <div className="w-3 h-3 bg-black rounded-full -mt-1" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 text-center -translate-y-32">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-12 tracking-wider drop-shadow-lg">
            Flipside Specialties
          </h1>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default EntryScreen;
