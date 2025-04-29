import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const enablebtncount = useRef(1);
  const [btnshow, setBtnshow] = useState(false);


  useEffect(() => {
    console.log("rendering...");
  })


  const incrementCount = () => {
    enablebtncount.current = enablebtncount.current + 1;
    console.log(enablebtncount.current);
    if(enablebtncount.current == 5){
      setBtnshow(!btnshow);
      enablebtncount.current = 0;
    }
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <button onClick={incrementCount} className="btn">
        Click me 5 times to ENABLE the Count Button
      </button>

      <div className="card">
        {btnshow && <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
