'use client';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export default function CustomWebSystemsCTA() {
  return (
    <section className="py-20 px-6 bg-[#063837]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#E0F0DF] mb-6">
            Looking for a custom web system that runs your business, not the other way around?
          </h2>
          <p className="text-lg text-[#E0F0DF]/80 mb-8 max-w-2xl mx-auto">
            Let&apos;s build a solution that fits you perfectly. Get a system that works exactly how your business needs it to.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => window.location.href = 'mailto:jastutesolutions@gmail.com?subject=Custom Web Systems Project&body=Hello JASTUTE Solutions! I\'m interested in custom web systems development. Can we discuss building a tailored solution for my business operations?'}
              className="bg-gradient-to-r from-[#FCB043] to-[#FCB043]/80 text-[#063837] px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-shadow flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Custom System
            </motion.button>
            
            <motion.button
              onClick={() => window.location.href = '/contacts'}
              className="border-2 border-[#E0F0DF] text-[#E0F0DF] px-8 py-4 rounded-full font-semibold hover:bg-[#E0F0DF] hover:text-[#063837] transition-colors flex items-center gap-3 justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discuss Your Requirements
              <FaArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}