import React from 'react';
import PropTypes from 'prop-types';
import styles from './TravelPost.module.css'; // Using CSS Modules

const TravelPost = ({ title, content, image, author }) => {
  return (
    <div className={styles.travelPost}>
      <h2>{title}</h2>
      <img src={image} alt={title} className={styles.image} />
      <p>{content}</p>
      <p className={styles.author}>Written by {author}</p>
    </div>
  );
};

TravelPost.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default TravelPost;
