import { Event } from 'components/Event/Event';
import css from './EventBoard.module.css';
import PropTypes from 'prop-types';

export const EventBoard = ({ events }) => {
  return (
    <div className={css.eventBoard}>
      {events.map(({ name, location, speaker, type, time }) => (
        <Event
          key={name}
          name={name}
          location={location}
          speaker={speaker}
          type={type}
          start={time.start}
          end={time.end}
        />
      ))}
    </div>
  );
};

EventBoard.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      optionalProperty: PropTypes.string,
      requiredProperty: PropTypes.number.isRequired,
    })
  ),
};
