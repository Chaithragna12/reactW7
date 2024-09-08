import React from 'react';
import PropTypes from 'prop-types';
import styles from './EventCard.module.css'; // Import the CSS Module

const EventCard = ({ eventName, date, location }) => {
  return (
    <div className={styles.eventCard}>
      <h2>{eventName}</h2>
      <p>{date}</p>
      <p>{location}</p>
    </div>
  );
};

EventCard.propTypes = {
  eventName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired, // Use PropTypes.string for date if it's formatted as a string
  location: PropTypes.string.isRequired,
};

export default EventCard;
