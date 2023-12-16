import Button from '../ui/button';
import classes from './results-title.module.css';

function ResultsTitle(props) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="mt-6 mb-6 text-lg font-bold">
        Events in {humanReadableDate}
      </h1>
      <Button link="/events">Show all events</Button>
    </section>
  );
}

export default ResultsTitle;
