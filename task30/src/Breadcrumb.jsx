import React from 'react';
import styles from './Breadcrumb.module.css';

export default function Breadcrumb({ items }) {
  return (
    <nav className={styles.breadcrumb}>
      {items.map((item, index) => (
        <span key={index} className={styles.breadcrumbItem}>
          {item}
          {index < items.length - 1 && <span className={styles.separator}> / </span>}
        </span>
      ))}
    </nav>
  );
}
