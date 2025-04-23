'use client';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';
import Autoplay from 'embla-carousel-autoplay';
import EmblaCarousel from 'embla-carousel-react';

const testimonials = [
  {
    id: uuidv4(),
    image: "/images/testimony-one.webp",
    name: "Testimony One",
  },
  {
    id: uuidv4(),
    image: "/images/testimony-two.webp",
    name: "Testimony Two",
  },
  {
    id: uuidv4(),
    image: "/images/testimony-three.webp",
    name: "Testimony Three",
  },
  {
    id: uuidv4(),
    image: "/images/testimony-four.webp",
    name: "Testimony Four",
  },
  {
    id: uuidv4(),
    image: "/images/testimony-five.webp",
    name: "Testimony Five",
  },
  {
    id: uuidv4(),
    image: "/images/testimony-six.webp",
    name: "Testimony Six",
  },
  {
    id: uuidv4(),
    image: "/testimonials/beneficiaries.webp",
    name: "Beneficiary Seven",
  },
  {
    id: uuidv4(),
    image: "/testimonials/joint-scholarship.webp",
    name: "Joint Scholarship",
  },
  {
    id: uuidv4(),
    image: "/testimonials/scholars.webp",
    name: "Scholar Eight",
  }
];

const TestimonialsSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaRef, emblaApi] = EmblaCarousel(
    { 
      loop: true, 
      draggable: true, 
      align: 'center', 
      containScroll: 'trimSnaps',
      slidesToScroll: isMobile ? 1 : 2
    }, 
    [Autoplay()]
  );

  const slidesPerPage = isMobile ? 1 : 2;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (emblaApi) {
      const handleSelect = () => {
        setActiveIndex(emblaApi.selectedScrollSnap());
      };

      emblaApi.on('select', handleSelect);
      return () => emblaApi.off('select', handleSelect);
    }
  }, [emblaApi]);

  const numberOfDots = Math.ceil(testimonials.length / slidesPerPage);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
      className="w-full relative bg-secondary text-primary"
    >
      <article className="container mx-auto bg-secondary relative py-14 p-4 px-5 md:px-[5%] 2xl:px-0 max-w-[1200px] flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl lg:text-4xl text-[var(--choc)] font-bold mt-5 text-center max-w-[80%]">Testimonials</h2>
          
          <article className="flex flex-col items-center text-[var(--choc)] justify-center">
            <p className="mt-5 text-center text-black md:max-w-[80%] lg:max-w-[60%] lg:leading-8">
              We are grateful to God for the lives He has touched through our ministry. Here are some of the testimonies from our members and participants.
            </p>
          </article>
        </div>

        <div className="mt-4 w-full relative">
          <motion.article
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full bg-white top-[3rem] left-0 right-0"
          >
            <div className="relative w-full mb-20">
              <div className="embla" ref={emblaRef}>
                <div className="embla__container my-10">
                  {testimonials.map((review) => (
                    <div key={review.id} className="embla__slide px-4 md:max-w-[60%]">
                      <Image
                        src={review.image}
                        alt={review.name}
                        className="rounded-lg object-cover w-full h-[300px] lg:h-[400px] shadow-lg"
                        width={500}
                        height={300}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-[-45px] pt-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-1">
                {Array.from({ length: numberOfDots }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => emblaApi && emblaApi.scrollTo(index)}
                    className={`${
                      activeIndex === index
                        ? "bg-[var(--choc)] w-2.5 h-2.5 rounded-full scale-125"
                        : "bg-[var(--light)] w-2 h-2 rounded-full opacity-60"
                    } transition-all transform`}
                    style={{
                      transition: 'transform 0.3s ease-in-out, background-color 0.3s ease',
                    }}
                  ></button>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      </article>

    </motion.section>
  )
}

export default TestimonialsSection;
