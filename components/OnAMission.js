import '../app/globals.css';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaHandsHelping, FaPray } from "react-icons/fa";
import { MdVolunteerActivism } from "react-icons/md";

const why = [
  {
    id: <FaHandsHelping className="text-[var(--choc)] w-16 h-16 p-3 rounded-full bg-[var(--light)]" />,
    title: 'Give Hope',
    description: 'We are committed to providing hope and support to those in need. You can help us achieve this by donating or volunteering your time.',
  },
  {
    id: <MdVolunteerActivism className="text-[var(--choc)] w-16 h-16 p-3 rounded-full bg-[var(--light)]" />,
    title: 'Volunteer with Us',
    description: 'Join us in our mission to spread hope and love. We welcome volunteers from all walks of life to help us make a difference.',
  },
  {
    id: <FaPray className="text-[var(--choc)] w-16 h-16 p-3 rounded-full bg-[var(--light)]" />,
    title: 'Pray Alongside Us',
    description: 'Prayer is a powerful tool. We invite you to pray with us for the success of our mission and the well-being of those we serve.',
  }
];

const Mission = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      viewport={{ once: true }}
      className="bg-white w-full overflow-x-hidden py-12 mt-[50px] lg:mt-14 mission"
    >
      <article className="container max-w-[1500px] px-[5%] mx-auto">
        <motion.article
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
          className="flex flex-col items-center lg:items-start justify-center gap-4"
        >
          <h1 className="text-[var(--darker)] font-bold text-3xl lg:text-4xl text-center">We Are On a Mission</h1>
          <p className="text-center max-w-[70%]">
            Partner with us to spread HOPE
          </p>
        </motion.article>

        <motion.article className="flex flex-col lg:flex-row gap-8 mt-10 mission-bg">
          <Image src="/images/mission-donate.webp" alt="Learn with us" className="hidden lg:block w-[40%] object-cover rounded-4xl" width={500} height={300} />
          <article className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-10">
          <Image src="/images/mission-donate.webp" alt="Learn with us" className="block lg:hidden object-cover rounded-lg" width={500} height={300} />
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
              viewport={{ once: true }}
              className="bg-white h-fit border border-[var(--choc)] rounded-lg p-5 py-12 flex flex-col gap-4 items-center text-center"
            >
              <p className="">
                Your support empowers us to share the life-changing message of Jesus
                Christ and serve our communities.
              </p>
              <Link href="/get-invloved" className="bg-[var(--choc)] hover:bg-transparent hover:border hover:border-[var(--choc)] hover:text-[var(--choc)] text-white font-bold px-4 py-3 rounded-tr-lg rounded-bl-lg w-full mt-2 transition duration-300 active:scale-95">
                Support Us
              </Link>
            </motion.article>

            {why.map((item) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } }}
                viewport={{ once: true }}
                className="bg-white rounded-lg flex flex-col gap-4 items-center p-5 py-10 lg:py-0 lg:items-start shadow-lg lg:shadow-none"
              >  
                {item.id}
                <h2 className="text-[var(--choc)] font-bold text-xl">{item.title}</h2>
                <p className="text-gray-600 text-center lg:text-left">{item.description}</p>
              </motion.article>
            ))}
          </article>
        </motion.article>

      </article>
    </motion.section>
  )
}

export default Mission;
