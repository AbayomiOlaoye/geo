"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import LearnWithUs from "@/components/LearnWithUs";
import PopularCoursesCarousel from "@/components/PopularCourses";
import Mission from "@/components/OnAMission";
import StatisticsSection from "@/components/Stats";
import TestimonialsSection from "@/components/Testimonials";
import TeamVolunteersSection from "@/components/Team";

export default function Home() {

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
        <div className="flex relative mx-auto mt-14 flex-col w-[100%] h-[80vh] justify-center items-center">
          <motion.div
            className="absolute inset-0 lg:w-[50%] lg:h-[20vh] left-0 z-10 flex flex-col items-center rounded-br-[50px] top-[45vh] lg:top-[44vh]"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8, delay: 1 } }}
            viewport={{ once: true }}
          >
            <div className="self-start p-5 lg:px-10 bg-[var(--light)] w-full rounded-tr-4xl trans">
              <h1 className="font-extrabold text-3xl md:text-5xl text-[#4F2F18] md:leading-12">Hope and Redemption</h1>
              <p className="text-white text-[20px] py-5">Discover a Living Relationship with God</p>
            </div>
            <div className="relative bg-[var(--choc)] w-full flex items-center justify-center rounded-br-[50px] p-5">
              <Link href="/about-us" className="bg-transparent border-white border font-bold text-center hover:text-[var(--choc)] text-white hover:bg-[var(--light)] p-4 w-[60%] rounded-tr-lg rounded-bl-lg transition duration-300 active:scale-95">
                Learn More
              </Link>
            </div>
          </motion.div>
          <Image src="/images/hero-bg.svg" className="w-full h-full object-cover rounded-br-[100px] lg:rounded-br-[100px] absolute" alt="Welcome" width={500} height={300} />
        </div>
        <article className="flex flex-col mt-[3vh] gap-3 w-full max-w-[1500px] mx-auto p-5 lg:px-[5%]">
          <p className="text-[4vw] md:text-[20px] lg:max-w-[50%] leading-8">
            At GEO, we share the transformative message of salvation through Jesus Christ, empowering individuals just like you.          </p>
          <Link href="/making-great-impact" className="bg-[var(--choc)] my-5 hover:bg-transparent hover:border hover:border-[var(--choc)] hover:text-[var(--choc)] text-white font-bold px-4 py-3 rounded-tr-lg rounded-bl-lg w-fit mt-2 transition duration-300 active:scale-95">
            Explore Our Mission
          </Link>
        </article>
        <LearnWithUs />
        <TeamVolunteersSection />
        <PopularCoursesCarousel />
        <Mission />
        <StatisticsSection />
        <TestimonialsSection />
      </motion.article>
    </>
  );
}
