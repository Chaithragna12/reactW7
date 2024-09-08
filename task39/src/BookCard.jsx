import React from 'react';
import PropTypes from 'prop-types';
import styles from './BookCard.module.css'; // Import the CSS Module

const BookCard = ({ title, author, yearPublished }) => {
  return (
    <div className={styles.bookCard}>
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{yearPublished}</p>
    </div>
  );
};

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  yearPublished: PropTypes.number.isRequired,
};

export default BookCard;
