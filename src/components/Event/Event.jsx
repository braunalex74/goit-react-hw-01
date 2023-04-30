import PropTypes from 'prop-types';
import css from './Event.module.css';

export const Event = ({ name, location, speaker, type, start, end }) => {
  return (
    <div className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.info}>
        <li className={css.icon}></li>
        {location}
      </p>
      <p className={css.info}>
        <li className={css.icon}></li>
        {speaker}
      </p>
      <p className={css.info}>
        <li className={css.icon}></li>
        {start}
      </p>
      <p className={css.info}>
        <li className={css.icon}></li>
        Duration
      </p>
      <span className="chip free|paid|vip">Event type</span>
    </div>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
