import React from 'react'

import logo from '../images/logo.png'
import mainImg from '../images/Rectangle 7.png'
import horse from '../images/horse.png'

const CircleText = () => {
  return (
    <svg
      className="circle-svg"
    >
      <defs>
        <path
          id="circlePath"
          d="M 80,80 m -72,0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"
        />
      </defs>

      <text
        fontSize="11"
        fill="#415465"
        letterSpacing="4"
      >
        <textPath href="#circlePath">
          VIDEO • WATCH • REEL • VIEW •{'  '}
        </textPath>
      </text>
    </svg>
  )
}

const LandingPage = () => {
  return (
    <div>

      <nav>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="navlinks">
          <button>About</button>
          <button>Service</button>
          <button>Project</button>
          <button>Team</button>
        </div>

        <button className="contact-btn">
          Contact Us →
        </button>
      </nav>

      <div className="main">

        <div className="top-row">
          <div className="heading">
            <h1>
              <span className="gold">Our</span> Implicit Belief in <br />
              <span className="gold">Architecture's Dynamism</span>
            </h1>
          </div>

          <div className="right-text">
            <p className="small-para">
              Decorations and finishes of ideas in all
              interior and exterior implementation.
            </p>
            <p className="gold-text">
              To achieve uniqueness in all that we do,
              adding elements of nature
            </p>
            <img className="horse-img" src={horse} alt="Horse statue" />
          </div>

        </div>

        <div className="image-area">
          <div className="gold-box" />
          <img className="main-img" src={mainImg} alt="Building" />
        </div>

        <div className="bottom-row">

          <div className="circle-wrapper">
            <CircleText />
            <button className="play-btn" /> 
          </div>

          <p className="bottom-desc">
            Our architectural team excels at creating visually
            appealing and function-driven spaces. We specialize
            in residential, commercial, and industrial architectural
            design, tailoring our designs to meet the unique needs
            of each client.
          </p>

        </div>
      </div>

      <hr className="divider" />

    </div>
  )
}

export default LandingPage