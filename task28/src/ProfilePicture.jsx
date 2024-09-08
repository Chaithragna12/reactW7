import React from 'react';
import styles from './ProfilePicture.module.css';

export default function ProfilePicture({ src }) {
  return (
    <div className={styles.profileContainer}>
      <img className={styles.profileImage} src={src} alt="" />
    </div>
  );
}
