import pictureone from '../assets/coding3.jpeg'
import picturetwo from '../assets/code.jpeg'
export default function Contact() {
    return (
      <div>
        <h1>Portfolio</h1>

        <div className="main-content-container">
          {/* First project */}
          <div className="content-container">
            <a href="https://marcv623.github.io/html-css-challenge/" target="_blank" rel="noreferrer">
              <img src={pictureone} alt="some picture" width={500} height={300}></img>
            </a>
            <p><a href="https://github.com/MarcV623/html-css-challenge" target="_blank" rel="noreferrer">View Source Code!</a></p>
          </div>

          {/* Second project */}
          <div className="content-container">
            <a href="https://marcv623.github.io/password-gen" target="_blank" rel="noreferrer">
              <img src={picturetwo} alt="some picture" width={500} height={300}></img>
            </a>
            <p><a href="https://github.com/MarcV623/password-gen" target="_blank" rel="noreferrer">View Source Code!</a></p>
          </div>
          
          <p className="spacer"></p>

          {/* Third project */}
          <div className="content-container">
            <a href="https://marcv623.github.io/html-css-challenge/" target="_blank" rel="noreferrer">
              <img src={pictureone} alt="some picture" width={500} height={300}></img>
            </a>
            <p><a href="https://google.com" target="_blank" rel="noreferrer">View Source Code!</a></p>
          </div>

          {/* Fourth project */}
          <div className="content-container">
            <a href="https://marcv623.github.io/html-css-challenge/" target="_blank" rel="noreferrer">
              <img src={pictureone} alt="some picture" width={500} height={300}></img>
            </a>
            <p><a href="https://google.com" target="_blank" rel="noreferrer">View Source Code!</a></p>
          </div>

          <p className="spacer"></p>

          {/* Fifth project */}
          <div className="content-container">
            <a href="https://marcv623.github.io/html-css-challenge/" target="_blank" rel="noreferrer">
              <img src={pictureone} alt="some picture" width={500} height={300}></img>
            </a>
            <p><a href="https://google.com" target="_blank" rel="noreferrer">View Source Code!</a></p>
          </div>

          {/* Sixth project */}
          <div className="content-container">
            <a href="https://marcv623.github.io/html-css-challenge/" target="_blank" rel="noreferrer">
              <img src={pictureone} alt="some picture" width={500} height={300}></img>
            </a>
            <p><a href="https://google.com" target="_blank" rel="noreferrer">View Source Code!</a></p>
          </div>

          <p className="spacer"></p>
        </div>
      </div>
    );
  }
  