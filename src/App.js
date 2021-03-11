import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'
import PartBlock from './PartBlock'
function App() {
  const [i, setI] = useState(0)
  useEffect(() => {
      const interval = setInterval(() => {
          setI((prevI) => prevI + 1)
      }, 1000)
      return () => {
          clearInterval(interval)
      }
  })
  return (
    <PartBlock k = {i}>
    </PartBlock>
  );
}

export default App;
