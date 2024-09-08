import React from 'react';
import PropTypes from 'prop-types';
import styles from './CourseCard.module.css'; // Assuming you're using CSS Modules

const CourseCard = ({ courseName, instructor, duration }) => {
  return (
    <div className={styles.courseCard}>
      <h2>{courseName}</h2>
      <p>Instructor: {instructor}</p>
      <p>Duration: {duration} hours</p>
    </div>
  );
};

CourseCard.propTypes = {
  courseName: PropTypes.string.isRequired,
  instructor: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
};

export default CourseCard;
