import React from 'react';
import Tooltip from './Tooltip';

function App() {
  return (
    <div style={{marginTop:'10rem'}}>
      <Tooltip text="This is a tooltip">
        <button >Hover over me</button>
      </Tooltip>
    </div>
  );
}

export default App;
