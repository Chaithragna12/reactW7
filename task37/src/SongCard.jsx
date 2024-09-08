// SongCard.js
import React from 'react';
import styles from './SongCard.module.css'; // Import CSS Module

const SongCard = ({ songTitle, artist, album }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.songTitle}>{songTitle}</h2>
      <p className={styles.artist}>Artist: {artist}</p>
      <p className={styles.album}>Album: {album}</p>
    </div>
  );
};

export default SongCard;
