import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='grid grid-cols-[20%_80%]'>
      <div>01</div>
      <div>01</div>
     </div>
    </>
  )
}

export default App
