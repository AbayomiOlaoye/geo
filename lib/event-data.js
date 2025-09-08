export const allEventsData = [
  {
    id: 'altar-2025',
    title: "Altar Against Altars",
    slug: "altar-against-altars-2025",
    date: "2025-08-06T17:00:00",
    time: "5:00 PM",
    location: "Emmanuel Baptist Church, Urhonigbe",
    addressLink: null,
    description: "A powerful 3-day program that will take place in August 2025. The event will focus on spiritual warfare and breaking generational curses through prayer and worship.",
    flyerUrl: "/flyer/altar.jpeg",
    media: {
      photos: [
        "/events/altars/altar1.jpeg",
        "/events/altars/altar2.jpeg",
        "/events/altars/altar3.jpeg",
        "/events/altars/altar4.jpeg",
        "/events/altars/altar5.jpeg",
        "/events/altars/altar6.jpeg",
        "/events/altars/altar7.jpeg",
        "/events/altars/altar8.jpeg",
        "/events/altars/altar9.jpeg",
        "/events/altars/altar10.jpeg",
      ],
    }
  },
  {
    id: 'empowerment-2025',
    title: "GEO Empowered A Lady",
    slug: "geo-empowerment-program-2025",
    date: "2025-07-23T17:00:00",
    time: "6:00 PM",
    location: "Community",
    addressLink: null,
    description: "We empowered a lady with a sewing machine and cash to start her business. This initiative supports entrepreneurship and self-sufficiency, enabling individuals to create sustainable livelihoods.",
    flyerUrl: "/images/empowerment.jpeg",
    media: {
      photos: [
        "/images/empowerment.jpeg",
      ],
    }
  },
  {
    id: 'widows-2025',
    title: "International Widows' Day 2025",
    slug: "celebrating-widows-2025",
    date: "2025-06-23T17:00:00",
    time: "9:00 AM",
    location: "Church",
    addressLink: null,
    description: "We celeberated widows in our churches with a special event that includes worship, preaching, and humanitarian aid. This event uplifted and supported 32 widows across various denominations and states, providing them with resources and encouragement.",
    flyerUrl: "/events/widows.jpeg",
    media: {
      photos: [
        "/events/widows.jpeg",
        "/events/church_support.jpeg",
        "/events/widows_helped.jpeg",
      ],
    }
  },
  {
    id: 'house-rent',
    title: "House Rent & Apprenticeship Support",
    slug: "house-rent-support-2025",
    date: "2025-05-23T17:00:00",
    time: "",
    location: "Uzea, Edo State",
    addressLink: null,
    description: "We provided support for house rent and apprenticeship for two (2) people from the recently concluded crusade in Uzea. This initiative empowered participants by alleviating financial burdens and providing them with opportunities for sustainable livelihoods.",
    flyerUrl: "/events/houserents.jpeg",
    media: {
      photos: [
        "/events/houserents.jpeg",
      ],
    }
  },
  {
    id: 'no-more-sorrow',
    title: "No More Sorrow",
    slug: "no-more-sorrow-may28",
    date: "2025-05-28T19:00:00",
    time: "7.00 PM Daily",
    location: "Assemblies of God Church, Ebhoieki-Uzea, Edo State",
    addressLink: null,
    description: "We trust God for a powerful 3-day crusade that will see many souls saved and lives transformed. The event will feature powerful worship, preaching, and testimonies of God's miraculous works. We are also looking forward to some humanitarian aids that will bless the community.",
    flyerUrl: "/flyer/no-more-sorrow.webp",
    media: null
  },
  {
    id: 'a-3-day-liberation-crusade',
    title: "A 3-Day Liberation Crusade",
    slug: "a-3-day-liberation-crusademar18",
    date: "2025-03-18T17:00:00",
    time: "5:00 PM - 9:00 PM",
    location: "Central Primary School Field, Ekpon-Igueben, Edo State",
    addressLink: null,
    description: "It was a 3-day crusade that took place in Ekpon-Igueben, Edo State, Nigeria. The event was filled with powerful worship, preaching, and testimonies of God's miraculous works. To the glory of God, souls were saved and we indulged in some humanitarian aids that saw 10 students received scholarships till the completion of their secondary school education.",
    flyerUrl: "/flyer/liberation.webp",
    media: {
      photos: [
        "/events/liberation/liberation-abundance.webp",
        "/events/liberation/liberation-children-worship.webp",
        "/events/liberation/liberation-converts.webp",
        "/events/liberation/liberation-osaze.webp",
        "/events/liberation/liberation-prayer.webp",
        "/events/liberation/liberation-preacher.webp",
        "/events/liberation/liberation-preaching.webp",
        "/events/liberation/liberation-spirit.webp",
        "/events/liberation/liberation-testimonial.webp",
        "/events/liberation/liberation-women-worship.webp",
      ],
      videos: [
        { type: 'youtube', id: 'fnaz4j_YMbA', title: 'My Story Must Change' },
      ]
    }
  },
];


function processEventData(eventArray) {
    const now = new Date();
    const processed = eventArray.map(event => ({
        ...event,
        date: new Date(event.date),
        isUpcoming: new Date(event.date) > now,
    }));

    processed.sort((a, b) => b.date.getTime() - a.date.getTime());
    return processed;
}

export function getAllProcessedEvents() {
    return processEventData(allEventsData);
}

export function getProcessedEventBySlug(slug) {
    const allProcessed = getAllProcessedEvents();
    return allProcessed.find(event => event.slug === slug) || null;
}