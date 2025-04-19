"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Verify = () => {
  const [certificateId, setCertificateId] = useState('');
  const [verificationData, setVerificationData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleVerify = async () => {
    setLoading(true);
    setError(null);
    setVerificationData(null);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/verify/${certificateId}`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Verification failed');
      }

      const data = await response.json();
      setVerificationData(data);
    } catch (err) {
      setError(err.error || 'Verification failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      viewport={{ once: true }}
      className="bg-white w-full min-h-screen overflow-hidden"
    >
      <div className="flex relative mx-auto mt-14 flex-col w-[100%] h-[37vh] md:h-[40vh] justify-center items-center">
        <div className="absolute inset-0 mt-[-18vh] lg:w-[50%] lg:h-[20vh] left-0 z-10 flex flex-col items-center rounded-br-[50px] top-[45vh]">
          <div className="self-start p-5 lg:p-6 bg-[var(--choc)] w-full rounded-tr-4xl">
            <h1 className="font-bold text-2xl lg:text-4xl md:leading-12 text-[var(--light)] md:max-w-[490px] max-w-[80%]">Verify Certificate</h1>
          </div>
        </div>
        <Image src="/bg/verify-bg.jpg" className="w-full h-full object-cover rounded-br-[50px] lg:rounded-br-[100px] absolute" alt="Welcome" width={500} height={300} />
      </div>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      className="container mx-auto py-10"
    >
      <h1 className="text-2xl lg:text-3xl text-[var(--choc)] font-bold my-4 text-center">Certificate Verification</h1>
      <p className="text-blue-500 text-center mb-6">Enter the certificate ID to verify its authenticity.</p>

      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline">{error}</span>
      </div>}

      <div className="max-w-5xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-[var(--choc)] text-sm font-bold mb-2" htmlFor="certificateId">Certificate ID:</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-[var(--choc)] leading-tight focus:outline-none focus:shadow-outline"
            id="certificateId"
            type="text"
            placeholder="Enter Certificate ID"
            value={certificateId}
            onChange={(e) => setCertificateId(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-[var(--choc)] hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleVerify}
            disabled={loading}
          >
            {loading ? 'Verifying...' : 'Verify Certificate'}
          </button>
        </div>

        {verificationData && (
          <div className="mt-6 p-4 bg-blue-100 border border-[var(--choc)] text-[var(--choc)] rounded">
            <h3 className="font-bold p-3">Certificate Details:</h3>
            <p>Student Name: {verificationData.studentName}</p>
            <p>Course: {verificationData.course}</p>
            <p>Certificate Number: {verificationData.certificateNumber}</p>
            <p>Membership Status: {verificationData?.status}</p>
            <p>Award Date: {verificationData.awardDate}</p>
          </div>
        )}
      </div>
    </motion.div>
  </motion.article>
  );
};

export default Verify;