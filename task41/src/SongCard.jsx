import React from 'react';
import PropTypes from 'prop-types';
import styles from './SongCard.module.css'; // Assuming you're using CSS Modules

const SongCard = ({ songTitle, artist, album }) => {
  return (
    <div className={styles.songCard}>
      <h2>{songTitle}</h2>
      <p>Artist: {artist}</p>
      <p>Album: {album}</p>
    </div>
  );
};

SongCard.propTypes = {
  songTitle: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired,
};

export default SongCard;
