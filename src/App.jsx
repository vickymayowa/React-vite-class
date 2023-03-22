import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 style={{color: "red",backgroundColor: "yellow"}}>Hello Vicky👋👋👋💖💓</h1>
    <p className='para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit reprehenderit minus mollitia tene Delectus?</p>
    <div className="container-fluid mx-auto shadow-lg px-5">
      <div className="row">
        <div className="col border border-danger me-3">We</div>
        <div className="col border border-warning me-3">Are</div>
        <div className="col border border-info me-3">Ready</div>
      </div>
      <div className="row mt-3">
        <div className="col border border-danger me-3">Welcome</div>
        <div className="col border border-warning me-3">to</div>
        <div className="col border border-info me-3">Vite</div>
      </div>
      <div className="row mt-3">
        <div className="col border border-success me-3 shadow-lg shadow">We</div>
        <div className="col border border-white me-3 shadow-lg shadow">Are</div>
        <div className="col border border-success me-3 shadow-lg shadow">Ready</div>
      </div>
    </div>
    </>
  )
}

export default App
