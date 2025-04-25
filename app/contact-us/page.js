'use client';

import { useState, useEffect } from 'react'
import Image from 'next/image';
import { useForm } from '@formspree/react';
import { AnimatePresence, motion } from 'framer-motion';
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquarePhone, FaSquareFacebook } from 'react-icons/fa6';
import { Formik } from 'formik';

const passkey = process.env.NEXT_PUBLIC_PASSKEY;

const ContactForm = () => {
  const [state, handleSubmit] = useForm(passkey);
  const [showResponse, setShowResponse] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [purpose, setPurpose] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (state.succeeded) {
      setShowResponse(true);
      setTimeout(() => {
        setShowResponse(false);
      }, 4000);
    }
  }, [state.succeeded]);

  const capitalizeName = (value) => {
    return value
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const handleValidation = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = 'Name is required.';
    } else if (!/^\S+\s+\S+$/.test(name.trim())) {
      newErrors.name = 'Name must include both first name and last name.';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      newErrors.email = 'Invalid email address.';
    }

    if (!purpose.trim()) {
      newErrors.purpose = 'Selection of purpose is required.';
    }

    if (!message.trim()) {
      newErrors.message = 'Message is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
};

const sendAChat = () => {
  const message = 'Hello, I would like to know more about your organization.';
    window.open(`https://wa.me/${2348143930856}?text=${message}`, '_blank');
}

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      handleSubmit(e);
      Formik.resetForm({
        values: {
          name: '',
          email: '',
          purpose: '',
          message: ''
        }
      });
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    }
  };

  return (
    <>
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      viewport={{ once: true }}
      className="bg-white w-full min-h-screen overflow-hidden"
    >
      <div className="flex relative mx-auto mt-14 flex-col w-[100%] h-[37vh] md:h-[40vh] justify-center items-center">
        <div className="absolute inset-0 mt-[-18vh] lg:w-[50%] lg:h-[20vh] left-0 z-10 flex flex-col items-center rounded-br-[50px] top-[45vh]">
          <div className="self-start p-5 lg:p-6 bg-[var(--choc)] w-full rounded-tr-4xl">
            <h1 className="font-bold text-2xl lg:text-4xl md:leading-12 text-[var(--light)] md:max-w-[490px] max-w-[80%]">Contact Us</h1>
          </div>
        </div>
        <Image src="/images/testimony-three.webp" className="w-full h-full object-cover rounded-br-[50px] lg:rounded-br-[100px] absolute" alt="Welcome" width={500} height={300} />
      </div>
      <AnimatePresence>
        {showResponse && (
          <motion.div
            className="fixed inset-0 flex justify-center items-center bg-opacity-70 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full mx-4 relative"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="mt-4">
                We have received your message and will get back to you shortly.
              </p>
              <motion.div
                className="absolute bottom-0 left-0 h-2 w-full bg-gradient-to-r from-[var(--choc)] to-[var(--dark)]"
                initial={{ width: '100%' }}
                animate={{ width: 0 }}
                transition={{ duration: 4, ease: 'linear' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
        <div className="inset-0 flex items-center w-full z-[600000] justify-center">
          <motion.div
            className="bg-white overflow-y-auto max-w-[1500px] mx-auto"
            initial={{ opacity: 0, y: 50, x: 100 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 50, x: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex flex-col items-center justify-between lg:flex-row p-6 gap-6 overflow-y-auto scroll w-full">
              <div className="flex flex-col gap-4 space-y-4 p-8 w-full">
                <div>
                  <h2 className="font-bold tex-lg mb-3 uppercase">
                    Contact Us
                  </h2>
                  <p className="text-lg">
                    Kindly feel free to reachout to us!
                  </p>
                </div>
                <div>
                  <h1 className="font-extrabold text-lg mb-3">Office Address:</h1>
                  <div className='flex flex-col md:flex-row gap-4 items-start'>
                    <address className='flex flex-col gap-2'>
                      <p className="text-md">No. 22 Ekiomado street,</p>
                      <p className="text-md">Off S&T Road, Uselu-Lagos Road,</p>
                      <p className="text-md">Benin City, Edo State.</p>
                    </address>
                  </div>
                </div>
                <div>
                  <h1 className="font-bold text-lg mb-3">
                    SUPPORT LINE
                  </h1>
                  <div className='flex gap-2 items-center mb-2'>
                    <FaSquarePhone className='w-6 h-6 text text-[var(--choc)]' />
                    <a href="tel:+2348143930856" className='text- text-[15px]'>+2348143930856</a>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <FaSquarePhone  className='w-6 h-6 text-[var(--choc)]' />
                    <a href="tel:+23470653270966" className='text-[15px]'>+23470653270966</a>
                  </div>
                </div>
                <div>
                  <h1 className="font-bold text-lg">SOCIALS</h1>
                  <div className='flex gap-4 items-center pt-3 text-[var(--choc)]'>
                    <FaSquareWhatsapp title="Send a WhatsApp Message" className='w-8 h-8 cursor-pointer hover:scale-125 transition-transform' onClick={sendAChat} />
                    <a href="https://www.facebook.com/share/1B4ynCUUBG" title="Follow us on Facebook" target='_blank' className='w-7 cursor-pointer hover:scale-125 transition-transform'>
                      <FaSquareFacebook className='w-8 h-8' />
                    </a>
                    <a href="https://www.instagram.com/godsent.evangelical.outreach?igsh=ZXd1M3VkdWhpaTJ5" target='_blank' title="Follow us on Instagram" className='w-6 cursor-pointer hover:scale-125 transition-transform'>
                      <AiFillInstagram className='w-8 h-8' />
                    </a>
                    <a href="mailto:godsentevangelicaloutreach@gmail.com" title="Send us a mail" className='w-8 cursor-pointer hover:scale-125 transition-transform'>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 4H2v16h20V4zM2 4l10 8L22 4" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--light)] p-6 rounded-lg w-full h-fit shadow-lg overflow-y-auto">
                <form onSubmit={handleFormSubmit} className="space-y-4 w-full">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[var(--choc)]"
                  >
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(capitalizeName(e.target.value))}
                      className="w-full mt-2 px-4 py-3 border border-[var(--choc)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--choc)] transition-all"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </label>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[var(--choc)]"
                  >
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full mt-2 px-4 py-3 border border-[var(--choc)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--choc)] transition-all"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </label>
                  <label
                    htmlFor="purpose"
                    className="block text-sm font-medium text-[var(--choc)]"
                  >
                    <select
                      id="purpose"
                      name="purpose"
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value)}
                      className="w-full mt-2 px-4 py-3 border border-[var(--choc)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--choc)] transition-all"
                    >
                      <option value="" disabled>Select Purpose</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Partnership">Partnership, Sponsorship & Donation</option>
                      <option value="Volunteer">Volunteer</option>
                      <option value="Prayer Request">Prayer Request</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Testimony">Testimony</option>
                      <option value="Collaboration">Collaboration</option>
                      <option value="Event">Event</option>
                      <option value="Support">Other Support</option>
                    </select>
                    {errors.purpose && (
                      <p className="text-red-500 text-xs mt-1">{errors.purpose}</p>
                    )}
                  </label>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[var(--choc)]"
                  >
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Type your message here..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full mt-2 px-4 pb-12 pt-2 border border-[var(--choc)] rounded-lg focus:outline-none focus:ring-1 focus:ring-[var(--choc)] transition-all"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                    )}
                  </label>
                  <div className="flex gap-4 pb-5">
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-fit mx-auto py-3 px-8 bg-[var(--choc)] mt-2 hover:bg-[var(--choc)] text-white font-bold cursor-pointer rounded focus:outline-none focus:shadow-outline transition-colors transform active:scale-95 disabled:bg-[var(--darker)] disabled:cursor-not-allowed"
                    >
                      {state.submitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.article>
    </>
  );
};

export default ContactForm;
