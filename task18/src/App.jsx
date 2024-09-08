import React, { useState } from 'react';
import Notification from './notification';

const App = () => {
  const [message, setMessage] = useState('');
  const [type, setType] = useState('');

  return (
    <div>
      <button onClick={() => { setMessage('Success! Operation completed.'); setType('success'); }}>
        Show Success
      </button> <br /><br />
      <button onClick={() => { setMessage('Error! Something went wrong.'); setType('error'); }}>
        Show Error
      </button><br /><br />
      <button onClick={() => { setMessage('Warning! Please check your input.'); setType('warning'); }}>
        Show Warning
      </button><br /><br />

      <Notification message={message} type={type} />
    </div>
  );
};

export default App;

