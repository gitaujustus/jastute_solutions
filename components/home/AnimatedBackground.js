'use client';
import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <motion.div 
        className="absolute w-72 h-72 bg-gradient-to-br from-[#FCB043]/20 to-[#FFFFFF]/90 rounded-full blur-lg"
        style={{ top: '10%', left: '5%' }}
        animate={{ 
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute w-80 h-80 bg-gradient-to-br from-[#063837]/15 to-[#FCB043]/30 rounded-full blur-xl top-[60%] md:top-[5%] right-[-5%] md:right-[10%]"
        animate={{ 
          x: [0, -25, 0],
          y: [0, 15, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
      />
      <motion.div 
        className="absolute w-40 h-40 bg-gradient-to-br from-white/30 to-white/40 rounded-full top-[40%] md:top-[20%] right-[2%] md:right-[35%]  "
        animate={{ 
          x: [0, 20, 0],
          y: [0, -30, 0]
        }}
        transition={{ 
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10
        }}
      />
      <motion.div 
        className="absolute w-20 h-20 bg-gradient-to-br from-[#FCB043]/40 to-transparent rounded-full "
        style={{ bottom: '20%', left: '-1%' }}
        animate={{ 
          x: [0, -15, 0],
          y: [0, 25, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8
        }}
      />
    </div>
  );
}