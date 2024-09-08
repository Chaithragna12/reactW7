import React from 'react';
import PropTypes from 'prop-types';
import styles from './JobCard.module.css'; // Assuming you're using CSS Modules

const JobCard = ({ jobTitle, companyName, location }) => {
  return (
    <div className={styles.jobCard}>
      <h2>{jobTitle}</h2>
      <p>Company: {companyName}</p>
      <p>Location: {location}</p>
    </div>
  );
};

JobCard.propTypes = {
  jobTitle: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default JobCard;
