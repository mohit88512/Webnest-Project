import React from 'react'
// import './ProjectPage.css'

import bustImg   from '../images/bust.png'
import horsesImg from '../images/horse1.png'
import gardenImg from '../images/garden.png'

const ProjectPage = () => {
  return (
    <section className="ps-section">

      {/* ── TOP GOLD DIVIDER ── */}
      <hr className="ps-divider" />

      {/* ── STATS ROW ── */}
      <div className="ps-stats">
        <div className="ps-stat">
          <p className="ps-stat-number">12+</p>
          <p className="ps-stat-label">Branches</p>
        </div>
        <div className="ps-stat">
          <p className="ps-stat-number">10K+</p>
          <p className="ps-stat-label">Successful Projects</p>
        </div>
        <div className="ps-stat">
          <p className="ps-stat-number">2M</p>
          <p className="ps-stat-label">Satisfied Client</p>
        </div>
      </div>

      {/* ── BOTTOM GOLD DIVIDER ── */}
      <hr className="ps-divider" />

      {/* ── CENTER HEADING ── */}
      <h2 className="ps-heading">
        One step towards your <br /> dream home
      </h2>
      <p className="ps-subheading">Challenging ourselves in every project</p>

      {/* ── MAIN CONTENT ROW ── */}
      <div className="ps-content">

        {/* LEFT: bust image + paragraph */}
        <div className="ps-left">
          <div className="ps-bust-wrapper">
            <div className="ps-gold-bar" />
            <img src={bustImg} alt="Bust" className="ps-bust-img" />
          </div>
          <p className="ps-para">
            We are also committed to bioengineering in order to produce a healthier and more
            sustainable environment in all our solutions, utilizing nature to create humane spaces
            that stand out from the visual monotony of the urban landscape.
          </p>
        </div>

        {/* RIGHT: overlapping images */}
        <div className="ps-right">
          {/* gold rectangle behind horses */}
          <div className="ps-gold-rect" />
          {/* horses image */}
          <img src={horsesImg} alt="Horses" className="ps-horses" />
          {/* garden image overlaps in front */}
          <img src={gardenImg} alt="Garden" className="ps-garden" />
        </div>

      </div>

    </section>
  )
}

export default ProjectPage