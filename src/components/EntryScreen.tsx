import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useSound from 'use-sound';
import { Key } from 'lucide-react';
import slidingDoorSound from '/sliding-door.mp3';

interface EntryScreenProps {
  onComplete: () => void;
}

const EntryScreen: React.FC<EntryScreenProps> = ({ onComplete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [playSound] = useSound(slidingDoorSound);

  const handleUnlock = () => {
    setIsUnlocking(true);
    setTimeout(() => {
      setIsOpen(true);
      playSound();
      setTimeout(() => {
        onComplete();
      }, 1000);
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

  const keyVariants = {
    initial: { 
      rotate: 0,
      x: 0,
      y: 0
    },
    inserting: {
      x: 20,
      y: 0,
      transition: { duration: 0.5 }
    },
    turning: { 
      rotate: 90,
      transition: { 
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.5
      }
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center perspective-1000">
        {/* Left Door */}
        <motion.div
          custom={true}
          variants={doorVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          className="absolute left-0 w-1/2 h-full bg-[#8B5E3C] origin-left"
          style={{
            backgroundImage: 'linear-gradient(90deg, rgba(139, 94, 60, 0.9), rgba(139, 94, 60, 0.95))',
            borderRight: '1px solid rgba(0, 0, 0, 0.1)',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Left Door Wood Grain */}
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: 'scaleX(-1)'
            }}
          />
          
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
          className="absolute right-0 w-1/2 h-full bg-[#8B5E3C] origin-right"
          style={{
            backgroundImage: 'linear-gradient(90deg, rgba(139, 94, 60, 0.95), rgba(139, 94, 60, 0.9))',
            borderLeft: '1px solid rgba(0, 0, 0, 0.1)',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Right Door Wood Grain */}
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          
          {/* Right Door Handle */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2">
            <div className="w-3 h-24 bg-gradient-to-br from-zinc-300 to-zinc-400 rounded-full shadow-lg">
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

          {/* Deadbolt Housing */}
          <div className="absolute left-8 top-[60%] -translate-y-1/2">
            <div className="w-12 h-16 bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-lg shadow-lg p-1">
              {/* Decorative Screws */}
              <div className="absolute top-1 left-1 w-1 h-1 rounded-full bg-zinc-500" />
              <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-zinc-500" />
              <div className="absolute bottom-1 left-1 w-1 h-1 rounded-full bg-zinc-500" />
              <div className="absolute bottom-1 right-1 w-1 h-1 rounded-full bg-zinc-500" />
              
              {/* Keyhole */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-6">
                <div className="w-full h-3 bg-black rounded-t-full" />
                <div className="w-2 h-3 bg-black mx-auto" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-12 tracking-wider drop-shadow-lg">
            Flipside Specialties
          </h1>
          
          <button
            onClick={handleUnlock}
            className="relative group"
            disabled={isUnlocking}
          >
            {/* Key */}
            <motion.div
              className="relative"
              variants={keyVariants}
              initial="initial"
              animate={isUnlocking ? ["inserting", "turning"] : "initial"}
            >
              <Key 
                className="w-8 h-8 text-zinc-300 transform transition-all duration-500
                         hover:text-zinc-100 hover:scale-105"
              />
            </motion.div>

            <span className="block mt-4 text-sm font-medium text-white group-hover:text-gray-100">
              {isUnlocking ? "Unlocking..." : "Insert Key to Enter"}
            </span>
          </button>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default EntryScreen;