import React from 'react';

export default function Label({ text, fontSize = '16px', color = 'black', display = 'inline-block' }) {
  const labelStyle = {
    fontSize: fontSize,
    color: color,
    display: display,
  };

  return (
    <label style={labelStyle}>
      {text}
    </label>
  );
}
