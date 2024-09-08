import React from 'react';
import Tab from './tab';

const tabData = [
  { label: 'Tab 1', content: 'This is the content for Tab 1' },
  { label: 'Tab 2', content: 'lorem' },
  { label: 'Tab 3', content: 'This is the content for Tab 3' },
];

function App() {
  return (
    <div>
      <Tab tabs={tabData} />
    </div>
  );
}

export default App;
