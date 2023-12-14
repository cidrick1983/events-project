import Link from 'next/link';
import classes from './event-item.module.css';

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const rawDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const correctedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={'/' + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className={classes.date}>
            <time>{rawDate}</time>
          </div>
          <div className={classes.address}>
            <address>{correctedAddress}</address>
          </div>
          <div className={classes.actions}>
            <Link
              className="text-gray-700 hover:text-red-600 text-lg font-semibold"
              href={exploreLink}
            >
              Explore Event
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
