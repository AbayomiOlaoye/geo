"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import StatisticsSection from "@/components/Stats";
import TestimonialsSection from "@/components/Testimonials";
import Faqs from "@/components/Faqs";

const courses = [
  {
    title: 'Human Resource Management',
    image: '/images/management.webp',
    code: 'HRM',
  },
  {
    title: 'Project Management',
    image: '/images/project.webp',
    code: 'PM',
  },
  {
    title: 'Business Risk Management',
    image: '/images/risk-mgt.webp',
    code: 'BRM',
  },
  {
    title: 'Business and Logistics Management',
    image: '/images/logistics.webp',
    code: 'BLM'
  },
  {
    title: 'Health, Safety, and Environment',
    image: '/images/safety.webp',
    code: 'HSE',
  },
  {
    title: 'Employability Skills Training',
    image: '/images/employability.webp',
    code: 'EST',
  }
];

export default function Courses() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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
              <h1 className="font-bold text-2xl lg:text-4xl md:leading-12 text-[var(--light)] md:max-w-[490px] max-w-[80%]">All Courses</h1>
            </div>
          </div>
          <Image src="/bg/courses-bg.webp" className="w-full h-full object-cover rounded-br-[50px] lg:rounded-br-[100px] absolute" alt="Welcome" width={500} height={300} />
        </div>
        <section className="py-12 w-full">
          <div className="container mx-auto max-w-[1500px] lg:px-[5%]">
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center gap-4 pt-6"
            >
              <h2 className="text-[var(--choc)] font-bold text-2xl lg:text-4xl text-center max-w-[90%]">Our Available Courses</h2>
              <p className="text-center text-blue-500 max-w-[70%]">You have a list to choose from</p>
            </motion.article>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-full">
              {courses.map((course, index) => (
                <motion.div
                  key={index + course.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.95 }}
                  viewport={{ once: true }}
                  className="border border-blue-500 mt-10 h-[450px] rounded-tr-4xl rounded-bl-4xl p-2 w-[90%] mx-auto lg:w-[85%] shadow-md overflow-hidden relative"
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative h-64">
                    <Image
                      src={course.image}
                      alt={course.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-tr-4xl"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold mb-4 h-[56px] text-[var(--choc)]">{course.title}</h3>
                    <Link href={`/admission?course=${course.code}`} className="block w-full pl-12 border border-blue-500 text-blue-500 p-4 rounded-bl-3xl hover:bg-[var(--choc)] hover:text-white transition duration-200">
                      Select Course
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <StatisticsSection />
        <TestimonialsSection />
        <Faqs />
      </motion.article>
    </>
  );
}
