import React, { useState } from 'react';
import Calculator from './components/Calculator'

function App() {

  const [ previusValue, setPreviusValue ] = useState(0);
  const [ currentValue, setCurrentValue ] = useState(0);
  const [ saveOperation, setSaveOperation ] = useState('');

  return (
    <div>
      <Calculator 
        previusValue={100}
        currentValue={200}
        saveOperation={`${previusValue} +`}
       />
    </div>
  );
}

export default App;
