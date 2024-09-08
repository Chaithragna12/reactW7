import React from 'react';

export default function ProductCard({ productName, price, description }) {
  const cardStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '300px',
    margin: '10px',
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '0 0 10px 0',
  };

  const priceStyle = {
    fontSize: '16px',
    color: 'green',
    margin: '0 0 10px 0',
  };

  const descriptionStyle = {
    fontSize: '14px',
    color: 'gray',
  };

  return (
    <div style={cardStyle}>
      <h2 style={titleStyle}>{productName}</h2>
      <p style={priceStyle}>${price.toFixed(2)}</p>
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
}
