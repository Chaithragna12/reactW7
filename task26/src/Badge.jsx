import React from 'react';
import styles from './Badge.module.css';

export default function Badge({ types, children }) {
  return (
    <span className={`${styles.badge} ${styles[types]}`}>
      {children}
    </span>
  );
}
