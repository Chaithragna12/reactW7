// Example of using ProductCard in another component
import React from 'react';
import ProductCard from './ProductCard';

const App = () => {
  return (
    <div>
      <ProductCard
        productName="Sample Product"
        price={19.99}
        description="This is a sample product description."
      />
    </div>
  );
};

export default App;

