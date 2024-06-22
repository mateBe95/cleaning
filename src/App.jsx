import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <>
      <div class="landing-page">
        <header>
          <div class="container">
            <a href="#" class="logo">Happy clean services</a>
            <ul class="links">
              <li>Home</li>
              <li>About Me</li>
              <li>Work</li>
              <li>Contact me</li>
            </ul>
          </div>
        </header>
        <div class="content">
          <div class="container">
            <div class="info">
              <h1>Speak to me directly</h1>
              <p>Want to know more? Call me we now and share details.</p>
              <button>500 500 500</button>
            </div>
            <div class="image">
              <img src="https://i.postimg.cc/65QxYYzh/001234.png"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
