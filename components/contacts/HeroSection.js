'use client';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-[#063837] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h1>
        
        <motion.p 
          className="text-xl text-[#242B29]/80 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Ready to start your project? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
        </motion.p>
      </div>
    </section>
  );
}