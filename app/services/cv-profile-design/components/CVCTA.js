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
              onClick={() => window.open('mailto:jastutesolutions@gmail.com?subject=CV%20%26%20Profile%20Design%20Service%20-%20Email%20Us%20Your%20CV&body=Hello%20JASTUTE%20Solutions!%20I%27m%20interested%20in%20your%20CV%20and%20profile%20design%20services.%20Please%20find%20my%20current%20CV%20attached%20for%20review.%0A%0AThank%20you!', '_blank')}
              className="bg-[#FCB043] text-[#063837] px-8 py-4 rounded-full font-semibold hover:bg-[#FCB043]/90 transition-colors text-lg flex items-center gap-2 justify-center"
            >
              Email Us Your CV
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}