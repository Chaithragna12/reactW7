import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => 
        prevProgress < 100 ? prevProgress + 10 : 100
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3>Progress: {progress}%</h3>
      <ProgressBar progress={progress} />
    </div>
  );
}

export default App;
