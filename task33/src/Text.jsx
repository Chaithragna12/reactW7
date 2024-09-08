import React from 'react';

export default function Text({ children, color = 'black', fontWeight = 'normal', lineHeight = '1.5' }) {
  const textStyle = {
    color: color,
    fontWeight: fontWeight,
    lineHeight: lineHeight,
  };

  return (
    <p style={textStyle}>
      {children}
    </p>
  );
}
