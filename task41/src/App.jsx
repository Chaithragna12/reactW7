import React from 'react';
import JobCard from './JobCard';
import SongCard from './SongCard';

const App = () => {
  return (
    <div>
      <h1>Job and Song Cards</h1>
      
      <JobCard
        jobTitle="Software Engineer"
        companyName="Tech Corp"
        location="San Francisco, CA"
      />
      
      <SongCard
        songTitle="Bohemian Rhapsody"
        artist="Queen"
        album="A Night at the Opera"
      />
      
    </div>
  );
};

export default App;

