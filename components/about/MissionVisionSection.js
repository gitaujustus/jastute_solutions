'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { backgrounds } from '../backgrounds';

export default function MissionVisionSection() {
  return (
    <section className="py-20 px-6" style={backgrounds.smallDotPattern}>
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-[#063837] text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Purpose
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="order-1 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <Image 
                src="/assets/webp/Mission-vision.webp" 
                alt="Mission and Vision" 
                width={736}
                height={414}
                className="w-full rounded-3xl shadow-lg object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#FCB043] rounded-full opacity-70"></div>
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#063837] rounded-full opacity-50"></div>
            </div>
          </motion.div>
          
          <motion.div
            className="space-y-12 order-2 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-3xl font-bold text-[#FCB043] mb-6">Mission</h3>
              <p className="text-lg text-[#063837] leading-relaxed">
                To create impactful digital experiences that help brands communicate clearly, look professional, and grow confidently.
              </p>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-[#FCB043] mb-6">Vision</h3>
              <p className="text-lg text-[#063837] leading-relaxed">
                To be one of Africa&apos;s most trusted creative tech brands — known for blending design, innovation, and strategy to empower businesses of all sizes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}