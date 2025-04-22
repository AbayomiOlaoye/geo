"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const nav = [
  {
    id: '01',
    title: 'Home',
    link: '/',
  },
  {
    id: '02',
    title: 'About Us',
    link: '/about-us',
  },
  {
    id: '03',
    title: 'Our Impact',
    link: '/making-great-impact',
  },
  {
    id: '04',
    title: 'Get Involved',
    link: '/get-involved',
  },
  {
    id: '05',
    title: 'Events',
    link: '/events',
  },
  {
    id: '06',
    title: 'Contact Us',
    link: '/contact-us',
  }
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

return (
  <motion.header
    className="inset-x-0 mt-0 z-50 w-full bg-transparent absolute"
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -100 }}
    transition={{ duration: 0.5 }}
  >
    <div className="bg-white flex">
      <div className="mx-auto w-full max-w-[1500px] py-3 px-3 lg:px-[5%] sm:px-6">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="flex flex-1 items-center lg:mr-3 lg:flex-none">
            <p className="ml-3 text-center text-[3vw] md:text-[15px] font-medium text-black">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                stroke="currentColor" aria-hidden="true"   className="mr-2 text-[var(--choc)] h-6 w-6 inline">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z">
                </path>
              </svg>
                Help us spread hope to those in need.
            </p>
          </div>
          <div className="mt-2 w-full flex-shrink-0 lg:mt-0 lg:w-auto">
            <Link
              href="https://www.paystack.com/pay/give-to-geo"
              target="_blank"
              className="flex items-center justify-center rounded-md border border-transparent bg-[var(--choc)] px-4 py-2 text-sm font-medium text-white shadow-sm hover:opacity-70 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[var(--dark)] focus:ring-offset-2 transition-all duration-200 ease-in-out"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </div>
    <nav className="">
      <article className="p-6 px-5 md:px-[5%] w-full mx-auto flex items-center justify-between gap-6">
        <article className="flex items-center justify-center">
          <Link href="/" className="cursor-pointer w-full" onClick={() => setIsOpen(false)}>
            <Image src="/logo-geo.jpg" alt="GEO Logo" className="max-wu-[100%] md:w-full" width={100} height={30} />
          </Link>
        </article>

        <ul className="hidden lg:flex gap-10 items-center">
          {nav.map((item) => (
            <li key={item.id} className="text-lg">
              <Link href={item.link} className="font-bold hover:text-[var(--light)] text-white text-[1vw] transition-colors duration-300">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <motion.button
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
          className='lg:hidden z-[7899999]'
        >
          {isOpen ? (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </motion.button>

        <AnimatePresence>
          <motion.article
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className={`${isOpen ? 'fixed inset-0 min-h-[100vh] z-[50000000] top-0 transform translate-y-0 transition-transform duration-300 flex items-start justify-between w-full bg-white' : 'fixed hidden inset-0 transform -translate-y-full transition-transform duration-300'} lg:hidden`}
          >
            <ul className="flex flex-col z-[90000] text-[var(--choc)] mt-10 gap-6 py-12 px-4 w-[90vw] min-h-[80vh] items-start overflow-auto">
              {nav.map((item) => (
                <li key={item.id} className="text-lg border-b-2 border-[var(--choc)] pb-5 w-full">
                  <Link href={item.link} onClick={toggleMenu} className='hover:text-light transition-all duration-300 w-full'>{item.title}</Link>
                </li>
              ))}
            </ul>
            {isOpen && (
            <svg className="w-10 h-10 mt-12 mr-5 text-[var(--choc)]" fill="none" onClick={toggleMenu} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          )}
          </motion.article>
        </AnimatePresence>

        <Link href="https://www.paystack.com/pay/give-to-geo" target="_blank" className="hidden lg:flex items-center rounded-tr-lg rounded-bl-lg justify-center border border-transparent bg-white px-6 py-4 text-sm font-bold text-[var(--choc)] shadow-sm hover:bg-[var(--light)] active:scale-95 focus:outline-none focus:ring-2 focus:ring-text-choc-950 focus:ring-offset-2 transition-all duration-200 ease-in-out">
          Support GEO
        </Link>
      </article>
    </nav>
  </motion.header>
)};

export default Navigation;
