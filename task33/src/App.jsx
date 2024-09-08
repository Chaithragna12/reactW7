import React from 'react';
import Button from './Button';
import Text from './Text';
import Header from './Header';

function App() {
  return (
    <div>
      <Header text="Welcome to My App" backgroundColor="darkblue" padding="30px" textAlign="center" />
      <Text color="darkgray" fontWeight="bold" lineHeight="2">
        This is some example text styled with inline styles.
      </Text>
      <Button label="Click Me" backgroundColor="green" fontSize="18px" margin="20px" onClick={() => alert('Button clicked!')} />
    </div>
  );
}

export default App;
