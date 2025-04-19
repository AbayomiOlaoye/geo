import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const courses = [
  {
    title: 'A 3-Day Liberation Crusade',
    image: '/images/management.webp',
    date: '25/08/2025',
    upcoming: true,
  },
  {
    title: 'A 3-Day Liberation Crusade',
    image: '/images/risk-mgt.webp',
    date: '25/03/2025',
    upcoming: false,
  },
  {
    title: 'A 3-Day Liberation Crusade',
    image: '/images/logistics.webp',
    date: '25/08/2025',
    upcoming: false,
  },
  {
    title: 'Strength for the Weak',
    image: '/images/project.webp',
    date: '25/01/2025',
    upcoming: false,
  }
];

const StatisticsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      '(max-width: 767px)': {
        slides: { perView: 1, spacing: 15 },
      },
      '(min-width: 768px) and (max-width: 1023px)': {
        slides: { perView: 2, spacing: 15 },
      },
      '(min-width: 1024px) and (max-width: 1279px)': {
        slides: { perView: 3, spacing: 15 },
      },
      '(min-width: 1280px)': {
        slides: { perView: 3, spacing: 15 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    loop: true,
    initial: 0,
  })

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      viewport={{ once: true }}
      className="relative py-20 mt-9 overflow-hidden"
    >
      <article className='container max-w-[1500px] px-[5%] mx-auto'>
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/bg/recent.webp"
            alt="Graduation Background"
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>

        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-4 text-[var(--light)]">Upcoming & recent Programmes</h2>
          <p className="text-white text-center md:max-w-[600px] mx-auto mt-4 mb-12">
            Discover how we are actively sharing the Gospel and serving our communities through various outreach initiatives.
          </p>

          <div className="relative">
            <div className="keen-slider mx-4" ref={sliderRef}>
              {courses.map((course, index) => (
                <div key={index} className="keen-slider__slide">
                  <CourseCard course={course} />
                </div>
              ))}
            </div>

            {loaded && instanceRef.current && (
              <>
              <ArrowLeft
                  onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
                  disabled={currentSlide === 0}
                />

                <ArrowRight
                  onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
                  disabled={currentSlide === (courses.length - instanceRef.current.options.breakpoints["(min-width: 1280px)"].slides.perView)}
                />

              </>
            )}
          </div>
        </div>
      </article>
    </motion.section>
  );
};

function ArrowLeft(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <HiChevronLeft className={"arrow arrow--left top-[-5%] lg:top-[50%] transition-all duration-200 text-[var(--choc)] absolute left-[5%] opacity-70 lg:left-0 rounded-full hover:bg-[var(--light)] bg-blue-100 w-10 h-10" + disabeld} onClick={props.onClick} />
  )
}

function ArrowRight(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <HiChevronRight
      onClick={props.onClick}
      className={"arrow arrow--right absolute top-[-5%] lg:top-[50%] left-[85%] lg:left-[100%] transition-all text-[var(--choc)] opacity-70 duration-200 w-10 h-10 rounded-full hover:bg-[var(--light)] bg-blue-100" + disabeld}
    />
  )
}

const CourseCard = ({ course }) => {
  return (
    <motion.div
      className="border border-[var(--light)] mt-10 rounded-tr-4xl rounded-bl-4xl p-2 my-5 w-[85%] md:w-full mx-auto overflow-hidden relative"
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-54">
        <Image
          src={course.image}
          alt={course.title}
          layout="fill"
          objectFit="cover"
          className="rounded-tr-4xl"
        />
      </div>
      <div className="p-5">
        <motion.article
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, repeatDelay: 0.3 } }}
          className="flex gap-4 items-center justify-between text-center"
        >
          {course.upcoming && <p className="text-white p-1 rounded-full px-3 bg-[var(--choc)] mb-4">Upcoming</p>}
          {!course.upcoming && <p className="text-black p-1 rounded-full px-3 bg-[var(--light)] mb-4">Ended</p>}
          <p className="text-[var(--darker)] p-1 rounded-full px-3 bg-white mb-4">{course.date}</p>
        </motion.article>
        <h3 className="font-medium mb-4 h-16 text-white text-lg">{course.title}</h3>
        {course.upcoming && (
          <Link href="/get-involved" className="block w-full border font-bold text-center pl-12 border-[var(--light)] text-[var(--choc)] p-4 rounded-bl-3xl bg-[var(--light)] hover:bg-transparent hover:text-white transition duration-200">
            Partner with Us
          </Link>)
        }
        {!course.upcoming && (
          <Link href={`/event/${course.title}`} className="block w-full border font-bold text-center pl-12 border-[var(--light)] text-[var(--choc)] p-4 rounded-bl-3xl bg-[var(--light)] hover:bg-transparent hover:text-white transition duration-200">
            View Details
          </Link>)
        }
      </div>
    </motion.div>
  );
};

export default StatisticsSection;
