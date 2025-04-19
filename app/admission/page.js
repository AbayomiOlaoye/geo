"use client";

import {Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from 'next/navigation';
import { motion } from "framer-motion";
import Image from "next/image";
import { useFormik } from 'formik';
import { useForm } from '@formspree/react';
import * as Yup from 'yup';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { MdCancel } from 'react-icons/md';
import Mission from "@/components/OnAMission";
import StatisticsSection from "@/components/Stats";
import TestimonialsSection from "@/components/Testimonials";
import Faqs from "@/components/Faqs";

const passkey = process.env.NEXT_PUBLIC_PASSKEY;

function AdmissionPageContent() {
  const [state, handleSubmit] = useForm(passkey);
  const searchParams = useSearchParams();
  const selectedCourse = searchParams.get('course');
  const [showTray, setShowTray] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (state.succeeded) {
      setShowTray(true);
      setTimeout(() => {
        setShowTray(false);
      }, 4000);
    }
  }, [state.succeeded]);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      course: selectedCourse || '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.string().required('Phone Number is required'),
      course: Yup.string().required('Select a course'),
    }),
    onSubmit: async (values) => {
      const { name, email, phone, course } = values;
      const data = {
        name,
        email,
        phone,
        course,
      };

      try {
        await handleSubmit(data);
        formik.resetForm();
      } catch (error) {
        console.error('Error submitting form:', error);
      }
      setShowTray(true);
      setTimeout(() => {
        setShowTray(false);
      }, 4000);
      formik.resetForm();
    }
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      formik.setErrors({});
    }, 3000);

    return () => clearTimeout(timer);
  }, [formik.errors]);
  
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
              <h1 className="font-bold text-2xl lg:text-4xl md:leading-12 text-[var(--light)] md:max-w-[490px] max-w-[80%]">Admission</h1>
            </div>
          </div>
          <Image src="/bg/admission-bg.webp" className="w-full h-full object-cover rounded-br-[50px] lg:rounded-br-[100px] absolute" alt="Welcome" width={500} height={300} />
        </div>
        <article className="flex-col mt-[5vh] w-full">
          <p className="md:text-[20px] max-w-[80%] lg:max-w-[50%] mx-auto text-[var(--choc)] text-center leading-10">
            Our professional programs are now open for admission! We provide advanced training and
            professional education tailored for career-driven individuals through expert-led
            tutorials, ensuring you gain industry-relevant skills.
          </p>
        </article>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
          className="w-full text-[var(--choc)]"
        >
          <article className="container mx-auto py-14 p-4 px-5 md:px-[5%] max-w-[1500px] flex flex-col items-center justify-center gap-4">
            <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            viewport={{ once: true }}
            className="flex flex-col items-center w-full justify-center gap-6 py-10"
          >
            <h2 className="text-blue-500 font-bold text-lg lg:text-3xl text-center max-w-[80%]">Application Details</h2>
            <p className="text-center max-w-[70%]">All courses are available both online and offline, with a duration of four months.</p>
            <div className="w-full rounded-bl-4xl flex items-center justify-center p-5">
              <Link href="/all-programmes" className="bg-[var(--choc)] hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-tr-lg rounded-bl-lg transition duration-300 active:scale-95">
                View Available Courses
              </Link>
            </div>
          </motion.article>
          </article>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: '-100%' }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ delay: 0.5 }}
          className="w-full"
        >
          <div className="mx-auto px-5 md:px-[5%] pb-10 container max-w-[1500px]">
            <h2 className="text-2xl text-[var(--choc)] font-semibold text-center mb-4">Admission Form</h2>
            <p className="text-blue-500 mb-6 text-center">
              Fill the form below and we will be in touch.
            </p>

            <motion.form
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onSubmit={formik.handleSubmit}
              className="max-w-[500px] mx-auto flex flex-col gap-3 justify-center"
            >
              <div className="mb-4">
                <label htmlFor="name" className="block text-base text-[var(--choc)] font-medium mb-2">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className="shadow appearance-none border rounded w-full h-[41px] py-2 px-3 text-[var(--choc)] leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Name"
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-500 text-sm">{formik.errors.name}</div>
                ) : null}
              </div>

              <article className="flex items-center flex-col lg:flex-row gap-4">
                <div className="mb-4 w-full">
                  <label htmlFor="email" className="block text-base text-[var(--choc)] font-medium mb-2">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className="shadow appearance-none border rounded w-full h-[41px] py-2 px-3 text-[var(--choc)] leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Email"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-500 text-sm">{formik.errors.email}</div>
                  ) : null}
                </div>

                <div className="mb-4 w-full">
                  <label htmlFor="phone" className="block text-base text-[var(--choc)] font-medium mb-2">
                    Phone Number:
                  </label>
                    <PhoneInput
                      placeholder="Enter phone number"
                      value={formik.values.phone}
                      onChange={(phone) => formik.setFieldValue('phone', phone)}
                      onBlur={() => formik.setFieldTouched('phone', true)}
                      defaultCountry="ng"
                      name="phone"
                      international
                    />
                  {formik.touched.phone && formik.errors.phone ? (
                    <div className="text-red-500 text-sm">{formik.errors.phone}</div>
                  ) : null}
                </div>
              </article>

              <div className="mb-4">
                <label htmlFor="course" className="block text-base text-[var(--choc)] font-medium mb-2">
                  Select Your Preferred Course:
                </label>
                <select
                  id="course"
                  name="course"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.course}
                  className="shadow appearance-none border rounded w-full h-[41px] py-2 px-3 text-[var(--choc)] leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="" label="Select a course" />
                  <option value="HRM" label="Human Resources Management" />
                  <option value="BRM" label="Business Risk Management" />
                  <option value="BLM" label="Business and Logistics Management" />
                  <option value="PM" label="Project Management" />
                  <option value="HSE" label="Health, Safety, and Environment" />
                  <option value="EST" label="Employability Skills Training" />
                </select>
                {formik.touched.course && formik.errors.course ? (
                  <div className="text-red-500 text-sm">{formik.errors.course}</div>
                ) : null}
              </div>

              <button
                type="submit"
                className="bg-[var(--choc)] mt-2 active:scale-95 hover:bg-blue-500 transition-all text-white font-bold py-3 cursor-pointer rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </motion.form>
          </div>

          {showTray && (
            <motion.section
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => setShowTray(false)}
              className="fixed top-0 left-0 z-[500000] w-full h-full bg-[var(--choc)] bg-opacity-85 flex items-center justify-center cursor-pointer"
            >
              <MdCancel className="absolute left-5 top-10 lg:top-14 lg:left-14 text-2xl cursor-pointer text-white" onClick={() => setShowTray(false)} />
              <div
                onClick={(e) => e.stopPropagation()}
                className="text-center bg-primary rounded-[20px] p-4 lg:p-16 py-12 flex flex-col items-center justify-center gap-8"
              >
                <Image src="/images/success.gif" alt="Success" className="w-[40%]" width={100} height={100} />
                <p className="text-xl text-white font-semibold">We got your message! See you soon.</p>
              </div>
            </motion.section>
          )}
        </motion.section>
        <Mission />
        <StatisticsSection />
        <TestimonialsSection />
        <Faqs />
      </motion.article>
    </>
  );
}

export default function AdmissionPage() {
  return (
    <Suspense fallback={<p className="text-center py-4">Loading admission page...</p>}>
      <AdmissionPageContent />
    </Suspense>
  );
}