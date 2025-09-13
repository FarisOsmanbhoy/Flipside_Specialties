import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Building } from 'lucide-react';
import Button from './Button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    navigate('/thank-you');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="bg-teal-900 py-24 relative overflow-hidden">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l9.9-9.9h-2.828zM32.657 0l10.485 10.485-1.414 1.414L30.243 0h2.414zm-13.313 0L8.858 10.485l1.415 1.414L21.757 0h-2.414zm2.828 0l-8.485 8.485 1.415 1.414L24.586 0h-2.414zm13.314 0l8.485 8.485-1.414 1.414L27.414 0h2.414zM32.657 0L21.172 11.485l1.414 1.414L34.07 1.415 32.657 0zm-13.313 0L30.828 11.485l-1.414 1.414L17.93 1.415 19.344 0z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left Content */}
          <div className={`w-full lg:w-1/2 text-white space-y-8 transition-all duration-1000 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold leading-tight">
              Let's Build Something<br />
              Exceptional Together
            </h2>
            
            <p className="text-xl text-teal-100">
              Need quotes, answers, or samples? We're ready.
            </p>

            <div className="space-y-4 text-teal-100">
              <div className="flex items-center gap-2">
                <Building className="h-5 w-5 flex-shrink-0" />
                <div>
                  <p>5829 W Sam Houston Pkwy N #906</p>
                  <p>Houston, TX 77041</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>832.844.2521</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a 
                  href="mailto:info@flipsidespecialties.com"
                  className="text-white hover:text-orange-400 transition-colors"
                >
                  info@flipsidespecialties.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className={`w-full lg:w-1/2 transition-all duration-1000 delay-300 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <form onSubmit={handleSubmit} 
                  className="bg-white rounded-lg shadow-xl p-8"
                  aria-label="Contact form">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                    Company Name*
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Additional Info
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-teal-900 hover:bg-teal-800 text-white"
                  size="lg"
                >
                  Catch You on the FlipSide!
                </Button>

                <p className="text-sm text-gray-500 text-center mt-4">
                  We'll get back to you within 1 business day.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;