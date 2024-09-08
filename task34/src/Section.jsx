import React from 'react';

export default function Section({ children, margin = '20px', padding = '20px', border = '1px solid #ddd' }) {
  const sectionStyle = {
    margin: margin,
    padding: padding,
    border: border,
  };

  return (
    <section style={sectionStyle}>
      {children}
    </section>
  );
}
