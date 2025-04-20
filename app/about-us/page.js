"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Mission from "@/components/OnAMission";
import StatisticsSection from "@/components/Stats";
import TestimonialsSection from "@/components/Testimonials";
import TeamVolunteersSection from "@/components/Team";

export default function About() {
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
              <h1 className="font-bold text-2xl lg:text-4xl md:leading-12 text-[var(--light)] md:max-w-[490px] max-w-[80%]">About Us</h1>
            </div>
          </div>
          <Image src="/images/community-revival.webp" className="w-full h-full object-cover rounded-br-[50px] lg:rounded-br-[100px] absolute" alt="Welcome" width={500} height={300} />
        </div>
        <article className="flex-col mt-[5vh] max-w-[1500px] items-center mx-auto p-5 lg:px-[5%] flex gap-3">
          <p className="md:text-[20px] max-w-[80%] mx-auto text-center leading-10">
            At GEO, we share the transformative message of salvation through Jesus Christ, empowering
            individuals just like you. Our mission is to equip and inspire you to make a difference
            in your community and beyond. Join us on this journey of faith, hope, and love as we
            work together to spread the message of God&apos;s grace and redemption, and engage in life-changing humanitarian services.
          </p>
          <Link href="/making-great-impact" className="bg-[var(--choc)] my-5 hover:bg-transparent hover:border hover:border-[var(--choc)] hover:text-[var(--choc)] text-white font-bold px-4 py-3 rounded-tr-lg rounded-bl-lg w-fit transition duration-300 active:scale-95">
            Explore Our Mission
          </Link>
        </article>
        <TeamVolunteersSection />
        <Mission />
        <StatisticsSection />
        <TestimonialsSection />
      </motion.article>
    </>
  );
}
