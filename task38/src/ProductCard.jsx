import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductCard.module.css'; // Import the CSS Module

const ProductCard = ({ productName, price, description }) => {
  return (
    <div className={styles.productCard}>
      <h2>{productName}</h2>
      <p>{description}</p>
      <p>${price.toFixed(2)}</p>
    </div>
  );
};

ProductCard.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProductCard;
