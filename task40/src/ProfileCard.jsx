import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProfileCard.module.css'; // Assuming you're using CSS Modules

const ProfileCard = ({ username, bio, profilePicture }) => {
  return (
    <div className={styles.profileCard}>
      <img src={profilePicture} alt={`${username}'s profile`} className={styles.profilePicture} />
      <h2>{username}</h2>
      <p>{bio}</p>
    </div>
  );
};

ProfileCard.propTypes = {
  username: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired,
};

export default ProfileCard;
