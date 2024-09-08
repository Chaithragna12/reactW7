import React from 'react';

export default function Footer({ text, backgroundColor = 'black', padding = '20px', fontSize = '14px' }) {
  const footerStyle = {
    backgroundColor: backgroundColor,
    padding: padding,
    fontSize: fontSize,
    color: 'white', // Text color
    textAlign: 'center', // Center the text
  };

  return (
    <footer style={footerStyle}>
      {text}
    </footer>
  );
}
