'use client';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from 'emailjs-com';

export default function ContactSection() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();

  const onSubmit = async (data) => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    const templateParams = {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, userId);
      toast.success('Message sent successfully!');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('EmailJS error:', error);
    }
  };

  return (
    <>
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
      <section className="py-20 md:px-6">
        <div className="px-8 sm:max-w-[90%] md:max-w-[85%] xl:max-w-[80%] mx-auto ">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-24">
            <motion.div
              className="bg-white p-8 rounded-3xl shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-[#063837] mb-8">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="lg:flex lg:gap-4 lg:space-y-0 space-y-6">
                  <div className="lg:flex-1">
                    <label className="block text-[#063837] font-semibold mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 border border-[#E0F0DF] rounded-lg focus:outline-none focus:border-[#FCB043] transition-colors"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="lg:flex-1">
                    <label className="block text-[#063837] font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className="w-full px-4 py-3 border border-[#E0F0DF] rounded-lg focus:outline-none focus:border-[#FCB043] transition-colors"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-[#063837] font-semibold mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    {...register('subject', { required: 'Subject is required' })}
                    className="w-full px-4 py-3 border border-[#E0F0DF] rounded-lg focus:outline-none focus:border-[#FCB043] transition-colors"
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[#063837] font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={5}
                    className="w-full px-4 py-3 border border-[#E0F0DF] rounded-lg focus:outline-none focus:border-[#FCB043] transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-semibold transition-shadow flex items-center justify-center gap-2 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-[#063837] to-[#FCB043] text-white hover:shadow-lg'
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-[#063837] mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-3xl shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FCB043] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#063837]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#063837] mb-2">Email</h3>
                      <p className="text-[#242B29]">jastutesolutions@gmail.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-3xl shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FCB043] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#063837]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#063837] mb-2">Phone</h3>
                      <p className="text-[#242B29]">+2547-29-144-533</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-3xl shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FCB043] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#063837]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#063837] mb-2">Address</h3>
                      <p className="text-[#242B29]">Nairobi, Kenya</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}