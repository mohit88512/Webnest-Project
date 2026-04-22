import React from 'react'

import introImg from '../images/intro.png'

const Introduction = () => {
  return (
    <section className="intro">

      <div className="intro-top">

        <div className="intro-left">

          <h2 className="intro-title">Intrduction</h2>
          <p className="intro-desc">
            We are living in a time of rapid urban growth with increasingly
            busy and fast lifestyles characterized by movement and commotion –
            so much so that the need to humanize architecture has never been
            more important.
          </p>

          <div className="intro-item">
            <div className="intro-item-header">
              <div>
                <p className="intro-item-title">Our Vision</p>
                <div className="intro-item-line" />
              </div>
              <button className="intro-arrow">↗</button>
            </div>
            <p className="intro-item-text">
              To be the first choice for quality in implementation and innovation of ideas in
              all interior and exterior decorations and finishes.
            </p>
            <hr className="intro-item-divider" />
          </div>

          <div className="intro-item">
            <div className="intro-item-header">
              <div>
                <p className="intro-item-title">Our Mission</p>
                <div className="intro-item-line" />
              </div>
              <button className="intro-arrow">↗</button>
            </div>
            <p className="intro-item-text">
              To achieve uniqueness in all that we do, adding elements of nature in order to
              humanize the spaces we create, balancing form, function and aesthetics.
            </p>
            <hr className="intro-item-divider" />
          </div>

          <div className="intro-item">
            <div className="intro-item-header">
              <div>
                <p className="intro-item-title">Our Work</p>
                <div className="intro-item-line" />
              </div>
              <button className="intro-arrow">↗</button>
            </div>
            <p className="intro-item-text">
              All Novo work is undertaken under one brand in order to ensure quality in
              materials and implementation. We pride ourselves in offering inimitable ideas
              and solutions which create harmony and coherence between each stage of the
              project. We employ familiar materials but use them innovatively.
            </p>
            <hr className="intro-item-divider" />
          </div>

        </div>

        <div className="intro-right">
          <div className="intro-gold-bar" />
          <img src={introImg} alt="Interior" className="intro-img" />
        </div>

      </div>

      <div className="intro-bottom">
        <hr className="intro-divider" />

        <div className="intro-bottom-meta">
          <span>Our Success</span>
          <span>01/03</span>
        </div>

        <div className="intro-bottom-content">
          <p className="intro-quote">
            We are living in a time of rapid urban growth with increasingly busy and fast
            lifestyles characterized by movement and commotion – so much so that the need
            to humanize architecture has never been more important. This means reconsidering
            the form and functions of our buildings and the materials we use, a prevalent
            trend in our industry which, more and more, seeks to provide an environment
            that understands people's needs and shield them from the noise and bustle of
            the city streets. This encapsulates the Novo Design & Build approach. It begins
            with our name, one which promises authentic human feelings, taking us back to a
            time of serenity and spaciousness and looking ahead to 'smart', modern solutions.
          </p>
          <button className="intro-next">Next</button>
        </div>

        <hr className="intro-divider" />
      </div>

    </section>
  )
}

export default Introduction