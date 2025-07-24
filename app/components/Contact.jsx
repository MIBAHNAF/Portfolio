import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '../../assets/assets'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'e663d728-8acc-4059-a55d-9cebcee225d3', 
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to: 'mirhnafali717@gmail.com'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  return (
    <div 
      id='contact' 
      className='w-full px-3 sm:px-6 md:px-8 lg:px-[12%] py-8 sm:py-10 scroll-mt-20 relative'
      style={{
        backgroundImage: 'url(/footer-bg-color.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Lighter overlay for better blending */}
      <div className="absolute inset-0 bg-white/20"></div>
      
      <div className="relative z-10">
        <h4 className='text-center mb-2 text-sm sm:text-base md:text-lg font-Ovo text-gray-600'>Connect with me</h4>
        <h2 className='text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Ovo mb-6 sm:mb-8 md:mb-12 lg:mb-20 text-gray-800'>
          Get in touch
        </h2>
        
        <div className='max-w-4xl mx-auto'>
          <p className='text-center text-gray-600 font-Ovo mb-6 sm:mb-8 md:mb-12 text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-2'>
            I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
          </p>
          
          <form onSubmit={handleSubmit} className='space-y-4 sm:space-y-6'>
            {/* Name and Email Row */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6'>
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className='w-full px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/60 backdrop-blur-sm text-gray-800 placeholder-gray-500 text-xs sm:text-sm md:text-base'
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className='w-full px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/60 backdrop-blur-sm text-gray-800 placeholder-gray-500 text-xs sm:text-sm md:text-base'
                />
              </div>
            </div>
            
            {/* Message */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                required
                rows={5}
                className='w-full px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/60 backdrop-blur-sm text-gray-800 placeholder-gray-500 resize-none text-xs sm:text-sm md:text-base'
              />
            </div>
            
            {/* Submit Button */}
            <div className='flex justify-center pt-2'>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-12 py-2.5 sm:py-3 md:py-4 bg-gray-800 text-white font-medium rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-xs sm:text-sm md:text-base ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit now'}
                {!isSubmitting && (
                  <Image src={assets.right_arrow_white} alt='' className='w-3 sm:w-4 md:w-5' />
                )}
              </button>
            </div>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className='text-center p-3 sm:p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-xs sm:text-sm'>
                Thank you for your message! I'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className='text-center p-3 sm:p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-xs sm:text-sm'>
                Sorry, there was an error sending your message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
