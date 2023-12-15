import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import DateIcon from '../icons/date-icon';
import classes from './event-item.module.css';
import Button from '../ui/button';

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
            <DateIcon />
            <time>{rawDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{correctedAddress}</address>
          </div>
          <div className={classes.actions}>
            <Button link={exploreLink}>
              <span>Explore Event</span>
              <span className={classes.icon}>
                <ArrowRightIcon />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
