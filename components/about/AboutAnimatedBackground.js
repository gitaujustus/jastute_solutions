'use client';
import { motion } from 'framer-motion';

export default function AboutAnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Floating circles */}
      <motion.div
        className="absolute top-[10%] left-[5%] w-32 h-32 bg-[#FCB043]/10 rounded-full"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-[20%] right-[10%] w-24 h-24 bg-[#063837]/10 rounded-full"
        animate={{
          y: [0, 15, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-[15%] left-[8%] w-40 h-40 bg-[#FCB043]/8 rounded-full"
        animate={{
          y: [0, -25, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-[25%] right-[15%] w-20 h-20 bg-[#063837]/12 rounded-full"
        animate={{
          y: [0, 18, 0],
          x: [0, -12, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-[60%] left-[20%] w-16 h-16 bg-[#FCB043]/15 rounded-full"
        animate={{
          y: [0, -12, 0],
          x: [0, 8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-[40%] right-[25%] w-28 h-28 bg-[#063837]/8 rounded-full"
        animate={{
          y: [0, 22, 0],
          x: [0, -18, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Center gradient blur element */}
      <motion.div
        className="absolute  w-40 h-40 bg-gradient-to-br from-white/30 to-white/40 rounded-full top-[40%] md:top-[20%] right-[62%] md:right-[35%]"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />


        <motion.div 
              className="absolute hidden w-92 h-92 bg-[radial-gradient(circle_at_center,rgba(254,232,194)_0%,rgba(224,240,223,0.2)_70%)] rounded-full blur-2xl top-[50%] md:top-[35%] right-[-5%] md:right-[40%] "
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
    </div>
  );
}