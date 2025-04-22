"use client";

import { useEffect } from 'react';
import { format } from 'date-fns';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedEvent = ({ event }) => {
  if (!event) return null;

  const formattedDate = event.date ? format(event.date, 'MMMM d, yyyy') : 'Date TBD';
  const photoGallery = event.media?.photos || [];
  const videoGallery = event.media?.videos || [];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      aria-labelledby="featured-event-title"
      className="mb-12 md:mb-16 bg-gray-50 rounded-lg shadow-lg overflow-hidden p-4 sm:p-6 lg:p-8"
      variants={itemVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-start">
        <motion.div
          className="w-full aspect-[3/4] relative rounded-md overflow-hidden shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Image
            src={event.flyerUrl || '/images/events/placeholder-flyer.jpg'}
            alt={`${event.title} Flyer`}
            layout="fill"
            sizes='(100vw)'
            objectFit="cover"
            priority
          />
        </motion.div>

        <div className="flex flex-col h-full">
          <span className="text-sm font-semibold text-[var(--darker)] uppercase tracking-wider mb-2">
            {event.isUpcoming ? 'Featured Upcoming Event' : 'Featured Past Event'}
          </span>
          <h1 id="featured-event-title" className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3">
            {event.title}
          </h1>
          <div className="space-y-2 mb-4">
            <p>
              <strong className="font-semibold text-[var(--choc)]">Date:</strong> {formattedDate}
            </p>
            {event.time && <p><strong className="font-semibold text-[var(--choc)]">Time:</strong> {event.time}</p>}
            {event.location && (
              <p>
                <strong className="font-semibold text-[var(--choc)]">Location:</strong>{' '}
                {event.addressLink ? (
                  <a href={event.addressLink} target="_blank" rel="noopener noreferrer" className="text-[var(--primary-color)] hover:underline">
                  {event.location}
                  </a>
                ) : (
                  event.location
                )}
              </p>
            )}
          </div>
          <p className="text-gray-700 mb-6 flex-grow">{event.description}</p>

          {event.isUpcoming ? (
            event.registrationLink ? (
              <Link href={event.registrationLink} passHref>
                <motion.a
                  className="inline-block bg-[var(--primary-color)] text-white text-center font-semibold py-3 px-8 rounded-md hover:bg-opacity-90 transition-colors shadow-sm text-lg"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Register Now
                </motion.a>
              </Link>
            ) : (
              <span className="text-gray-500 italic">More details coming soon.</span>
            )
          ) : (
            <span className="inline-block bg-gray-200 text-gray-600 font-medium py-2 px-4 rounded-md text-sm">
              This Event Has Ended
            </span>
          )}
        </div>
      </div>

      {!event.isUpcoming && (photoGallery.length > 0 || videoGallery.length > 0) && (
        <motion.div
          className="mt-10 pt-8 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Event Photos & Videos</h2>

          {photoGallery.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-medium text-gray-700 mb-4">Photos</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {photoGallery.map((photoUrl, index) => (
                  <motion.div
                    key={index}
                    className="aspect-square relative rounded overflow-hidden shadow cursor-pointer hover:shadow-md transition-shadow"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={photoUrl}
                      alt={`Event photo ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {videoGallery.length > 0 && (
            <div>
              <h3 className="text-xl font-medium text-gray-700 mb-4">Videos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {videoGallery.map((video, index) => (
                <div key={index} className="mb-4">
                  <h4 className="text-base font-medium text-gray-600 mb-2">{video.title}</h4>
                  <div className="aspect-video bg-black rounded overflow-hidden shadow">
                  {video.type === 'youtube' && (
                    <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    ></iframe>
                  )}
                  {video.type === 'vimeo' && (
                    <iframe
                    className="w-full h-full"
                    src={`https://player.vimeo.com/video/${video.id}?title=0&byline=0&portrait=0`}
                    title={video.title}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    ></iframe>
                  )}
                  </div>
                </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      )}
    </motion.section>
  );
};

const EventCard = ({ event }) => {
  const formattedDate = event.date ? format(event.date, 'MMM d, yyyy') : 'Date TBD';
  const cardVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -10 }
  };

  return (
    <Link href={`/events/${event.slug}`} passHref>
      <motion.a
        className="block group bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden"
        variants={cardVariants}
        layout
      >
        <div className="w-full aspect-[16/9] relative">
          <Image
            src={event.flyerUrl || '/images/events/placeholder-flyer.jpg'}
            alt={`${event.title} Flyer`}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-[var(--choc)] mb-1 group-hover:text-[var(--primary-color)] transition-colors">
            {event.title}
          </h3>
          <p className="text-sm text-gray-500 mb-2">
            {formattedDate}{event.time ? ` • ${event.time}` : ''}
          </p>
          <span className="text-sm font-medium text-[var(--primary-color)] group-hover:underline">
            {event.isUpcoming ? 'Learn More' : 'View Recap'} →
          </span>
        </div>
      </motion.a>
    </Link>
  );
};

export default function EventPageClientLayout({ featuredEvent, upcomingEvents, pastEvents, error }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (error) {
    return <div className="container mx-auto px-4 py-16 text-center text-red-600">{error}</div>;
  }
  if (!featuredEvent && upcomingEvents.length === 0 && pastEvents.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Events</h1>
        <p className="text-xl text-gray-600">Check back soon for upcoming events and highlights from past gatherings!</p>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
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
              <h1 className="font-bold text-2xl lg:text-4xl md:leading-12 text-[var(--light)] md:max-w-[490px] max-w-[80%]">Events</h1>
            </div>
         </div>
         <Image src="/events/liberation/liberation-women-worship.webp" className="w-full h-full object-cover rounded-br-[50px] lg:rounded-br-[100px] absolute" alt="Welcome" width={500} height={300} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        className="container max-w-[1500px] px-5 lg:px-[5%] mx-auto mt-5 py-12 lg:py-28"
      >
        {featuredEvent && <FeaturedEvent event={featuredEvent} />}

        {upcomingEvents.length > 0 && (
          <section aria-labelledby="upcoming-events-title" className="mb-12 md:mb-16">
            <h2 id="upcoming-events-title" className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8 border-b pb-2">
              Upcoming Events
            </h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <AnimatePresence>
                {upcomingEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </AnimatePresence>
            </motion.div>
          </section>
        )}

        {pastEvents.length > 0 && (
          <section aria-labelledby="past-events-title">
            <h2 id="past-events-title" className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8 border-b pb-2">
              Recent Event Highlights
            </h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <AnimatePresence>
                {pastEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </AnimatePresence>
            </motion.div>
          </section>
        )}

      </motion.div>
    </motion.article>
  );
}