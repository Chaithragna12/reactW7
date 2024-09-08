// CourseCard.js
import React from 'react';
import styles from './CourseCard.module.css'; // Import CSS Module

const CourseCard = ({ courseName, instructor, duration }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.courseName}>{courseName}</h2>
      <p className={styles.instructor}>Instructor: {instructor}</p>
      <p className={styles.duration}>Duration: {duration} hours</p>
    </div>
  );
};

export default CourseCard;
