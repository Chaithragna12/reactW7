import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewsCard.module.css'; // Assuming you're using CSS Modules

const NewsCard = ({ headline, summary, source }) => {
  return (
    <div className={styles.newsCard}>
      <h2>{headline}</h2>
      <p>{summary}</p>
      <p>Source: {source}</p>
    </div>
  );
};

NewsCard.propTypes = {
  headline: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default NewsCard;
