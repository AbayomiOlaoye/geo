'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaSquareFacebook, FaSquarePhone } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

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

  const sendAChat = () => {
    const message = 'Hello, I would like to know more about your organization.';
      window.open(`https://wa.me/${2348143930856}?text=${message}`, '_blank');
  }

  return (
    <footer className='bg-[var(--choc)] w-full footer'>
      <div className='mx-auto pt-12 p-5 px-5 md:px-[5%]'>
        <div className='flex flex-col md:flex-row gap-10 items-start justify-between'>
          <section className='flex flex-col gap-3 md:w-[40%]'>
            <Link href="/" className="flex items-center cursor-pointer text-white">
              <Image src="/logo-geo.jpg" className='max-w-[30%]' alt="GEO Logo" width={300} height={30} />
            </Link>
            <small className='text-[#fff] text-[15px] leading-[20.46px]'>
              We are a Christian organization dedicated to spreading the message of
              hope and redemption through Jesus Christ. Our mission is to empower
              individuals and communities through education, support, and outreach programs.
            </small>

            <div>
              <h2 className='text-[var(--light)] pb-2 max-lg:pb-0 font-[800] mt-6'>FOLLOW US ON:</h2>
              <div className='flex gap-6 items-center pt-3'>
                <FaSquareWhatsapp title="Send a WhatsApp Message" className='w-8 h-8 text-[#fff] cursor-pointer hover:scale-125 transition-transform' onClick={sendAChat} />
                <a href="https://www.facebook.com/share/1B4ynCUUBG" title="Follow us on Facebook" target='_blank' className='w-7 cursor-pointer hover:scale-125 transition-transform'>
                  <FaSquareFacebook className='w-8 h-8 text-[#fff]' />
                </a>
                <a href="https://www.instagram.com/godsent.evangelical.outreach?igsh=ZXd1M3VkdWhpaTJ5" target='_blank' title="Follow us on Instagram" className='w-6 cursor-pointer hover:scale-125 transition-transform'>
                  <AiFillInstagram className='w-8 h-8 text-[#fff]' />
                </a>
                <a href="mailto:godsentevangelicaloutreach@gmail.com" title="Send us an email" className='w-8 cursor-pointer hover:scale-125 transition-transform'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4H2v16h20V4zM2 4l10 8L22 4" />
                  </svg>
                </a>
              </div>
            </div>
          </section>
          <section className=''>
            <h2 className='text-[var(--light)] font-[800] pb-5 uppercase'>Quick Links</h2>
            <div className='flex flex-col gap-4 text-[15px] text-white'>
              {nav.map((item) => (
                <Link key={item.id} href={item.link} className='cursor-pointer transition-all min-w-fit hover:text-[var(--light)] hover:scale-105'>
                  {item.title}
                </Link>
              ))}
            </div>
          </section>

          <div className='flex flex-col gap-2'>
            <h2 className='text-[var(--light)] pb-2 max-lg:pb-0 font-[800]'>CONTACT US</h2>
            <article className='flex flex-col gap-4'>
              <address className='text-[#fff] text-[15px]'>
                Godsent Evangelical Outreach, <br />
                No. 22 Ekiomado street, <br />
                Off S&T Road, Uselu-Lagos Road,<br />
                Benin City, Edo State.
              </address>
              <div className='flex gap-2 items-center'>
                <FaSquarePhone className='w-6 h-6 text-[#fff]' />
                <a href="tel:+2348143930856" className='text-[#fff] text-[15px]'>+2348143930856</a>
              </div>
              <div className='flex gap-2 items-center'>
                <FaSquarePhone className='w-6 h-6 text-[#fff]' />
                <a href="tel:+23470653270966" className='text-[#fff] text-[15px]'>+23470653270966</a>
              </div>
            </article>
          </div>
        </div>
        <div className='w-full h-[1px] bg-[#fff] my-12 mb-4'></div>
        <small className='flex items-center justify-center gap-1 text-white py-2 text-[15px]'>
          &copy;
          <span className='text-[14px] lg:text-[15px] text-[#fff]'>
            {`${currentYear} GEO. All Rights Reserved`}
          </span>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
