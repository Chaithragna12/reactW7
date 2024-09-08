import React from 'react';
import Footer from './Footer';
import Section from './Section';
import Label from './Label';
import Card from './Card';

function App() {
  return (
    <div>
      <Section margin="30px" padding="20px" border="2px solid #ccc">
        <Card backgroundColor="lightgray" padding="15px" borderRadius="12px">
          <Label text="Card Title" fontSize="18px" color="darkblue" display="block" />
          <p>This is some content inside the card.</p>
        </Card>
      </Section>
      <Footer text="Footer Content" backgroundColor="darkblue" padding="25px" fontSize="16px" />
    </div>
  );
}

export default App;
