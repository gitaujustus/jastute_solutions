'use client';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from 'emailjs-com';
import { FaQuoteLeft, FaUser, FaEnvelope, FaPhone, FaBuilding, FaClipboardList, FaPaperPlane } from 'react-icons/fa';

export default function QuoteForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();

  const services = [
    { value: '', label: 'Select a Service' },
    { value: 'website-design-redesign', label: 'Website Design & Redesign' },
    { value: 'custom-website-development', label: 'Custom Website Development' },
    { value: 'custom-web-systems', label: 'Custom Web Systems (POS, CRM, ERP)' },
    { value: 'hosting-domains', label: 'Website Hosting & Domain Registration' },
    { value: 'strategy-consulting', label: 'Website Strategy & Consulting' },
    { value: 'branding-design', label: 'Branding & Graphic Design' },
    { value: 'cv-profile-design', label: 'CV & Profile Design' },
    { value: 'multiple-services', label: 'Multiple Services' }
  ];

  const budgetRanges = [
    { value: '', label: 'Select Budget Range' },
    { value: 'under-50k', label: 'Under KSh 50,000' },
    { value: '50k-100k', label: 'KSh 50,000 - 100,000' },
    { value: '100k-250k', label: 'KSh 100,000 - 250,000' },
    { value: '250k-500k', label: 'KSh 250,000 - 500,000' },
    { value: 'above-500k', label: 'Above KSh 500,000' },
    { value: 'discuss', label: 'Let\'s Discuss' }
  ];

  const timelineOptions = [
    { value: '', label: 'Select Timeline' },
    { value: 'asap', label: 'ASAP (Rush Job)' },
    { value: '1-2-weeks', label: '1-2 Weeks' },
    { value: '3-4-weeks', label: '3-4 Weeks' },
    { value: '1-2-months', label: '1-2 Months' },
    { value: '3-6-months', label: '3-6 Months' },
    { value: 'flexible', label: 'Flexible Timeline' }
  ];

  const onSubmit = async (data) => {
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

      // Find service label
      const serviceLabel = services.find(s => s.value === data.service)?.label || data.service;
      const budgetLabel = budgetRanges.find(b => b.value === data.budget)?.label || data.budget;
      const timelineLabel = timelineOptions.find(t => t.value === data.timeline)?.label || data.timeline;

      const templateParams = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company || 'Not specified',
        service: serviceLabel,
        budget: budgetLabel || 'Not specified',
        timeline: timelineLabel || 'Not specified',
        projectDetails: data.projectDetails,
      };

      await emailjs.send(serviceId, templateId, templateParams, userId);
      
      toast.success('Quote request submitted successfully! We\'ll get back to you within 24 hours.');
      reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('There was an error submitting your request. Please try again.');
    }
  };

  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-[#E0F0DF] to-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 bg-[#FCB043]/10 rounded-full px-6 py-3 mb-6">
            <FaQuoteLeft className="w-5 h-5 text-[#FCB043]" />
            <span className="text-[#063837] font-semibold">Request Quote</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-[#063837] mb-6">
            Get Your Project Quote
          </h1>
          
          <p className="text-xl text-[#242B29] leading-relaxed max-w-2xl mx-auto">
            Tell us about your project and we'll provide you with a detailed, personalized quote within 24 hours.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-[#063837] font-semibold mb-2">
                  <FaUser className="w-4 h-4 text-[#FCB043]" />
                  Full Name *
                </label>
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                    errors.name ? 'border-red-500' : 'border-gray-200 focus:border-[#FCB043]'
                  }`}
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              
              <div>
                <label className="flex items-center gap-2 text-[#063837] font-semibold mb-2">
                  <FaEnvelope className="w-4 h-4 text-[#FCB043]" />
                  Email Address *
                </label>
                <input
                  type="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                    errors.email ? 'border-red-500' : 'border-gray-200 focus:border-[#FCB043]'
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-[#063837] font-semibold mb-2">
                  <FaPhone className="w-4 h-4 text-[#FCB043]" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  {...register('phone', { required: 'Phone number is required' })}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                    errors.phone ? 'border-red-500' : 'border-gray-200 focus:border-[#FCB043]'
                  }`}
                  placeholder="+254 700 000 000"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>
              
              <div>
                <label className="flex items-center gap-2 text-[#063837] font-semibold mb-2">
                  <FaBuilding className="w-4 h-4 text-[#FCB043]" />
                  Company/Organization
                </label>
                <input
                  type="text"
                  {...register('company')}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FCB043] focus:outline-none transition-colors"
                  placeholder="Your company name (optional)"
                />
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <label className="flex items-center gap-2 text-[#063837] font-semibold mb-2">
                <FaClipboardList className="w-4 h-4 text-[#FCB043]" />
                Service Needed *
              </label>
              <select
                {...register('service', { required: 'Please select a service' })}
                className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors bg-white ${
                  errors.service ? 'border-red-500' : 'border-gray-200 focus:border-[#FCB043]'
                }`}
              >
                {services.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service.label}
                  </option>
                ))}
              </select>
              {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>}
            </div>

            {/* Budget and Timeline */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-[#063837] font-semibold mb-2 block">
                  Budget Range
                </label>
                <select
                  {...register('budget')}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FCB043] focus:outline-none transition-colors bg-white"
                >
                  {budgetRanges.map((budget) => (
                    <option key={budget.value} value={budget.value}>
                      {budget.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="text-[#063837] font-semibold mb-2 block">
                  Project Timeline
                </label>
                <select
                  {...register('timeline')}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FCB043] focus:outline-none transition-colors bg-white"
                >
                  {timelineOptions.map((timeline) => (
                    <option key={timeline.value} value={timeline.value}>
                      {timeline.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Project Details */}
            <div>
              <label className="text-[#063837] font-semibold mb-2 block">
                Project Details *
              </label>
              <textarea
                {...register('projectDetails', { required: 'Project details are required' })}
                rows={6}
                className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors resize-vertical ${
                  errors.projectDetails ? 'border-red-500' : 'border-gray-200 focus:border-[#FCB043]'
                }`}
                placeholder="Please describe your project in detail. Include any specific requirements, features, or goals you have in mind..."
              />
              {errors.projectDetails && <p className="text-red-500 text-sm mt-1">{errors.projectDetails.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-[#063837] to-[#FCB043] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-shadow text-lg flex items-center gap-2 mx-auto disabled:opacity-50"
              >
                <FaPaperPlane className="w-4 h-4" />
                {isSubmitting ? 'Sending...' : 'Send Quote Request'}
              </button>
              <p className="text-sm text-[#242B29] mt-4">
                We'll respond within 24 hours with a detailed quote
              </p>
            </div>
          </form>
        </motion.div>
      </div>
      <Toaster 
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: 'linear-gradient(135deg, #E0F0DF 0%, #ffffff 100%)',
              color: '#063837',
              border: '2px solid #FCB043',
              borderRadius: '12px',
              padding: '16px',
              fontWeight: '600'
            }
          },
          error: {
            style: {
              background: 'linear-gradient(135deg, #E0F0DF 0%, #ffffff 100%)',
              color: '#063837',
              border: '2px solid #ef4444',
              borderRadius: '12px',
              padding: '16px',
              fontWeight: '600'
            }
          }
        }}
      />
    </section>
  );
}