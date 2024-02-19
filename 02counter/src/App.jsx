import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[counter, setCounter] = useState(0)


  const addValue = () => {

      setCounter(prevCounter => (prevCounter < 20 ? prevCounter + 1 : prevCounter) )

  }

  const decreaseValue = () => {

      
      setCounter(prevCounter => (prevCounter > 0 ? prevCounter - 1 : prevCounter))
  }

  return (
    <>
      <h1>chai aur code</h1>
      <h2>Counter Value:- {counter} </h2>
      <button onClick={addValue}>Add Valur</button>
      <br />
      <button onClick= {decreaseValue}>Decrese Value</button>
    </>
  )
}

export default App
