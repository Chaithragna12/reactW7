import React from 'react';
import BookCard from './BookCard';
import EventCard from './EventCard';

const App = () => {
  return (
    <div>
      <h1>Book and Event Cards</h1>
      <BookCard
        title="The Great Gatsby"
        author="F. Scott Fitzgerald"
        yearPublished={1925}
      />
      <EventCard
        eventName="Music Festival"
        date="2024-09-15"
        location="Central Park, NYC"
      />
    </div>
  );
};

export default App;
