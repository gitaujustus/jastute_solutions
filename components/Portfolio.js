'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Portfolio() {
  const [currentProject, setCurrentProject] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const projects = [
    {
      title: "Kibunja Farm",
      description: "A farm brand solution built to promote chick supply and poultry services. Minimal design with strong product visuals and mobile-friendly performance.",
      tag: "Agribusiness Website",
      link: "https://hillganinnovations.co.ke",
      image: "/assets/webp/Kibunja-farm.webp",
      width: 1344,
      height: 768
    },
    // {
    //   title: "Centri Closet",
    //   description: "E-commerce platform serving Baraton University community. Clean UI with categorized product listings and integrated order flow.",
    //   tag: "E-Commerce Platform",
    //   link: "https://centricloset.vercel.app",
    //   image: "/assets/webp/healjuction-website.webp"
    // },
    {
      title: "HealJunction",
      description: "Healthcare and wellness management platform designed to simplify patient engagement and appointment booking. Smooth dashboard and responsive user flow.",
      tag: "Health Platform",
      link: "https://healjunction.vercel.app",
      image: "/assets/webp/healjuction-website.webp",
      width: 1248,
      height: 832
    },
    {
      title: "Healthcare Service Platform",
      description: "A clean, user-focused platform for managing healthcare services and client engagement.",
      tag: "Healthcare Platform",
      link: "#",
      image: "/assets/webp/Kaziafya.webp",
      width: 1184,
      height: 864
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 10000);
    
    return () => clearInterval(timer);
  }, [isPlaying, projects.length]);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="portfolio" className="py-20 px-6 bg-[#063837]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E0F0DF] mb-6">
            Our Portfolio
          </h2>
          <p className="text-[16px] md:text-[18px] 2xl:text-[22px] text-[#E0F0DF]/80 max-w-3xl mx-auto">
            Explore our recent projects that showcase our expertise in creating impactful digital solutions across various industries.
          </p>
        </motion.div>

        {/* Project Carousel */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              className="flex flex-col lg:flex-row gap-12 items-center"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {/* Project Image */}
              <div className="lg:w-1/2">
                <div className="aspect-auto rounded-3xl overflow-hidden shadow-2xl">
                  <Image 
                    src={projects[currentProject].image}
                    alt={projects[currentProject].title}
                    loading='lazy'
                    width={projects[currentProject].width}
                    height={projects[currentProject].height}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Project Content */}
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <span className="inline-block bg-[#FCB043] text-[#063837] px-4 py-2 rounded-full text-sm xl:text-md font-medium mb-4">
                    {projects[currentProject].tag}
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-[#E0F0DF]">
                  {projects[currentProject].title}
                </h3>
                
                <p className="text-[#E0F0DF]/80 text-[16px] md:text-[18px] 2xl:text-[20px] leading-relaxed">
                  {projects[currentProject].description}
                </p>
                
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-12 gap-6">
            {/* Previous Button */}
            <motion.button
              onClick={prevProject}
              className="p-3 rounded-full bg-[#E0F0DF]/10 hover:bg-[#FCB043] text-[#E0F0DF] hover:text-[#063837] transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Play/Pause Button */}
            <motion.button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-4 rounded-full bg-[#FCB043] text-[#063837] hover:bg-[#FCB043]/80 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isPlaying ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </motion.button>

            {/* Next Button */}
            <motion.button
              onClick={nextProject}
              className="p-3 rounded-full bg-[#E0F0DF]/10 hover:bg-[#FCB043] text-[#E0F0DF] hover:text-[#063837] transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center mt-8 gap-3">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject ? 'bg-[#FCB043] scale-125' : 'bg-[#E0F0DF]/30'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}