// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import reduxLogo from './assets/redux logo.png'
import './App.css'
import Counter from './Counter/Counter'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://redux.js.org/" target="_blank" rel="noreferrer">
          <img src={reduxLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>React + Redux</h1>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
      <Counter/>
    </>
  )
}

export default App
