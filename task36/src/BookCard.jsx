// BookCard.js
import React from 'react';
import styles from './BookCard.module.css'; // Import CSS Module

const BookCard = ({ title, author, yearPublished }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.author}>Author: {author}</p>
      <p className={styles.year}>Published: {yearPublished}</p>
    </div>
  );
};

export default BookCard;
