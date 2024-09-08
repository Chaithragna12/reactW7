// ProfileCard.js
import React from 'react';
import styles from './ProfileCard.module.css'; // Import CSS Module

const ProfileCard = ({ username, bio, profilePicture }) => {
  return (
    <div className={styles.card}>
      <img src={profilePicture} alt={`${username}'s profile`} className={styles.profilePicture} />
      <h2 className={styles.username}>{username}</h2>
      <p className={styles.bio}>{bio}</p>
    </div>
  );
};

export default ProfileCard;
