"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TestimonialsSection from "@/components/Testimonials";
import ImpactStats from "@/components/ImpactStats";
import PopularCoursesCarousel from "@/components/PopularCourses";
import Ways from "@/components/Ways";

const impact = [
  "Fund outreach events like rallies and concerts, providing platforms to share the Good News with those who haven't heard.",
  'Organize resource training programs that empower volunteers to confidently share their personal faith story and the message of salvation one-on-one.',
  "Support the creation and facilitation of welcoming small groups where new believers can study God's Word, pray, ask questions, and grow in a supportive community.",
  "Utilize digital platforms to share powerful testimonies, Gospel messages, and words of encouragement, reaching people wherever they are.",
  "Enable community service projects (like food, scholarships, or practical help) that meet tangible needs and open hearts to the love of Jesus.",
  "Provide Essential Resources: Help supply Bibles, discipleship materials, and other resources needed for spiritual growth and outreach.",
];

export default function GetInvolved() {

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
              <h1 className="font-bold text-2xl lg:text-4xl md:leading-12 text-[var(--light)] md:max-w-[490px] max-w-[80%]">Get Involved</h1>
            </div>
          </div>
          <Image src="/testimonials/scholars.webp" className="w-full h-full object-cover rounded-br-[50px] lg:rounded-br-[100px] absolute" alt="Welcome" width={500} height={300} />
        </div>
        <section className="py-12 w-full">
          <div className="container mx-auto max-w-[1500px] px-5 lg:px-[5%]">
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-center w-full lg:justify-between gap-12"
            >
              <div className="flex flex-col justify-center gap-4">
                <h2 className="font-bold text-2xl lg:text-4xl md:leading-12 mb-3 text-[var(--choc)]">
                  Your Partnership Makes Eternal Impact Possible
                </h2>
                <p className="leading-8">
                  Your generous contributions, whether through prayer, volunteering, or financial gifts;
                  directly empower this ministry to fulfill its God-given purpose. Partnership with GEO enables us to:
                </p>
                <ul className="pl-5">
                  {impact.map((item, index) => (
                    <li key={index} className="list-disc leading-8">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <article className="flex flex-col items-center justify-center gap-4 bg-[var(--light)] p-5 lg:p-6 rounded-tr-4xl">
                <h2 className="font-bold text-base text-center py-2 px-8 rounded-b-full w-fit lg:text-md md:leading-12 mb-3 text-white bg-[var(--choc)]">
                  Call to Give
                </h2>
                <p className="leading-8 text-center">
                  Partnering with ₦50,000 contributes towards hosting an impactful community outreach event.
                </p>
                <Link href="/donate" className="bg-[var(--choc)] my-5 hover:bg-transparent hover:border hover:border-[var(--choc)] hover:text-[var(--choc)] text-white font-bold px-4 py-3 rounded-tr-lg rounded-bl-lg w-fit transition duration-300 active:scale-95">
                  Donate Now
                </Link>
                <Image src="/impact/get-involved.png" className="w-full h-full object-cover rounded-br-[50px] lg:rounded-br-[100px] mt-5" alt="Welcome" width={500} height={300} />
              </article>
            </motion.article>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-full">
              
            </div>
          </div>
        </section>
        <Ways />
        <PopularCoursesCarousel />
        <ImpactStats />
        <TestimonialsSection />
      </motion.article>
    </>
  );
}
