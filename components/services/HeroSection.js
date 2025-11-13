'use client';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6 bg-[#E0F0DF]">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#063837] mb-6">
            Our Services
          </h1>
          <p className="text-[18px] 2xl:text-[20px] text-[#242B29]/80 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to transform your business and drive meaningful growth through strategic design and technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
}