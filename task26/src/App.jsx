import React from 'react';
import Badge from './Badge';

function App() {
  return (
    <div>
      <Badge types="successing">Success</Badge>
      <Badge types="warning">Warning</Badge>
      <Badge types="error">Error</Badge>
    </div>
  );
}
export default App;
