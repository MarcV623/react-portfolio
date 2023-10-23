import githubLogo from './assets/github-logo.png'
import linkedinLogo from './assets/linkedin-logo.png'
import twitterLogo from './assets/twitter-logo.png'

import { Outlet } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';

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
                <Link to="/">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li>
              <Link to="/contact">
                  Contact
                </Link>
              </li>
              <li>
              <Link to="/resume">
                  Resume
                </Link>
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
