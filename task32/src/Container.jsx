import React from 'react';

export default function Container({ children, padding = '20px', border = '1px solid #ccc', maxWidth = '1200px' }) {
  const containerStyle = {
    padding: padding,
    border: border,
    maxWidth: maxWidth,
    margin: '0 auto', // Center the container
  };

  return (
    <div style={containerStyle}>
      {children}
    </div>
  );
}
