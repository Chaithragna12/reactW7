import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieCard.module.css'; // Assuming you're using CSS Modules

const MovieCard = ({ title, director, releaseYear }) => {
  return (
    <div className={styles.movieCard}>
      <h2>{title}</h2>
      <p>Director: {director}</p>
      <p>Release Year: {releaseYear}</p>
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired,
};

export default MovieCard;
