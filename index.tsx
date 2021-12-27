import React, { useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

function App() {
  const [name, setName] = useState('Oded');
  return (
    <div>
      <Hello {...{ name }} />
      <p>Start editing to see some magic happen :) Started editing</p>
    </div>
  );
}

render(<App />, document.getElementById('root'));
