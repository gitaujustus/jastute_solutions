'use client';
import { motion } from 'framer-motion';
import { FaRocket, FaSearch, FaCheckCircle, FaCog, FaEnvelope } from 'react-icons/fa';

export default function HostingContent() {
  const services = [
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Fast & Secure Web Hosting",
      features: [
        "99.9% guaranteed uptime",
        "SSD-powered servers with global CDN",
        "Automatic daily backups & DDoS protection",
        "Optimized for WordPress, Laravel, React, and custom apps"
      ]
    },
    {
      icon: <FaSearch className="w-8 h-8" />,
      title: "Domain Name Research & Suggestions",
      features: [
        "Expert help to find a brandable, memorable domain",
        "Availability checks across .com, .co.ke, .ke, .africa & more",
        "SEO-friendly and competitor-aware recommendations"
      ]
    },
    {
      icon: <FaCheckCircle className="w-8 h-8" />,
      title: "Professional Domain Registration",
      features: [
        "Registered through ICANN-accredited providers",
        "Full ownership transfer — you own it 100%",
        "Privacy protection included (no spam, no exposure)"
      ]
    },
    {
      icon: <FaCog className="w-8 h-8" />,
      title: "DNS & SSL Configuration",
      features: [
        "Complete DNS setup (A, MX, CNAME, TXT records)",
        "Free SSL certificate (Let's Encrypt) or premium options",
        "Secure, Google-trusted, and HTTPS-ready from day one"
      ]
    },
    {
      icon: <FaEnvelope className="w-8 h-8" />,
      title: "Business Email & Renewal Management",
      features: [
        "Professional email: you@yourdomain.com",
        "Auto-renewal with timely reminders",
        "We manage expirations so you never lose your domain"
      ]
    }
  ];

  const benefits = [
    "Need reliable hosting that won't let you down",
    "Want a memorable domain that represents your brand",
    "Require professional email addresses for your business",
    "Need SSL certificates and security without the hassle",
    "Want expert management of renewals and technical setup"
  ];

  return (
    <section className="bg-white">
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Your Complete Solution */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#063837] mb-6">
              Your Complete Hosting & Domain Solution
            </h2>
            <p className="text-lg text-[#242B29] max-w-4xl mx-auto leading-relaxed">
              We take the complexity out of getting online. From finding the perfect domain name to launching a high-performance website, JASTUTE Solutions delivers everything in one trusted package.
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
          {/* Who This Service Fits */}
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
              Our hosting and domain services are ideal if you:
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