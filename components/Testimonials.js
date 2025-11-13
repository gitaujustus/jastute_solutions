// 'use client';
// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function Testimonials() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);

//   const testimonials = [
//     {
      // name: "Sarah Johnson",
      // position: "CEO, TechStart Solutions",
      // company: "TechStart Solutions",
//       testimonial: "JASTUTE Solutions transformed our digital presence completely. Their attention to detail and innovative approach helped us increase our online engagement by 300%.",
//       avatar: "/Assets/hero1.jpg"
//     },
//     {
//       name: "Michael Chen",
//       position: "Marketing Director",
//       company: "GrowthCorp",
//       testimonial: "Working with JASTUTE was a game-changer for our brand. They delivered a stunning website that not only looks amazing but also drives real results.",
//       avatar: "/Assets/hero1.png"
//     },
//     {
//       name: "Emily Rodriguez",
//       position: "Founder",
//       company: "Creative Studios",
//       testimonial: "The team at JASTUTE understood our vision perfectly and brought it to life beyond our expectations. Their creative solutions are unmatched.",
//       avatar: "/Assets/hero3.jpeg"
//     },
//     {
//       name: "David Thompson",
//       position: "Operations Manager",
//       company: "Wellness Hub",
//       testimonial: "JASTUTE Solutions delivered exceptional results for our healthcare platform. Their user-centric design approach greatly improved our patient engagement.",
//       avatar: "/Assets/hero1.jpg"
//     }
//   ];

//   const getVisibleTestimonials = () => {
//     const left = testimonials[currentIndex];
//     const right = testimonials[(currentIndex + 1) % testimonials.length];
//     return [left, right];
//   };

//   useEffect(() => {
//     if (!isPlaying) return;
    
//     const timer = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//     }, 16000);
    
//     return () => clearInterval(timer);
//   }, [isPlaying, testimonials.length]);

