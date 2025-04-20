"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Mission from "@/components/OnAMission";
import TestimonialsSection from "@/components/Testimonials";
import Impact from "@/components/Impact";
import ImpactStats from "@/components/ImpactStats";
import PopularCoursesCarousel from "@/components/PopularCourses";

export default function OurImpact() {

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
              <h1 className="font-bold text-2xl lg:text-4xl md:leading-12 text-[var(--light)] md:max-w-[490px] max-w-[80%]">Our Impact</h1>
            </div>
          </div>
          <Image src="/bg/admission-bg.webp" className="w-full h-full object-cover rounded-br-[50px] lg:rounded-br-[100px] absolute" alt="Welcome" width={500} height={300} />
        </div>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
          className="w-full"
        >
          <article className="container mx-auto py-14 p-4 px-5 md:px-[5%] max-w-[1500px] flex flex-col items-center justify-center gap-4">
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-center w-full lg:justify-between gap-12"
            >
              <div className="flex flex-col justify-center gap-4">
                <h2 className="font-bold text-2xl lg:text-4xl md:leading-12 mb-3 text-[var(--choc)]">
                  Igniting Faith, Building Community, Transforming Lives
                </h2>
                <p className="leading-8">
                  At GEO, our passion as a Chosen and Sent group is to share the transformative
                  message of salvation through Jesus Christ, empowering individuals to discover
                  hope, experience redemption, and cultivate a living relationship with God.
                  We believe every person deserves to hear the Good News and find a supportive
                  community to grow in their faith.
                </p>
                <p className="leading-8">
                  This page shares stories and highlights the tangible ways God is working
                  through this ministry, thanks to the prayers, dedication, and generosity
                  of our team, volunteers, and partners like you.
                </p>
              </div>
              <Image
                src="/impact/impact-change.webp"
                alt="Social Impact"
                priority
                width={300}
                height={200}
                className="max-w-full w-[50%] h-auto"
                objectFit="contain"
              />
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-center w-full lg:justify-between gap-6 pt-10"
            >
              <div className="flex flex-col items-center justify-center gap-4">
                <h2 className="font-bold text-2xl lg:text-4xl md:leading-12 text-center">
                  Our Approach to Impact
                </h2>
                <p className="text-[var(--choc)] pb-5">All about Kingdom Growth</p>
                <p className="text-left lg:text-center leading-8">
                  Our ultimate measure of success is changed lives – individuals coming to faith in
                  Jesus Christ and growing deeper in their relationship with Him. While we track
                  participation in events and use of resources, we know that true transformation
                  is the work of the Holy Spirit. We focus on faithfully proclaiming the Gospel,
                  creating welcoming environments for exploration and discipleship, and trusting
                  God for the results. We are committed to being good stewards of the resources
                  entrusted to us, ensuring every effort contributes to sharing God&apos;s love
                  and truth effectively.
                </p>
              </div>
            </motion.article>
          </article>
        </motion.section>
        <Impact />
        <ImpactStats />
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
          className="w-full"
        >
          <article className="container mx-auto py-14 p-4 px-5 md:px-[5%] max-w-[1500px] flex flex-col items-center justify-center gap-4">
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-center w-full lg:justify-between gap-12"
            >
              <div className="flex flex-col justify-center gap-4">
                <p className="leading-8">
                  We rejoice in how God has worked, but we know the mission is ongoing.
                  So many in the country and beyond still need to hear the life-saving message of Jesus.
                  Our goal is to equip and send out more outreach teams, launch discipleship programs in new areas,
                  increase our online Gospel presence, partner with 25 more churches.
                </p>
                <p className="leading-8">
                  We press forward, trusting God to open doors and prepare hearts for His Word.
                </p>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
              viewport={{ once: true }}
              className="bg-[var(--light)] flex flex-col items-center w-full gap-6 p-5 pt-10 mt-8 rounded-2xl"
            >
              <div className="flex flex-col items-center justify-center gap-4">
                <h2 className="font-bold text-[var(--darker)] text-2xl lg:text-4xl md:leading-12 text-center">
                  Partner with Us
                </h2>
                <p className="text-[var(--choc)] pb-5">Pray . Serve . Give</p>
                <p className="text-center leading-8 md:max-w-[60%]">
                  Reaching our community for Christ requires a partnership of prayer, service,
                  and generosity. Will you join us in sharing the hope of salvation?
                  Your involvement, no matter the form, makes an eternal difference.
                </p>
              </div>
              <Link href="/get-involved" className="bg-[var(--choc)] my-5 hover:bg-transparent hover:border hover:border-[var(--choc)] hover:text-[var(--choc)] text-white font-bold px-4 py-3 rounded-tr-lg rounded-bl-lg w-fit transition duration-300 active:scale-95">
                Support Us
              </Link>
            </motion.article>
          </article>
        </motion.section>
        <Mission />
        <PopularCoursesCarousel />
        <TestimonialsSection />
      </motion.article>
    </>
  );
}
