import { useState } from 'react'
/* import reactLogo from './assets/react.svg' */
/* import viteLogo from '/vite.svg' */ 
import './App.css'
import SPA from "./SPA.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SPA/>
    </>
  )
}

export default App
