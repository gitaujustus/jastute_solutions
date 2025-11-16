'use client';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaMobile, FaUsers, FaRocket, FaPalette, FaSearch } from 'react-icons/fa';

export default function WebsiteRedesignContent() {
  const features = [
    {
      icon: <FaMobile className="w-6 h-6" />,
      title: "Modern, Responsive Layouts",
      description: "Clean layouts that work smoothly on all screens. Nothing cramped or broken on mobile."
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "User-Focused Redesigns", 
      description: "We remove the noise, keep what matters, and guide users with intuitive structure and simple navigation."
    },
    {
      icon: <FaRocket className="w-6 h-6" />,
      title: "Improved Performance & SEO",
      description: "Speed, accessibility, metadata, best practices — all tuned so Google respects your site."
    },
    {
      icon: <FaPalette className="w-6 h-6" />,
      title: "Polished UX/UI Design",
      description: "Not \"design for vibes,\" but intentional layouts, spacing, color balance, readability, and clarity."
    },
    {
      icon: <FaCheckCircle className="w-6 h-6" />,
      title: "Visual Consistency With Your Brand",
      description: "We ensure your fonts, colors, and visuals match who you are. No more random styles from every page."
    }
  ];

  const benefits = [
    "Your website looks old or inconsistent",
    "Your bounce-rate is high", 
    "You redesigned years ago",
    "You need a more professional look to attract clients",
    "Your brand has evolved but your website hasn&apos;t",
    "You want a clean, modern look without losing your identity"
  ];

  const results = [
    "A website that feels alive, not outdated",
    "Faster load times",
    "Better clarity and structure", 
    "Higher trust from clients",
    "A design that aligns with your brand&apos;s message",
    "A digital presence that feels intentional, not stitched together"
  ];

  return (
    <section className="py-20 px-6" style={{
      backgroundColor: '#ffffff',
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23e0f0df' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")`
    }}>
      <div className="max-w-7xl mx-auto">
        {/* Why This Service Exists */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#063837] mb-6">
            Why This Service Exists
          </h2>
          <p className="text-lg text-[#242B29] max-w-4xl mx-auto leading-relaxed">
            A good website isn&apos;t about fancy animations. It&apos;s about clarity, purpose, and trust. Most businesses suffer from cluttered layouts, slow load times, and branding that doesn&apos;t reflect who they are anymore. We fix that. We rebuild your digital presence to feel modern, confident, and aligned with your goals.
          </p>
        </motion.div>

        {/* What We Do */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#063837] text-center mb-6">
            What We Do
          </h2>
          <p className="text-lg text-[#242B29] text-center mb-12 max-w-4xl mx-auto">
            We turn your existing website into a stronger, more polished version of your brand. Or if you&apos;re starting fresh, we design a new one from scratch that actually represents you.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-[#E0F0DF] p-6 rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-[#063837] mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#063837] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#242B29] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Who This Service Fits */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#063837] mb-6">
              Who This Service Fits
            </h2>
            <p className="text-lg text-[#242B29] mb-8">
              This is perfect for you if:
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="w-5 h-5 text-[#FCB043] mt-1 flex-shrink-0" />
                  <span className="text-[#242B29]">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#063837] mb-6">
              Results You Should Expect
            </h2>
            <ul className="space-y-4">
              {results.map((result, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaRocket className="w-5 h-5 text-[#FCB043] mt-1 flex-shrink-0" />
                  <span className="text-[#242B29]">{result}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}