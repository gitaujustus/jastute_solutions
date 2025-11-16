'use client';
import { motion } from 'framer-motion';
import { FaBullseye, FaBolt, FaPalette, FaBrain, FaClipboardList } from 'react-icons/fa';

export default function StrategyContent() {
  const services = [
    {
      icon: <FaBullseye className="w-8 h-8" />,
      title: "Website Design Audits",
      features: [
        "Full visual, structural, and code review",
        "Mobile responsiveness & accessibility checks",
        "Competitor benchmarking included"
      ]
    },
    {
      icon: <FaBolt className="w-8 h-8" />,
      title: "Performance Optimization",
      features: [
        "Page speed analysis & fixes (Core Web Vitals)",
        "Image, code, and server optimization",
        "Real-world load time improvements"
      ]
    },
    {
      icon: <FaPalette className="w-8 h-8" />,
      title: "Brand Alignment Strategy",
      features: [
        "Ensure your site reflects your brand voice",
        "Visual consistency across all pages",
        "Messaging that converts visitors into customers"
      ]
    },
    {
      icon: <FaBrain className="w-8 h-8" />,
      title: "UX & Conversion Consulting",
      features: [
        "User journey mapping & friction point removal",
        "A/B testing recommendations",
        "Heatmap & behavior analysis insights"
      ]
    },
    {
      icon: <FaClipboardList className="w-8 h-8" />,
      title: "Practical Improvement Plans",
      features: [
        "Prioritized, step-by-step roadmap",
        "Budget-friendly implementation options",
        "ROI projections for every change"
      ]
    }
  ];

  const benefits = [
    "Your website isn't converting visitors into customers",
    "You're getting traffic but low engagement or sales",
    "Your site feels outdated compared to competitors",
    "You want data-backed improvements, not guesswork",
    "You need a clear roadmap for digital growth"
  ];

  return (
    <section className="bg-white">
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Your Digital Growth Partner */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#063837] mb-6">
              Your Digital Growth Partner
            </h2>
            <p className="text-lg text-[#242B29] max-w-4xl mx-auto leading-relaxed">
              Stop guessing what works. JASTUTE Solutions provides expert consulting that transforms underperforming websites into powerful business tools — all backed by clear analysis and actionable plans.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:justify-items-center lg:justify-items-start">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="flex flex-col items-start gap-4 py-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4 w-full">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FCB043]/10 rounded-xl flex items-center justify-center">
                    <div className="text-[#FCB043] text-lg">
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#063837] mb-3">
                      {service.title}
                    </h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[#242B29] text-sm">
                          <span className="text-[#FCB043] mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Perfect If You */}
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#063837] mb-6">
              Perfect If You
            </h2>
            <p className="text-lg text-[#242B29] mb-8">
              Our strategy and consulting services are ideal if:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 text-left">
                  <div className="w-6 h-6 bg-[#FCB043] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-[#242B29]">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}