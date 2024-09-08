// NewsCard.js
import React from 'react';
import styles from './NewsCard.module.css'; // Import CSS Module

const NewsCard = ({ headline, summary, source }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.headline}>{headline}</h2>
      <p className={styles.summary}>{summary}</p>
      <p className={styles.source}>Source: {source}</p>
    </div>
  );
};

export default NewsCard;
