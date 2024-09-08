// App.js
import React from 'react';
import RecipeCard from './RecipeCard';
import ProfileCard from './ProfileCard';
import CourseCard from './CourseCard';
import NewsCard from './NewsCard';
import JobCard from './JobCard';
import SongCard from './SongCard';

const App = () => {
  return (
    <div>
      <h1>Recipes</h1>
      <RecipeCard recipeName="Spaghetti Bolognese" ingredients={['Spaghetti', 'Ground beef', 'Tomato sauce']} cookingTime={30} />
      <RecipeCard recipeName="Chicken Curry" ingredients={['Chicken', 'Curry powder', 'Coconut milk']} cookingTime={45} />

      <h1>Profiles</h1>
      <ProfileCard username="johndoe" bio="Software developer and tech enthusiast." profilePicture="profile1.jpg" />
      <ProfileCard username="janedoe" bio="Graphic designer and artist." profilePicture="profile2.jpg" />

      <h1>Courses</h1>
      <CourseCard courseName="React Basics" instructor="John Smith" duration={10} />
      <CourseCard courseName="Advanced JavaScript" instructor="Jane Doe" duration={12} />

      <h1>News</h1>
      <NewsCard headline="Market Hits All-Time High" summary="The stock market reached new heights today." source="Reuters" />
      <NewsCard headline="Tech Innovations of 2024" summary="A look at the latest technology trends." source="TechCrunch" />

      <h1>Jobs</h1>
      <JobCard jobTitle="Frontend Developer" companyName="Tech Corp" location="New York" />
      <JobCard jobTitle="Data Scientist" companyName="DataWorks" location="San Francisco" />

      <h1>Songs</h1>
      <SongCard songTitle="Shape of You" artist="Ed Sheeran" album="÷ (Divide)" />
      <SongCard songTitle="Blinding Lights" artist="The Weeknd" album="After Hours" />
    </div>
  );
};

export default App;
