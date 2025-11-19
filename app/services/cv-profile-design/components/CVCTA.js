'use client';
import { motion } from 'framer-motion';


export default function CVCTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#063837] to-[#063837]/90">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for a CV that actually gets seen?
          </h2>
          
          <p className="text-xl text-[#E0F0DF] mb-8 leading-relaxed">
            Stop letting opportunities slip past you. Get a professional CV that opens doors and gets you noticed by the right people.
          </p>
          
          <div className="flex justify-center">
            <button 
              onClick={() => window.location.href = '/request-a-quote'}
              className="bg-[#FCB043] text-[#063837] px-8 py-4 rounded-full font-semibold hover:bg-[#FCB043]/90 transition-colors text-lg flex items-center gap-2 justify-center"
            >
              Request CV Design Quote
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}