import React from 'react';

export default function Card({ children, backgroundColor = 'white', padding = '20px', borderRadius = '8px' }) {
  const cardStyle = {
    backgroundColor: backgroundColor,
    padding: padding,
    borderRadius: borderRadius,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Optional: Add shadow for better visual
    width: '300px', // Optional: Set a default width for the card
  };

  return (
    <div style={cardStyle}>
      {children}
    </div>
  );
}
