import React from 'react';

import './App.css';
import { Button } from './components';

function App() {
  const onPress = () => console.log('Pressed!');

  return (
    <div className="App">
      <Button onClick={onPress}>Container</Button>
      <Button type="outline">Outline</Button>
      <Button type="text">Text</Button>
    </div>
  );
}

export default App;
