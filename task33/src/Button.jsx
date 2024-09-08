import React from 'react';

export default function Button({ label, backgroundColor = 'blue', fontSize = '16px', margin = '10px', onClick }) {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    fontSize: fontSize,
    margin: margin,
    color: 'white', // Text color
    border: 'none', // Remove default border
    borderRadius: '4px', // Rounded corners
    padding: '10px 20px', // Padding inside the button
    cursor: 'pointer', // Pointer cursor on hover
    transition: 'background-color 0.3s ease', // Smooth background color transition
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {label}
    </button>
  );
}
