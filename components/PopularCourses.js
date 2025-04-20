"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Link from 'next/link';

const courses = [
  {
    title: 'Community Revivals',
    image: '/images/community-revival.webp',
    text: 'Igniting spiritual renewal through focused community gatherings, prayer, and Gospel messages.',
    action: 'Get Involved',
  },
  {
    title: 'Special Outreaches',
    image: '/images/special-outreaches.webp',
    text: "Targeted initiatives and events designed to share Christ's message or address specific community needs.",
    action: 'Partner with Us',
  },
  {
    title: 'Evangelism',
    image: '/images/evangelism.webp',
    text: 'Actively sharing the Gospel of Jesus Christ, inviting others to experience salvation and relationship with God.',
    action: 'Join Us',
  },
  {
    title: 'Charity Works/Humanitarian Aid',
    image: '/images/charity.webp',
    text: "Extending God's love through practical help: scholarships, feeding programs, and essential provisions for those in need.",
    action: 'Donate',
  },
  {
    title: 'Community Development Projects',
    image: '/images/community-dev.webp',
    text: "Improving local life by providing basic amenities and essential resources, demonstrating Christ's love in action.",
    action: 'Support Us',
  },
];

const PopularCoursesCarousel = () => {
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
    <section className="w-full bg-[var(--choc)] overflow-hidden mt-10 py-14">
      <div className="container mx-auto max-w-[1500px] lg:px-[5%]">
        <motion.article
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-4 py-3"
        >
          <h2 className="text-[var(--beige)] font-bold text-2xl lg:text-3xl text-center max-w-[80%]">Our Programmes & Outreaches</h2>
          <p className="text-center text-[var(--light)] max-w-[70%]">This is how we reachout</p>
        </motion.article>
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
    </section>
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
        <h3 className="font-semibold mb-4 h-12 text-[var(--light)] text-xl">{course.title}</h3>
        <p className="text-white h-24 mb-4">{course.text}</p>
        <Link href="/get-involved" className="block w-full border font-bold text-center pl-12 border-[var(--light)] text-[var(--choc)] p-4 rounded-bl-3xl bg-[var(--light)] hover:bg-transparent hover:text-white transition duration-200">
          {course.action}
        </Link>
      </div>
    </motion.div>
  );
};

export default PopularCoursesCarousel;
