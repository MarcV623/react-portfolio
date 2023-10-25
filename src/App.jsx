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
        <a href="https://github.com/MarcV623">
          <img src={githubLogo} className="logo github" alt="github logo" />
        </a>

        <a href="https://www.linkedin.com/in/marc-vargas-3163a5280/">
          <img src={linkedinLogo} className="logo linkedin" alt="linkedin logo" />
        </a>

        <a href="https://twitter.com/marcvargas93329">
          <img src={twitterLogo} className="logo twitter" alt="twitter logo" />
        </a>
      </div>
    </>
  )
}

export default App
