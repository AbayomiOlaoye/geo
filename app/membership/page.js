"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Mission from "@/components/OnAMission";

export default function Membership() {

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
              <h1 className="font-bold text-2xl lg:text-4xl md:leading-12 text-[var(--light)] md:max-w-[490px] max-w-[80%]">Membership</h1>
            </div>
          </div>
          <Image src="/images/hero-img.svg" className="w-full h-full object-cover rounded-br-[50px] lg:rounded-br-[100px] absolute" alt="Welcome" width={500} height={300} />
        </div>
        <article className="flex-col items-center md:text-[20px] text-[var(--choc)] mt-[5vh] w-full gap-5">
          <p className="max-w-[80%] lg:max-w-[50%] mx-auto text-center leading-10">
            NIBS membership is open to individuals who have completed a
            certified professional business or management course with us.
          </p>
          <p className="text-center mt-4 max-w-[80%] lg:max-w-[50%] mx-auto leading-10">
            As a NIBS member, you gain a competitive edge in the labor market
            and enjoy all rights and privileges as outlined in the School’s by-laws.
          </p>
          <div className="w-full rounded-bl-4xl flex items-center justify-center p-5">
            <Link href="/contact-us" className="bg-[var(--choc)] hover:bg-blue-500 text-white font-bold py-3 my-2 px-6 rounded-tr-lg rounded-bl-lg transition duration-300 active:scale-95">
              Join Us
            </Link>
          </div>
        </article>
        <Mission />
      </motion.article>
    </>
  );
}
