"use client";

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { MdContentCopy } from 'react-icons/md';
import { GiCheckMark } from 'react-icons/gi';

const Ways = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [isViewed, setIsViewed] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const sendAChat = () => {
    const message = 'Hello, I have some inquiries about non-cash donations.';
    window.open(`https://wa.me/${2348143930856}?text=${message}`, '_blank');
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      viewport={{ once: true }}
      className="bg-white w-full overflow-hidden"
    >
      <article className="container max-w-[1500px] px-5 lg:px-[5%] mx-auto mt-5">
        <motion.article
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-4 py-10"
        >
          <h1 className="font-bold text-2xl lg:text-4xl text-center">Ways to Get Involved</h1>
          <p className="text-center text-[var(--choc)] max-w-[80%]">
            Your generous investment in the Kingdom makes the difference
          </p>

          <p className="text-center max-w-[80%] mt-6 mx-auto">
            Your financial generosity, time, skills, and prayers are invaluable resources and powerful
            acts of worship and partnership that fuels every aspect of this ministry. We are committed
            to faithful stewardship of every gift received.
          </p>
        </motion.article>

        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            viewport={{ once: true }}
            className="bg-white max-w-[80%] md:max-w-full mx-auto shadow-lg rounded-lg p-4 lg:px-6 py-10 flex flex-col gap-4 items-center text-center lg:items-start lg:text-justify"
          >
            <h2 className="w-16 h-16 bg-[var(--light)] text-[var(--choc)] rounded-tr-[20px] rounded-bl-[20px] flex items-center justify-center font-bold text-2xl">
              01
            </h2>
            <h2 className="text-[var(--choc)] font-bold text-lg">Online Giving</h2>
            <p className="">
              Give securely online today via credit card, debit card, or bank transfer.
              It&apos;s quick, easy, and allows your gift to be put to work immediately.
            </p>
            <Link href="/get-involved" className="bg-[var(--choc)] my-5 hover:bg-transparent hover:border hover:border-[var(--choc)] hover:text-[var(--choc)] text-white px-4 py-3 rounded-tr-lg rounded-bl-lg w-fit transition duration-300 active:scale-95">
              Donate Now
            </Link>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            viewport={{ once: true }}
            className="bg-white max-w-[80%] md:max-w-full mx-auto shadow-lg rounded-lg p-4 lg:px-6 py-10 flex flex-col gap-4 items-center text-center lg:items-start lg:text-justify"
          >
            <h2 className="w-16 h-16 bg-[var(--light)] text-[var(--choc)] rounded-tr-[20px] rounded-bl-[20px] flex items-center justify-center font-bold text-2xl">
              02
            </h2>
            <h2 className="text-[var(--choc)] font-bold text-lg">Offline Bank Transfer</h2>
            <p className="">
              Prefer to make a transfer directly? Please click on the button below to see the account details.
            </p>
            <button
              className="bg-[var(--choc)] my-5 hover:bg-transparent hover:border hover:border-[var(--choc)] hover:text-[var(--choc)] text-white px-4 py-3 rounded-tr-lg rounded-bl-lg w-fit transition duration-300 active:scale-95"
              onClick={() => setIsViewed(!isViewed)}
            >
              {isViewed ? 'Hide Account Details' : 'View Account Details'}
            </button>
            {isViewed && (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-[var(--light)] p-4 rounded-lg shadow-md mt-4 flex flex-col gap-4"
                >
                  <h4 className="text-xl">Payment Instruction</h4>
                  <p className="max-w-[80%] mx-auto">Kindly make a transfer or bank deposit to the account details below:</p>
                  <article className="flex flex-col gap-4 relative">
                    <h5 className="">Bank Details</h5>
                    <p className="flex items-center gap-2 font-bold">
                      Account Number:
                      <span className="font-bold font-mono text-3xl text-[var(--darker)]"> 2043743113</span>
                    </p>
                    <div className={`absolute top-12 right-28 flex items-center gap-2 ${isCopied ? 'bg-[var(--choc)] rounded-lg p-1 px-3 text-[var(--light)]' : 'text-gray-500'}`}>
                      <CopyToClipboard text="2043743113" onCopy={handleCopy} title="Click to copy" className="">
                        {!isCopied ? <MdContentCopy className="" /> : <GiCheckMark className="" />}
                      </CopyToClipboard>
                      {isCopied && <span>Copied!</span>}
                    </div>
                    <p className="flex items-center font-bold gap-2">
                      Bank Name:
                      <span> First Bank of Nigeria </span>
                    </p>
                    <p className="flex items-center font-bold gap-2">
                      Account Name:
                      <span> Godsent Evangelical Outreach </span>
                    </p>
                  </article>
                </motion.div>
              </AnimatePresence>
            )}
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            viewport={{ once: true }}
            className="bg-white max-w-[80%] md:max-w-full mx-auto shadow-lg rounded-lg p-4 lg:px-6 py-10 flex flex-col gap-4 items-center text-center lg:items-start lg:text-justify"
          >
            <h2 className="w-16 h-16 bg-[var(--light)] text-[var(--choc)] rounded-tr-[20px] rounded-bl-[20px] flex items-center justify-center font-bold text-2xl">
              03
            </h2>
            <h2 className="text-[var(--choc)] font-bold text-lg">Non-Cash Gifts</h2>
            <p className="">
              We also accept gifts of assets, brand new clothing, and non-perishable food items.
              Reach out to our Support Team using any of the buttons below, for more information.
            </p>
            <div className="flex gap-4">
              <button onClick={sendAChat} className="bg-[var(--choc)] my-5 hover:bg-transparent hover:border hover:border-[var(--choc)] hover:text-[var(--choc)] text-white px-4 py-3 rounded-tr-lg rounded-bl-lg w-fit transition duration-300 active:scale-95">
                Let&apos;s Chat
              </button>

              <Link href="mailto:godsentevangelicaloutreach@gmail.com" title="Send us a mail" className="bg-[var(--choc)] my-5 hover:bg-transparent hover:border hover:border-[var(--choc)] hover:text-[var(--choc)] text-white px-4 py-3 rounded-tr-lg rounded-bl-lg w-fit transition duration-300 active:scale-95">
                Send a mail
              </Link>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            viewport={{ once: true }}
            className="bg-white max-w-[80%] md:max-w-full mx-auto shadow-lg rounded-lg p-4 lg:px-6 py-10 flex flex-col gap-4 items-center text-center lg:items-start lg:text-justify"
          >
            <h2 className="w-16 h-16 bg-[var(--light)] text-[var(--choc)] rounded-tr-[20px] rounded-bl-[20px] flex items-center justify-center font-bold text-2xl">
              04
            </h2>
            <h2 className="text-[var(--choc)] font-bold text-lg">Legacy Giving</h2>
            <p className="">Consider leaving a legacy through estate planning. Contact our support team for more information.</p>
            <Link href="/contact-us" className="bg-[var(--choc)] my-5 hover:bg-transparent hover:border hover:border-[var(--choc)] hover:text-[var(--choc)] text-white px-4 py-3 rounded-tr-lg rounded-bl-lg w-fit transition duration-300 active:scale-95">
              Contact Support Team
            </Link>
          </motion.article>
        </article>

      </article>
    </motion.section>
  )
}

export default Ways