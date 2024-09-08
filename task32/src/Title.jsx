import React from 'react';

export default function Title({ text, fontSize = '24px', color = 'black', margin = '10px' }) {
  const titleStyle = {
    fontSize: fontSize,
    color: color,
    margin: margin,
  };

  return (
    <h1 style={titleStyle}>
      {text}
    </h1>
  );
}
