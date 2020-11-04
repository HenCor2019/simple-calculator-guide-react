import React, { useState } from 'react';
import Calculator from './components/Calculator'

function App() {

  const [ previusValue, setPreviusValue ] = useState('');
  const [ currentValue, setCurrentValue ] = useState('');
  const [ saveOperation, setSaveOperation ] = useState('');

  return (
    <div>
      <Calculator 
        previusValue={previusValue}
        currentValue={currentValue}
        saveOperation={saveOperation}
        setCurrentValue={setCurrentValue}
        setSaveOperation={setSaveOperation}
        setPreviusValue={setPreviusValue}
       />
    </div>
  );
}

export default App;
