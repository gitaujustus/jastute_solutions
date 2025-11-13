'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { backgrounds } from '../backgrounds';

export default function ServicesSection() {
  const services = [
    {
      title: "Website Redesign",
      description: "Transform your existing website into a modern, fast-loading digital experience that converts visitors into customers.",
      image: "/Assets/Services/Website Redesign.jpeg"
    },
    {
      title: "Web Development",
      description: "Custom websites built with clean code, optimized performance, and scalable architecture for your business growth.",
      image: "/Assets/Services/Web Development.jpeg"
    },
    {
      title: "Web Solutions",
      description: "Complete digital solutions including POS systems, CRM platforms, and custom web applications tailored to your needs.",
      image: "/Assets/Services/Web Solutions.jpeg"
    },
    {
      title: "Web Hosting",
      description: "Reliable hosting services with domain registration, SSL certificates, and ongoing technical support for your website.",
      image: "/Assets/Services/Web Hosting.jpeg"
    },
    {
      title: "Branding",
      description: "Complete brand identity design including logos, brand guidelines, and marketing materials that make lasting impressions.",
      image: "/Assets/Services/Branding.jpg"
    },
    {
      title: "CV & Profile Design",
      description: "Professional resume and portfolio designs that showcase your expertise and help you stand out to employers.",
      image: "/Assets/Services/Resume Writing.jpeg"
    }
  ];

  return (
    <section className="py-20 px-6" style={backgrounds.dotPattern}>
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#063837] mb-6">
            What We Do
          </h2>
          <p className="text-[16px] md:text-[18px] 2xl:text-[20px] text-[#242B29] max-w-3xl mx-auto">
            We deliver comprehensive digital solutions that transform your business presence and drive meaningful growth through strategic design and technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Link key={service.title} href="/services" className="h-full">
              <motion.div
                className="group bg-[#E0F0DF] rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer h-full flex flex-col overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="aspect-video overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-[#063837] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#242B29] leading-relaxed text-sm xl:text-md 2xl:text-lg flex-1">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link href="/services">
            <motion.button
              className="bg-gradient-to-r from-[#063837] to-[#FCB043] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See All Services
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}