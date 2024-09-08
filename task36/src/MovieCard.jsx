// MovieCard.js
import React from 'react';
import styles from './MovieCard.module.css'; // Import CSS Module

const MovieCard = ({ title, director, releaseYear }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.director}>Director: {director}</p>
      <p className={styles.releaseYear}>Release Year: {releaseYear}</p>
    </div>
  );
};

export default MovieCard;
