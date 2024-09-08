import React from 'react';
import PropTypes from 'prop-types';

const AuthorProfile = ({ username, bio, profilePicture }) => {
  const profileStyle = {
    borderRadius: '50%',
    width: '200px',
    height: '200px',
  };

  return (
    <div>
      <img src={profilePicture} alt={`${username}'s profile`} style={profileStyle} />
      <h2>{username}</h2>
      <p>{bio}</p>
    </div>
  );
};

AuthorProfile.propTypes = {
  username: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired,
};

export default AuthorProfile;
