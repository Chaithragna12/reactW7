import React from 'react';

export default function Box({ width = '100px', height = '100px', backgroundColor = 'lightblue' }) {
  const boxStyle = {
    width: width,
    height: height,
    backgroundColor: backgroundColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #ccc', // Optional: Add a border
    borderRadius: '8px', // Optional: Add rounded corners
  };

  return (
    <div style={boxStyle}>
      Box
    </div>
  );
}
    