'use client';
import { motion } from 'framer-motion';
import { FaCashRegister, FaUsers, FaChartLine, FaGraduationCap, FaTachometerAlt, FaRocket, FaShoppingCart } from 'react-icons/fa';

export default function CustomWebSystemsContent() {
  const systems = [
    {
      icon: <FaCashRegister className="w-8 h-8" />,
      title: "Point of Sale (POS) Systems",
      description: "Manage sales, inventory, and customers in one sleek interface."
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Customer Relationship Management (CRM)", 
      description: "Track leads, customers, and communication to grow relationships."
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Enterprise Resource Planning (ERP)",
      description: "Streamline finance, supply chain, and operations seamlessly."
    },
    {
      icon: <FaShoppingCart className="w-8 h-8" />,
      title: "E-Commerce Systems",
      description: "Sell online with secure payment processing and inventory management."
    },
    {
      icon: <FaGraduationCap className="w-8 h-8" />,
      title: "Education & E-Learning Platforms",
      description: "Deliver courses, track progress, and engage learners online."
    },
    {
      icon: <FaTachometerAlt className="w-8 h-8" />,
      title: "Custom Dashboards & Automation Tools",
      description: "Visualize data and automate tasks to save time and reduce errors."
    }
  ];

  const benefits = [
    "Need a system built exactly for your business workflows",
    "Want to ditch multiple disconnected tools",
    "Require a solution that can grow with your company",
    "Are serious about automating and scaling operations",
    "Want something secure, reliable, and maintainable"
  ];

  return (
    <section className="bg-white">
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* What We Offer */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#063837] mb-6">
              What We Offer
            </h2>
            <p className="text-lg text-[#242B29] max-w-4xl mx-auto leading-relaxed">
              We have powerful, scalable web systems that help you automate processes, manage data, and grow efficiently. Every solution is tailored, flexible, and built to work exactly how you want it.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:justify-items-center lg:justify-items-start">
            {systems.map((system, index) => (
              <motion.div
                key={system.title}
                className="flex items-start gap-4 py-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#FCB043]/10 rounded-xl flex items-center justify-center">
                  <div className="text-[#FCB043] text-lg">
                    {system.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#063837] mb-2">
                    {system.title}
                  </h3>
                  <p className="text-[#242B29] leading-relaxed text-sm">
                    {system.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Performance Section */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-[#FCB043]/10 rounded-full px-6 py-3 mb-6">
                <FaRocket className="w-6 h-6 text-[#FCB043]" />
                <span className="text-[#063837] font-semibold">Performance & SEO</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#063837] mb-6">
                Built for Speed & Growth
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-[#242B29] leading-relaxed">
                These systems are designed with clean code and optimized performance — so they run fast and scale without slowing down. Plus, we ensure the architecture supports searchability where it matters, giving you an edge online.
              </p>
            </div>
          </motion.div>

          {/* Who This Service Fits */}
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#063837] mb-6">
              Who This Service Fits
            </h2>
            <p className="text-lg text-[#242B29] mb-8">
              Ideal if you:
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