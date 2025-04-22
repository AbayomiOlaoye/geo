import { getAllProcessedEvents, getProcessedEventBySlug } from '@/lib/event-data';
import EventPageClientLayout from '@/components/Events/EventInfo';

export default async function EventsPage({ params }) {
const { slug } = await params;
  const slugArray = await params && await slug ? slug : null;
  const link = await slugArray && await slugArray?.length > 0 ? slugArray[0] : null;
  let error = null;
  let featuredEvent = null;
  let upcomingEvents = [];
  let pastEvents = [];

  try {
  const allEvents = getAllProcessedEvents();

  if (!allEvents || allEvents.length === 0) {
  } else {
    if (link) {
      featuredEvent = getProcessedEventBySlug(link);
      if (!featuredEvent) {
        console.warn(`Event slug "${link}" not found, using default.`);
      }
    }

    if (!featuredEvent) {
      const upcoming = allEvents.filter(e => e.isUpcoming);
      if (upcoming.length > 0) {
        featuredEvent = upcoming[0];
      } else if (allEvents.length > 0) {
         featuredEvent = allEvents[0];
      }
    }

    upcomingEvents = allEvents.filter(
      event => event.isUpcoming && event.id !== featuredEvent?.id
    ).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    pastEvents = allEvents.filter(
      event => !event.isUpcoming && event.id !== featuredEvent?.id
    );
  }

  } catch (err) {
  console.error("Error processing event data:", err);
  error = "Failed to load event data.";
  }

  return (
  <EventPageClientLayout
    featuredEvent={featuredEvent}
    upcomingEvents={upcomingEvents}
    pastEvents={pastEvents}
    error={error}
  />
  );
}

export async function generateStaticParams() {
  try {
  const allEvents = getAllProcessedEvents();
  const paramsList = allEvents.map((event) => ({
    slug: [event.slug],
  }));

  return paramsList;
  } catch (err) {
    console.error("Error in generateStaticParams:", err);
    return [];
  }
}