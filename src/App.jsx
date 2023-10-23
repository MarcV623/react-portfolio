import githubLogo from './assets/github-logo.png'
import linkedinLogo from './assets/linkedin-logo.png'
import twitterLogo from './assets/twitter-logo.png'

import { Outlet } from 'react-router-dom';

import './App.css'

function App() {
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
      
      {/* Page Content */}
      <Outlet />

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
