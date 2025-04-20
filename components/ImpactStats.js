import Image from 'next/image';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
  {
    id: 10,
    value: 300,
    label: 'New Converts',
    suffix: '+',
  },
  {
    id: 20,
    value: 6,
    label: 'Communities Reached',
    suffix: '+',
  },
  {
    id: 30,
    value: 45,
    label: "Happy Volunteers",
    suffix: '+',
  },
  {
    id: 40,
    value: 5,
    label: 'Charity Spendings',
    suffix: 'M+',
  }

];

const ImpactStats = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      viewport={{ once: true }}
      className="relative py-20 mt-9 overflow-hidden"
    >
      <article className='container lg:max-w-[1500px] max-w-[100%] px-[5%] mx-auto'>
        <div className="lg:flex grid grid-cols-2 justify-items-center md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              className="bg-[var(--light)] w-fit bg-opacity-90 rounded-tr-3xl rounded-bl-3xl shadow-lg p-6 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl lg:text-3xl text-[var(--darker)]">
                {stat.id === 40 && '₦'}
                <CountUp end={stat.value} duration={50} className='font-bold count' />
                {stat.suffix}
              </h2>
              <p className="text-sm text-[var(--darker)] max-w-[80%] mx-auto mt-2">{stat.label}</p>
            </motion.div>
          ))}
          </div>
      </article>
    </motion.section>
  );
};

export default ImpactStats;
