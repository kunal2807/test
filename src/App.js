import axios from 'axios'
import './App.css'
import { useState } from 'react'

function App() {
  return (
    <div className='App'>
      <p>hello</p>
      <canvas></canvas>
      <video width='750' height='500' controls>
        <source src='../../aktest.mp4' type='video/mp4' />
      </video>
    </div>
  )
}

export default App
