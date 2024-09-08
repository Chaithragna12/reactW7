import React from 'react';
import styles from './ProgressBar.module.css';

export default function ProgressBar({ progress }) {
  return (
    <div className={styles.progressBarContainer}>
      <div 
        className={styles.progressBarFill} 
        style={{ width: `${progress}%` }}>
      </div>
    </div>
  );
}