//   const nextTestimonial = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   return (
//     <section className="py-20 px-6 bg-[#E0F0DF]">
//       <div className="max-w-6xl mx-auto">
//         {/* Section Header */}
//         <motion.div 
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-[#063837] mb-6">
//             What Our Clients Say
//           </h2>
//           <p className="text-lg text-[#242B29] max-w-3xl mx-auto">
//             Don't just take our word for it. Here's what our satisfied clients have to say about working with JASTUTE Solutions.
//           </p>
//         </motion.div>

//         {/* Testimonial Carousel */}
//         <div className="relative overflow-hidden max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Left Position */}
//             <div className="relative">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={`left-${currentIndex}`}
//                   className="bg-white rounded-3xl p-8 shadow-lg"
//                   initial={{ x: '100%', opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   exit={{ x: '-100%', opacity: 0 }}
//                   transition={{ duration: 0.5, ease: 'easeInOut' }}
//                 >
//                   {/* Quote Icon */}
//                   <div className="text-[#FCB043] mb-4">
//                     <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
//                     </svg>
//                   </div>

//                   {/* Testimonial Text */}
//                   <blockquote className="text-lg text-[#242B29] leading-relaxed mb-6 font-medium">
//                     "{getVisibleTestimonials()[0].testimonial}"
//                   </blockquote>

//                   {/* Client Info */}
//                   <div className="flex items-center gap-3">
//                     <div className="w-12 h-12 rounded-full overflow-hidden bg-[#E0F0DF]">
//                       <img 
//                         src={getVisibleTestimonials()[0].avatar}
//                         alt={getVisibleTestimonials()[0].name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-[#063837]">
//                         {getVisibleTestimonials()[0].name}
//                       </h4>
//                       <p className="text-sm text-[#242B29]">
//                         {getVisibleTestimonials()[0].position}
//                       </p>
//                       <p className="text-sm text-[#FCB043] font-medium">
//                         {getVisibleTestimonials()[0].company}
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </div>

//             {/* Right Position */}
//             <div className="relative hidden md:block">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={`right-${currentIndex}`}
//                   className="bg-white rounded-3xl p-8 shadow-lg"
//                   initial={{ x: '100%', opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   exit={{ x: '-100%', opacity: 0 }}
//                   transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.1 }}
//                 >
//                   {/* Quote Icon */}
//                   <div className="text-[#FCB043] mb-4">
//                     <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
//                     </svg>
//                   </div>

//                   {/* Testimonial Text */}
//                   <blockquote className="text-lg text-[#242B29] leading-relaxed mb-6 font-medium">
//                     "{getVisibleTestimonials()[1].testimonial}"
//                   </blockquote>

//                   {/* Client Info */}
//                   <div className="flex items-center gap-3">
//                     <div className="w-12 h-12 rounded-full overflow-hidden bg-[#E0F0DF]">
//                       <img 
//                         src={getVisibleTestimonials()[1].avatar}
//                         alt={getVisibleTestimonials()[1].name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-[#063837]">
//                         {getVisibleTestimonials()[1].name}
//                       </h4>
//                       <p className="text-sm text-[#242B29]">
//                         {getVisibleTestimonials()[1].position}
//                       </p>
//                       <p className="text-sm text-[#FCB043] font-medium">
//                         {getVisibleTestimonials()[1].company}
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </div>

//           {/* Navigation Controls */}
//           <div className="flex justify-center items-center mt-12 gap-6">
//             {/* Previous Button */}
//             <motion.button
//               onClick={prevTestimonial}
//               className="p-3 rounded-full bg-white/50 hover:bg-[#063837] text-[#063837] hover:text-white transition-all duration-300 shadow-md"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//               </svg>
//             </motion.button>

//             {/* Play/Pause Button */}
//             <motion.button
//               onClick={() => setIsPlaying(!isPlaying)}
//               className="p-4 rounded-full bg-[#063837] text-white hover:bg-[#063837]/80 transition-all duration-300 shadow-lg"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               {isPlaying ? (
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
//                 </svg>
//               ) : (
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M8 5v14l11-7z" />
//                 </svg>
//               )}
//             </motion.button>

//             {/* Next Button */}
//             <motion.button
//               onClick={nextTestimonial}
//               className="p-3 rounded-full bg-white/50 hover:bg-[#063837] text-[#063837] hover:text-white transition-all duration-300 shadow-md"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </motion.button>
//           </div>

//           {/* Testimonial Indicators */}
//           <div className="flex justify-center mt-8 gap-3">
//             {testimonials.map((_, index) => (
//               <motion.button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   index === currentIndex ? 'bg-[#063837] scale-125' : 'bg-[#063837]/30'
//                 }`}
//                 whileHover={{ scale: 1.2 }}
//                 whileTap={{ scale: 0.8 }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// "use client";
// import { useState, useEffect, useRef } from "react";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";
// // ..
// export default function Testimonials() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);
//   const [perView, setPerView] = useState(1); // Track number of slides per view

//   const [sliderRef, instanceRef] = useKeenSlider({
//     loop: true,
//     slideChanged(slider) {
//       setCurrentSlide(slider.track.details.rel);
//     },
//     slides: {
//       perView: 1,
//       spacing: 16,
//     },
//     breakpoints: {
//       "(min-width: 768px)": {
//         slides: { perView: 3, spacing: 40 },
//       },
//       "(min-width: 1536px)": {
//         slides: { perView: 3, spacing: 40 },
//       },
//     },
//     centered: true,
//     slidesChanged(slider) {
//       // Update perView based on current breakpoint
//       const slidesPerView = slider.options.slides.perView || 1;
//       setPerView(typeof slidesPerView === "function" ? slidesPerView() : slidesPerView);
//     },
//   });

//   // Greater than SVG icon
//   const GreaterThanIcon = () => (
//     <svg
//       className="w-6 h-6"
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth={1.5}
//       stroke="currentColor"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M19.5 8.25l-7.5 7.5-7.5-7.5"
//       />
//     </svg>
//   );

//   // Auto-slide effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       instanceRef.current?.next();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [instanceRef]);

//   // Track mobile state and initial perView
//   useEffect(() => {
//     const updateMobileAndPerView = () => {
//       setIsMobile(window.innerWidth < 640);
//       // Update perView on resize
//       const slidesPerView = window.innerWidth < 768 ? 1 : 3;
//       setPerView(slidesPerView);
//     };

//     updateMobileAndPerView();
//     window.addEventListener("resize", updateMobileAndPerView);
//     return () => window.removeEventListener("resize", updateMobileAndPerView);
//   }, []);

  
//   const testimonials = [
//     {
//       name: "Mrs. Metashulunge",
//       details: "Burundi",
//       quote:
//       "The team at JASTUTE understood our vision perfectly and brought it to life beyond our expectations. Their creative solutions are unmatched.",
//   },
//     {
//       name: "Paul",
//       details: "Congo",
//       quote:
//       "Heal Junction supported us from airport to hospital. They handled every detail — transport, stay, and language translation. We're grateful for their care and hope others get the same help. Truly kind and dependable people!",
//   },
//   //   {
//   //     name: "Nshokano Julien",
//   //     details: "Burundi",
//   //     quote:
//   //     "I wholeheartedly recommend Healjunction as the best medical tourism agency for anyone seeking high-quality. They took the time to understand my needs and matched me with top-tier hospitals and doctors in internationally accredited facilities.",
//   // },
//     {
//       name: "Christine Bora",
//       details: "Congo",
//       quote:
//       "Healjunction, simply the best!. Thanks to their personalized support, I was able to receive quality medical care in a reassuring environment. A responsive, caring, and professional team. I recommend it without hesitation to anyone seeking care abroad.",
//   },
//     {
//       name: "Mujinikire Basema",
//       details: "London",
//       quote:
//       "Just wanted to say thank you to the Healjunction team for the amazing work you’re doing. Your professionalism, care, and attention to detail truly stand out. Keep up the great work, you’re making a real difference!",
//   },

//   ];

//   // Function to get initials from name
//   const getInitials = (name) => {
//     return name.split(' ')[0].charAt(0).toUpperCase();
//     // return name.split(' ').map(word => word.charAt(0).toUpperCase()).join('');
//   };

//   const headingText = "Our Patients' Inspiring Journeys";
//   const words = headingText.split(" ");

//   // Animation variants for word flow with motion blur
//   const wordFlow = {
//     initial: { 
//         opacity: 0, 
//         x: -50,
//         filter: "blur(3px)"
//     },
//     animate: (index) => ({ 
//         opacity: 1, 
//         x: 0,
//         filter: "blur(0px)",
//         transition: { 
//             duration: 0.6, 
//             ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for smooth motion
//             delay: index * 0.1 // Stagger each word
//         } 
//     }),
// };

//   // Calculate the index of the center slide
//   const getCenterSlideIndex = (currentIndex) => {
//     if (perView === 1) return currentIndex; // On mobile, current slide is active
//     // For 3 slides per view, the center slide is currentSlide + 1
//     const totalSlides = testimonials.length;
//     return (currentIndex + 1) % totalSlides; // Ensure it wraps around due to loop: true
//   };

//   // Responsive card dimensions
//   const cardWidth = isMobile ? "280px" : "359px";
//   const cardHeight = isMobile ? "auto" : "342px";
//   const minCardHeight = isMobile ? "250px" : "342px";

//   return (
//     <section className="bg-white py-8 sm:py-10 md:py-16 px-[20px] md:px-[55px] lg:px-[64px] 2xl:px-[64px] overflow-hidden">
//        {/* Heading with word-by-word animation */}
//        <div className="text-[16px] md:text-[20px] lg:text-[24px] xl:text-[30px] font-medium text-[#157EBF] mb-[20px] md:mb-[44px] animate-slide-up font-inter leading-[24px] md:leading-[100%] text-center">
//                     {words.map((word, index) => (
//                         <motion.span
//                             key={index}
//                             custom={index}
//                             variants={wordFlow}
//                             initial="initial"
//                             whileInView="animate"
//                             viewport={{ amount: 0.9 }}
//                             className="inline-block mr-[0.25em] last:mr-0"
//                         >
//                             {word}
//                         </motion.span>
//                     ))}
//                 </div>

//       <div className="relative max-w-full sm:max-w-7xl 2xl:max-w-[1440px] mx-auto">
//         <div ref={sliderRef} className="keen-slider">
//           {testimonials.map((t, i) => (
//             <div
//               key={i}
//               className="keen-slider__slide flex justify-center"
//               style={{
//                 minWidth: cardWidth,
//                 maxWidth: cardWidth,
//                 minHeight: minCardHeight,
//               }}
//             >
//               <div
//                 className={`rounded-[10px] shadow-md p-[18px] sm:p-[20px] flex flex-col ${
//                   i === getCenterSlideIndex(currentSlide)
//                     ? "bg-[#157EBF]"
//                     : "bg-[#EEEEF0] opacity-90"
//                 } ${
//                   i === getCenterSlideIndex(currentSlide)
//                     ? "scale-100"
//                     : isMobile
//                     ? "scale-90"
//                     : "scale-95"
//                 }`}
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   transition: "all 0.3s ease-in-out",
//                 }}
//               >
//                 <div className="flex items-center mb-[18px]">
//                   <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 flex-shrink-0 flex items-center justify-center font-medium  ${
//                     i === getCenterSlideIndex(currentSlide)
//                       ? "bg-white text-[#157EBF]"
//                       : "bg-[#157EBF] text-white"
//                   }`}>
//                     <span className="text-sm sm:text-lg">
//                       {getInitials(t.name)}
//                     </span>
//                   </div>
//                   <div className="text-left">
//                     <h4
//                       className={`font-medium text-sm sm:text-[18px] leading-tight sm:leading-[32px] font-inter ${
//                         i === getCenterSlideIndex(currentSlide)
//                           ? "text-white"
//                           : "text-black"
//                       }`}
//                     >
//                       {t.name}
//                     </h4>
//                     <p
//                       className={`text-xs sm:text-[16px] leading-tight sm:leading-[32px] font-inter font-normal ${
//                         i === getCenterSlideIndex(currentSlide)
//                           ? "text-white"
//                           : "text-gray-600"
//                       }`}
//                     >
//                       {t.details}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex-grow overflow-hidden">
//                   <p
//                     className={`text-[14px] sm:text-[16px] leading-[24px] md:leading-[32px] font-figtree font-normal ${
//                       i === getCenterSlideIndex(currentSlide)
//                         ? "text-white"
//                         : "text-black"
//                     }`}
//                     style={{
//                       display: "-webkit-box",
//                       WebkitLineClamp: isMobile ? "7" : "12",
//                       WebkitBoxOrient: "vertical",
//                       overflow: "hidden",
//                       textOverflow: "ellipsis",
//                     }}
//                   >
//                     &quot;{t.quote}&quot;
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Navigation Arrows */}
//         <button
//           onClick={() => instanceRef.current?.prev()}
//           className="absolute top-1/2 left-[-20px] -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-2 hover:bg-gray-100 rotate-90"
//         >
//           <GreaterThanIcon />
//         </button>
//         <button
//           onClick={() => instanceRef.current?.next()}
//           className="absolute top-1/2 right-[-20px] -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-2 hover:bg-gray-100 -rotate-90"
//         >
//           <GreaterThanIcon />
//         </button>

