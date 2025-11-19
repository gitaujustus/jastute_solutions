'use client';
import { motion } from 'framer-motion';

export default function CTASection() {
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-[16px] md:text-[18px] 2xl:text-[20px] text-[#E0F0DF]/80 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our services can help you achieve your digital goals and drive meaningful growth for your business.
          </p>
          <motion.button
            onClick={() => window.location.href = '/request-a-quote'}
            className="bg-gradient-to-r from-[#FCB043] to-[#FCB043]/80 text-[#063837] px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}