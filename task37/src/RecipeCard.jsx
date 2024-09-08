// RecipeCard.js
import React from 'react';
import styles from './RecipeCard.module.css'; // Import CSS Module

const RecipeCard = ({ recipeName, ingredients, cookingTime }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.recipeName}>{recipeName}</h2>
      <p className={styles.ingredients}>Ingredients: {ingredients.join(', ')}</p>
      <p className={styles.cookingTime}>Cooking Time: {cookingTime} minutes</p>
    </div>
  );
};

export default RecipeCard;
