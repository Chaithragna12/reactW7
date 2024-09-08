import React from 'react';
import PropTypes from 'prop-types';
import styles from './RecipeCard.module.css'; // Assuming you're using CSS Modules

const RecipeCard = ({ recipeName, ingredients, cookingTime }) => {
  return (
    <div className={styles.recipeCard}>
      <h2>{recipeName}</h2>
      <p>Ingredients: {ingredients.join(', ')}</p>
      <p>Cooking Time: {cookingTime} minutes</p>
    </div>
  );
};

RecipeCard.propTypes = {
  recipeName: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  cookingTime: PropTypes.number.isRequired,
};

export default RecipeCard;
