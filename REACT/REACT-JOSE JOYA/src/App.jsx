import { useState } from 'react'
import  {Name}  from './MyName.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Name/>
    </>
  )
}

export default App
