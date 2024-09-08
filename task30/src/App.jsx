import React from 'react';
import Breadcrumb from './Breadcrumb';

function App() {
  const breadcrumbItems = ['Home', 'Products', 'Electronics', 'Smartphones'];

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
    </div>
  );
}

export default App;
