import { motion } from "framer-motion";
import Image from "next/image";

const why = [
  {
    id: '01',
    title: 'Our Mission',
    description: 'Our core purpose is to propagate the Gospel of Jesus Christ.',
  },
  {
    id: '02',
    title: 'Our Motivation',
    description: 'To proclaim the Gospel of Jesus Christ to those who have not heard or accepted it and provide a safe and supportive environment for people to explore their faith.',
  },
  {
    id: '03',
    title: 'Our Methodology',
    description: "We provide resources and guidance, building community, holding evangelistic events, training personal evangelism, establishing small discipleship groups and serving the community to show Christ's love.",
  },
  {
    id: '04',
    title: 'Our Message',
    description: 'We believe that Jesus Christ is the Son of God, who died for our sins and rose again, offering salvation to all who believe in Him.',
  }
];

const LearnWithUs = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      viewport={{ once: true }}
      className="bg-white w-full relative overflow-hidden lg:mt-14 learn"
    >
      <article className="container max-w-[1500px] px-[5%] mx-auto">
        <motion.article
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
          className="flex flex-col items-center lg:items-start justify-center gap-4 py-10"
        >
          <h1 className="text-[var(--darker)] font-bold text-2xl lg:text-4xl text-center">Our Mission & Motivation</h1>
          <p className="text-center text-[var(--choc)] max-w-[70%]">
            Sharing the Message of Salvation
          </p>
        </motion.article>
        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-8">
          {why.map((item) => (
            <motion.article
              key={item.id + item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
              viewport={{ once: true }}
              className="bg-white max-w-[80%] md:max-w-full mx-auto shadow-lg rounded-lg p-4 lg:px-6 py-10 flex flex-col gap-4 items-center text-center lg:items-start lg:text-justify"
            >
              <h2 className="w-16 h-16 bg-[var(--light)] text-[var(--choc)] rounded-tr-[20px] rounded-bl-[20px] flex items-center justify-center font-bold text-2xl">
                {item.id}
              </h2>
              <h2 className="text-[var(--choc)] font-bold text-lg">{item.title}</h2>
              <p className="">{item.description}</p>
            </motion.article>
          ))}
        </article>

      </article>
    </motion.section>
  )
}

export default LearnWithUs