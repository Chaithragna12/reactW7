// EventCard.js
import React from 'react';
import styles from './EventCard.module.css'; // Import CSS Module

const EventCard = ({ eventName, date, location }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.eventName}>{eventName}</h2>
      <p className={styles.date}>Date: {date}</p>
      <p className={styles.location}>Location: {location}</p>
    </div>
  );
};

export default EventCard;
