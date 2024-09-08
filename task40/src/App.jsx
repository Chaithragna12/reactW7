import React from 'react';
import MovieCard from './MovieCard';
import RecipeCard from './RecipeCard';
import ProfileCard from './ProfileCard';
import CourseCard from './CourseCard';
import NewsCard from './NewsCard';

const App = () => {
  return (
    <div>
      <h1>Component Showcase</h1>
      <MovieCard
        title="Inception"
        director="Christopher Nolan"
        releaseYear={2010}
      />
      <RecipeCard
        recipeName="Spaghetti Carbonara"
        ingredients={["Spaghetti", "Eggs", "Parmesan", "Pancetta"]}
        cookingTime={30}
      />
      <ProfileCard
        username="john_doe"
        bio="Software engineer with a passion for coding."
        profilePicture="https://example.com/profile.jpg"
      />
      <CourseCard
        courseName="React for Beginners"
        instructor="Jane Smith"
        duration={5}
      />
      <NewsCard
        headline="New React Version Released"
        summary="React 18 introduces new features and improvements."
        source="Tech News"
      />
    </div>
  );
};

export default App;
