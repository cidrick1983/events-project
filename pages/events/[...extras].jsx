import { getFilteredEvents } from '@/DUMMY_DATA';
import EventList from '@/components/events/event-list';
import ResultsTitle from '@/components/events/results-title';
import Button from '@/components/ui/button';
import ErrorAlert from '@/components/ui/error-alert';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

function FilteredEvents() {
  const router = useRouter();

  const filterData = router.query.extras; // useRouter to access query

  if (!filterData) {
    return (
      <p className="text-lg font-bold flex justify-center items-center">
        Loading...
      </p>
    );
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  // convert to numbers
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  // set rules
  if (
    numYear === NaN ||
    numMonth === NaN ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p className="text-lg font-bold flex justify-center items-center mb-6">
            Filtered dates are invalid!
          </p>
        </ErrorAlert>
        <div className="flex justify-center items-center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p className="text-lg font-bold flex justify-center items-center mb-6">
            No events found!
          </p>
        </ErrorAlert>
        <div className="flex justify-center items-center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default FilteredEvents;
