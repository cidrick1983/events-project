import { getFeaturedEvents } from '@/DUMMY_DATA';
import EventList from '@/components/events/event-list';

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}
