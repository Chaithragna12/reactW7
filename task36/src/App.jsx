// App.js
import React from 'react';
import BookCard from './BookCard';
import EventCard from './EventCard';
import MovieCard from './MovieCard';

const App = () => {
  return (
    <div>
      <h1>Books</h1>
      <BookCard title="To Kill a Mockingbird" author="Harper Lee" yearPublished={1960} />
      <BookCard title="1984" author="George Orwell" yearPublished={1949} />

      <h1>Events</h1>
      <EventCard eventName="Music Festival" date="2024-10-12" location="Central Park" />
      <EventCard eventName="Tech Conference" date="2024-11-05" location="Convention Center" />

      <h1>Movies</h1>
      <MovieCard title="Inception" director="Christopher Nolan" releaseYear={2010} />
      <MovieCard title="The Matrix" director="The Wachowskis" releaseYear={1999} />
    </div>
  );
};

export default App;
