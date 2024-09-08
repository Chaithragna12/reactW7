import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './CreatePostForm.module.css'; // Using CSS Modules

const CreatePostForm = ({ onAddPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddPost({ title, content, image, author: 'Anonymous' });
    setTitle('');
    setContent('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        Title:
        <input className='input'
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label className='content'>
        Content:
        <textarea className='contents'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </label>
      <label>
        Image URL:
        <input className='img'
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </label>
      <button type="submit">Add Post</button>
    </form>
  );
};

CreatePostForm.propTypes = {
  onAddPost: PropTypes.func.isRequired,
};

export default CreatePostForm;
