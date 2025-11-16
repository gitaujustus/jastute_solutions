'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function BrandingShowcase() {
  const designImpacts = [
    {
      asset: "Professional Logo",
      impact: "Instantly recognizable — builds trust in seconds"
    },
    {
      asset: "Consistent Branding",
      impact: "Turns one-time buyers into loyal customers"
    },
    {
      asset: "Flyers & Posters",
      impact: "Drives foot traffic and event turnout"
    },
    {
      asset: "Brochures & Profiles",
      impact: "Wins tenders, investors, and partnerships"
    },
    {
      asset: "Business Cards",
      impact: "Leaves a tangible, memorable connection"
    },
    {
      asset: "Social Media Graphics",
      impact: "Boosts engagement, shares, and online growth"
    },
    {
      asset: "Branded Calendars",
      impact: "Keeps you in front of clients 365 days a year"
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#E0F0DF]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#063837] mb-6">
            Why Good Design = Good Business
          </h2>
          <p className="text-lg text-[#242B29] max-w-3xl mx-auto">
            Every design asset we create serves a strategic business purpose.
          </p>
        </motion.div>

        {/* Design Impact Table */}
        <motion.div
          className="bg-white rounded-3xl shadow-lg overflow-hidden mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#063837] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Design Asset</th>
                  <th className="px-6 py-4 text-left font-semibold">Business Impact</th>
                </tr>
              </thead>
              <tbody>
                {designImpacts.map((item, index) => (
                  <motion.tr
                    key={item.asset}
                    className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-[#E0F0DF]/30 transition-colors`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <td className="px-6 py-4 font-semibold text-[#063837]">{item.asset}</td>
                    <td className="px-6 py-4 text-[#242B29]">{item.impact}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Design Showcase Image */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#063837] mb-6">
                Professional Design Portfolio
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* Placeholder design elements */}
                <div className="bg-gradient-to-br from-[#063837] to-[#FCB043] rounded-lg p-6 text-white text-center">
                  <div className="text-2xl font-bold mb-2">LOGO</div>
                  <div className="text-sm">Brand Identity</div>
                </div>
                <div className="bg-[#E0F0DF] rounded-lg p-6 text-center">
                  <div className="text-[#063837] text-xl font-bold mb-2">CARD</div>
                  <div className="text-[#242B29] text-sm">Business Cards</div>
                </div>
                <div className="bg-[#FCB043] rounded-lg p-6 text-white text-center">
                  <div className="text-xl font-bold mb-2">FLYER</div>
                  <div className="text-sm">Marketing</div>
                </div>
                <div className="bg-gradient-to-br from-[#E0F0DF] to-white border-2 border-[#063837] rounded-lg p-6 text-center">
                  <div className="text-[#063837] text-xl font-bold mb-2">SOCIAL</div>
                  <div className="text-[#242B29] text-sm">Media Graphics</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}