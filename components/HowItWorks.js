import { motion } from "framer-motion";

const how = [
  {
    id: '01',
    title: 'Choose a course',
    description: 'Explore our wide range of courses and select the one that suits you best.',
  },
  {
    id: '02',
    title: 'Register and pay',
    description: 'Sign up and complete the payment process to secure your spot.',
  },
  {
    id: '03',
    title: 'Start learning',
    description: 'Access course materials and start your learning journey.',
  },
];

const HowItWorks = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      viewport={{ once: true }}
      className="bg-white w-full overflow-x-hidden"
    >
      <article className="container max-w-[1500px] px-[5%] mx-auto">
        <motion.article
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
          className="flex flex-col items-center lg:items-start justify-center gap-4 py-10"
        >
          <h1 className="text-[var(--choc)] font-bold text-3xl lg:text-4xl text-center mt-5">How it Works</h1>
          <p className="text-center text-blue-500 max-w-[70%]">
            Gaining mastery can be seamless
          </p>
        </motion.article>
        <article className="flex flex-col md:flex-row mx-auto my-5 gap-8">
          {how.map((item) => (
            <motion.article
              key={item.id + item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
              viewport={{ once: true }}
              className="bg-white p-5 shadow-lg rounded-lg py-12 flex flex-col gap-4 items-center text-center"
            >
              <h2 className="w-16 h-16 bg-[var(--choc)] rounded-tr-[20px] rounded-bl-[20px] flex items-center justify-center text-white font-bold text-2xl">
                {item.id}
              </h2>
              <h2 className="text-blue-500 font-bold text-xl">{item.title}</h2>
              <p className="text-gray-600 max-w-[80%]">{item.description}</p>
            </motion.article>
          ))}
        </article>

      </article>
    </motion.section>
  )
}

export default HowItWorks;
