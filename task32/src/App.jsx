import React from 'react';
import Title from './Title';
import Container from './Container';

function App() {
  return (
    <div>
      <Container padding="30px" border="2px solid #000" maxWidth="800px">
        <Title text="Welcome to My App" fontSize="36px" color="darkred" margin="20px" />
        <p>This is a sample container with custom padding, border, and max-width.</p>
      </Container>
    </div>
  );
}

export default App;
