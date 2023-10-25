import pictureone from '../assets/coding3.jpeg'
import picturetwo from '../assets/code.jpeg'
import picturethree from '../assets/better-programmer.webp'
import picturefour from '../assets/software-developement.webp'
import picturefive from '../assets/computer_programming.jpeg'
import picturesix from '../assets/coding-screen.jpeg'
export default function Portfolio() {
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
            <a href="https://marcv623.github.io/Work-Day-Scheduler/" target="_blank" rel="noreferrer">
              <img src={picturethree} alt="some picture" width={500} height={300}></img>
            </a>
            <p><a href="https://github.com/MarcV623/Work-Day-Scheduler" target="_blank" rel="noreferrer">View Source Code!</a></p>
          </div>

          {/* Fourth project */}
          <div className="content-container">
            <a href="https://warm-thicket-35521-50b83e044954.herokuapp.com/" target="_blank" rel="noreferrer">
              <img src={picturefour} alt="some picture" width={500} height={300}></img>
            </a>
            <p><a href="https://github.com/MarcV623/Note-Taker" target="_blank" rel="noreferrer">View Source Code!</a></p>
          </div>

          <p className="spacer"></p>

          {/* Fifth project */}
          <div className="content-container">
            <a href="https://marcv623.github.io/code-quiz/" target="_blank" rel="noreferrer">
              <img src={picturefive} alt="some picture" width={500} height={300}></img>
            </a>
            <p><a href="https://github.com/MarcV623/code-quiz" target="_blank" rel="noreferrer">View Source Code!</a></p>
          </div>

          {/* Sixth project */}
          <div className="content-container">
            <a href="https://marcv623.github.io/portfolio/" target="_blank" rel="noreferrer">
              <img src={picturesix} alt="some picture" width={500} height={300}></img>
            </a>
            <p><a href="https://github.com/MarcV623/portfolio" target="_blank" rel="noreferrer">View Source Code!</a></p>
          </div>

          <p className="spacer"></p>
        </div>
      </div>
    );
  }
  