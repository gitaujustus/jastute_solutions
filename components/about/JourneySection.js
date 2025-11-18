'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { backgrounds } from '../backgrounds';

export default function JourneySection() {
  return (
    <section className="py-20 px-6" style={backgrounds.networkPattern}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="flex justify-center order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <Image 
                src="/assets/webp/ourjourney1.webp" 
                alt="Our Journey" 
                width={736}
                height={734}
                className="w-full max-w-md rounded-3xl shadow-lg object-cover"
              />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#FCB043] rounded-full opacity-70"></div>
              <div className="absolute -top-4 -right-4 w-14 h-14 bg-[#063837] rounded-full opacity-50"></div>
            </div>
          </motion.div>
          
          <motion.div
            className="space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#063837]">
              Our Journey
            </h2>
            
            <div className="space-y-6 text-[16px] md:text-[18px] 2xl:text-[20px] text-[#242B29] leading-relaxed">
              <p>
                The name <span className="font-bold text-[#063837]">JASTUTE</span> was born from the word <span className="font-bold text-[#FCB043]">Astute</span> — meaning sharp, insightful, and strategic. The &quot;J&quot; personalizes it, representing our founder Justus, and the human drive behind our creativity.
              </p>
              <p>
                What started in 2023 as a small design initiative has evolved into a full-service creative and digital solutions studio. From university projects and freelancing to serving real clients, JASTUTE has grown into a brand that merges creativity and technology to help others stand out in a crowded market.
              </p>
              <p>
                Our growth story is powered by passion, consistency, and a simple belief — that <span className="font-bold text-[#063837]">good design changes perception, and smart systems change business.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}