import { getEventById } from '@/DUMMY_DATA';
import EventContent from '@/components/event-detail/event-content';
import EventLogistics from '@/components/event-detail/event-logistics';
import EventSummary from '@/components/event-detail/event-summary';
// import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  // const searchParams = useSearchParams();

  // const eventId = searchParams.eventId;
  // const event = getEventById(eventId);
  console.log(event);

  if (!event) {
    return <p>Not found!</p>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;
