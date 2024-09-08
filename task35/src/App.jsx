import React from 'react';
import ProductCard from './ProductCard';

function App() {
  const products = [
    {
      productName: 'Product 1',
      price: 29.99,
      description: 'This is a great product that does amazing things.',
    },
    {
      productName: 'Product 2',
      price: 49.99,
      description: 'This product is even better and has additional features.',
    },
    {
      productName: 'Product 3',
      price: 19.99,
      description: 'An affordable product with great value.',
    },
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          productName={product.productName}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
}

export default App;
