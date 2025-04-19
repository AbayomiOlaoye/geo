import { useState } from 'react';
import { motion } from "framer-motion";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Image from 'next/image';

const faqs = [
  {
    question: "What is NIBS?",
    answer: "NIBS is an international business school dedicated to developing people and organizations.",
    list: [
      "We offer a range of professional certifications and training programs.",
      "Our courses are designed to enhance your skills and career prospects."
    ]
  },
  {
    question: "How can I enroll in a course?",
    answer: "You can enroll in a course by visiting our website and selecting the desired program.",
    list: [
      "Fill out the registration form.",
      "Make the necessary payment."
    ]
  },
  {
    question: "What are the payment options?",
    answer: "We offer various payment options including cash, credit/debit cards, bank transfers, and mobile payments.",
  },
  {
    question: "Is there any financial aid available?",
    answer: "Yes, we offer scholarships and financial aid for eligible students.",
  },
  {
    question: "What is the duration of the courses?",
    answer: "The duration of our courses varies depending on the program. Most courses range from a few weeks to several months.",
  },
  {
    question: "Are the certificates recognized?",
    answer: "Yes, our certificates are recognized by industry professionals and organizations.",
  },
  {
    question: "Can I access the course materials after completion?",
    answer: "Yes, you will have lifetime access to the course materials after completion.",
  },
  {
    question: "What if I have more questions?",
    answer: "Feel free to contact our support team for any additional questions or concerns.",
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
      className="w-full bg-white text-[var(--choc)] overflow-hidden mb-8"
    >
      <article className="container mx-auto py-14 p-4 px-5 md:px-[5%] max-w-[1500px] flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-center">Frequently Asked Questions</h2>
        </div>
        <article className="flex flex-col lg:flex-row w-full justify-between items-center gap-20">
          <ul className=" space-y-4 mt-14 w-full">
            {faqs.map((faq, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`faq-item border-b ${activeIndex === index ? 'py-6 px-4 bg-[var(--choc)] text-[#fff] rounded-lg' : ''}`}>
                  <div className='flex justify-between items-start py-3'>
                    <div className="faq-question cursor-pointer max-w-[90%]">
                      <span className="">
                        {faq.question}
                      </span>
                    </div>
                    <button
                      className="toggle-button"
                      onClick={() => toggleAnswer(index)}
                    >
                      {activeIndex === index ? <MdKeyboardArrowUp className='w-8 h-8' /> : <MdKeyboardArrowDown className='w-8 h-8' />}
                    </button>
                  </div>

                  <div
                    className={`faq-answer mt-2 transition-transform duration-1000 ease-in-out transform ${
                      activeIndex === index ? 'translate-x-0' : '-translate-x-full'
                    }`}
                  >
                    {activeIndex === index && (
                      <>
                        <p>{faq?.answer}</p>
                        {faq?.list && (
                          <ul className="list-disc pl-6">
                            {faq.list.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
          <Image src="/images/corper.webp" alt="FAQ Background" width={500} height={300} className="lg:max-w-[60%] max-w-full object-cover" />
        </article>
      </article>
    </motion.section>
  );
};

export default Faqs;
