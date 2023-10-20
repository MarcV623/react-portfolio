import { useState } from 'react'
import reactLogo from './assets/react.svg'
import githubLogo from './assets/github-logo.png'
import linkedinLogo from './assets/linkedin-logo.png'
import twitterLogo from './assets/twitter-logo.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Header */}
      <div id='header'>
        <h1>Marc Vargas</h1>
          <div>
            <ul>
              <li>
                <a href="#about-me-section">About Me</a>
              </li>
              <li>
                <a href="#first-project-section">Portfolio</a>
              </li>
              <li>
                <a href="#contact-information-section">Contact</a>
              </li>
              <li>
                <a href="#resume-information-section">Resume</a>
              </li>
            </ul>
        </div>
      </div>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Footer */}
      <div id='footer'>
        {/* TODO: Add actual github link */}
        <a href="https://react.dev" target="_blank">
          <img src={githubLogo} className="logo github" alt="github logo" />
        </a>

        {/* TODO: Add actual linkedin link */}
        <a href="https://react.dev" target="_blank">
          <img src={linkedinLogo} className="logo linkedin" alt="linkedin logo" />
        </a>

        {/* TODO: Add actual twiter link */}
        <a href="https://react.dev" target="_blank">
          <img src={twitterLogo} className="logo twitter" alt="twitter logo" />
        </a>
      </div>
    </>
  )
}

export default App
