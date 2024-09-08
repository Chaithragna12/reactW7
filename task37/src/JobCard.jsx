// JobCard.js
import React from 'react';
import styles from './JobCard.module.css'; // Import CSS Module

const JobCard = ({ jobTitle, companyName, location }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.jobTitle}>{jobTitle}</h2>
      <p className={styles.companyName}>Company: {companyName}</p>
      <p className={styles.location}>Location: {location}</p>
    </div>
  );
};

export default JobCard;
