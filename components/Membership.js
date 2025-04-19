'use client'
import { motion } from "framer-motion";
import Link from "next/link";

const Membership = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
      className="w-full bg-white text-[var(--choc)]"
    >
      <article className=" container mx-auto py-10 pt-0 p-4 px-5 md:px-[5%] max-w-5xl flex flex-col items-center justify-center mem">
        <div className="flex flex-col gap-4 items-center justify-center">
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center gap-4 py-10"
          >
            <h1 className="text-white font-bold text-3xl lg:text-4xl text-center">NIBS Membership</h1>
            <p className="text-center text-[var(--light)]">
              Gaining mastery can be seamless
            </p>
          </motion.article>
          <p className="mb-6 text-center text-white max-w-[80%] lg:max-w-[60%] lg:leading-8">
            NIBS membership is open to individuals who have completed a certified professional business or management course with us.
          </p>
          <Link href="/contact-us" className="bg-[var(--choc)] hover:bg-[var(--light)] text-white hover:text-[var(--choc)] font-bold py-4 px-6 rounded-tr-lg rounded-bl-lg transition duration-300 active:scale-95">
            Become a Member
          </Link>
        </div>
      </article>

    </motion.section>
  )
}

export default Membership;
