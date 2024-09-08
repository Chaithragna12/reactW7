import React from 'react';

export default function Header({ text, backgroundColor = 'gray', padding = '20px', textAlign = 'center' }) {
  const headerStyle = {
    backgroundColor: backgroundColor,
    padding: padding,
    textAlign: textAlign,
    color: 'white', // Text color
    fontSize: '24px', // Font size
  };

  return (
    <header style={headerStyle}>
      {text}
    </header>
  );
}
