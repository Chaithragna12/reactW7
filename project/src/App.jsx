import React, { useState } from 'react';
import './App.css';
import TravelPostList from './TravelPostList';
import CreatePostForm from './CreatePostForm';
import AuthorProfile from './AuthorProfile';

const App = () => {
  const [posts, setPosts] = useState([]);

  const handleAddPost = (newPost) => {
    setPosts([...posts, { ...newPost, id: posts.length + 1 }]);
  };

  return (
    <div>
      <h1>Travel Blog</h1>
      <AuthorProfile
        username="Travel_Enthusiast"
        bio="Exploring the world one adventure at a time!"
        profilePicture="https://static.workaway.info/gfx/media/2020/05/large/1_158870393201621.jpg"
      />
      <CreatePostForm onAddPost={handleAddPost} />
      <TravelPostList posts={posts} />
    </div>
  );
};

export default App;