//         {/* Dots */}
//         <div className="flex items-center justify-center gap-[10px] mt-6 sm:mt-8">
//           {testimonials.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => instanceRef.current?.moveToIdx(idx)}
//               className={`transition-all duration-300 rounded-full h-[10px] ${
//                 currentSlide === idx
//                   ? "w-[40px] bg-[#007ACC]"
//                   : "w-[10px] bg-gray-300"
//               }`}
//               aria-label={`Go to testimonial ${idx + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [perView, setPerView] = useState(1);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 32 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 32 },
      },
    },
    centered: true,
    slidesChanged(slider) {
      const slidesPerView = slider.options.slides.perView || 1;
      setPerView(typeof slidesPerView === "function" ? slidesPerView() : slidesPerView);
    },
  });

  // Auto-slide every 16 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 16000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Solutions",
      company: "TechStart Solutions",
      testimonial: "JASTUTE Solutions transformed our digital presence completely. Their attention to detail and innovative approach helped us increase our online engagement by 300%.",
      avatar: "/Assets/hero1.jpg",
    },
    {
      name: "Michael Chen",
      position: "Marketing Director",
      company: "GrowthCorp",
      testimonial: "Working with JASTUTE was a game-changer for our brand. They delivered a stunning website that not only looks amazing but also drives real results.",
      avatar: "/Assets/hero1.png",
    },
    {
      name: "Emily Rodriguez",
      position: "Founder",
      company: "Creative Studios",
      testimonial: "The team at JASTUTE understood our vision perfectly and brought it to life beyond our expectations. Their creative solutions are unmatched.",
      avatar: "/Assets/hero3.jpeg",
    },
    {
      name: "David Thompson",
      position: "Operations Manager",
      company: "Wellness Hub",
      testimonial: "JASTUTE Solutions delivered exceptional results for our healthcare platform. Their user-centric design approach greatly improved our patient engagement.",
      avatar: "/Assets/hero1.jpg",
    },
  ];

  const getCenterSlideIndex = () => {
    if (perView === 1) return currentSlide;
    return (currentSlide + 1) % testimonials.length;
  };

  const isCenter = (index) => {
    const centerIndex = getCenterSlideIndex();
    return index === centerIndex;
  };

  return (
    <section className="py-20 px-6 bg-[#E0F0DF]"
     style={{
      backgroundColor: '#dfefdf',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%238573a1' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`
    }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#063837] mb-6">
            What Our Clients Say
          </h2>
          <p className="text-[16px] md:text-[18px] 2xl:text-[20px] text-[#242B29] max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about working with JASTUTE Solutions.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="keen-slider__slide flex justify-center px-2"
                style={{ minWidth: "300px", maxWidth: "400px" }}
              >
                <motion.div
                  className={`rounded-3xl p-8 shadow-lg bg-white w-full h-full flex flex-col transition-all duration-300 ${
                    isCenter(i) ? "scale-100" : "scale-95 opacity-80"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Quote Icon */}
                  <div className="text-[#FCB043] mb-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                    </svg>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-[16px] md:text-[18px] 2xl:text-[20px] text-[#242B29] leading-relaxed mb-6 font-medium flex-grow">
                    &ldquo;{t.testimonial}&rdquo;
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-[#E0F0DF] border-2 border-[#063837]/10">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "/Assets/placeholder-avatar.jpg"; // fallback
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#063837]">{t.name}</h4>
                      <p className="text-sm xl:text-md text-[#242B29]">{t.position}</p>
                      <p className="text-sm xl:text-md text-[#FCB043] font-medium">{t.company}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-[#063837] hover:text-white text-[#063837] transition-all z-10"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-[#063837] hover:text-white text-[#063837] transition-all z-10"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-12 gap-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? "bg-[#063837] scale-125" : "bg-[#063837]/30"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}