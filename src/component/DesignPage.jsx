import React from 'react'

import heroImg    from '../images/design1.png'
import designImg  from '../images/designImg2.png'
import pricingImg from '../images/designImg3.png'
import implImg    from '../images/designImg4.png'

const DesignPage = () => {
  return (
    <div className="designMain">

      <p className="designTagline">Innovative architectural designs</p>

      <h2 className="designHeading">
        The place where you spend your time is a direct reflection of your culture
      </h2>

      <div className="imgWrapper">
        <div className="designBorder" />
        <img className="designImg" src={heroImg} />
      </div>

      <p className="designLabel">Our works goes through three stages</p>
      <hr className="designDivider" />


      <div className="designStage">

        <div className="designStageLeft">
          <span className="designStageNumber">01</span>
          <h3 className="designStageTitle">Design</h3>
          <button className="designViewBtn">View Project →</button>
        </div>

        <img className="designStageImg" src={designImg} alt="Design stage" />

        <div className="designStageDesc">
          <p>The design stage begins by developing an understanding of our clients' needs and predispositions in an initial consultation with one of our designers. After this dialogue, we present the first draft of the design with a full explanation of our suggestions and their rationale.</p>
          <p>After client feedback, we rework our design to include any required modifications.</p>
          <p>After their approval we finalize the design and take full measurements.</p>
        </div>

      </div>

      <div className="designStage">

        <div className="designStageLeft">
          <span className="designStageNumber">02</span>
          <h3 className="designStageTitle">Pricing and <br /> Materials Approval</h3>
          <button className="designViewBtn">View Project →</button>
        </div>

        <img className="designStageImg" src={pricingImg} alt="Pricing stage" />

        <div className="designStageDesc">
          <p>Once full measurements have been calculated and quantities estimated,</p>
          <p>We present a comprehensive cost analysis, giving clients a range of material options commensurate with their project and budget.</p>
        </div>

      </div>

      <div className="designStage">

        <div className="designStageLeft">
          <span className="designStageNumber">03</span>
          <h3 className="designStageTitle">Implementation</h3>
          <button className="designViewBtn">View Project →</button>
        </div>

        <img className="designStageImg" src={implImg} alt="Implementation stage" />

        <div className="designStageDesc">
          <p>After approving the plans and with the clients approval of carefully chosen materials,</p>
          <p>We carry out the finishing and decoration work, monitoring the fit-out throughout its progress.</p>
          <p>After this, we provide our clients with peace of mind thanks to our aftersales service.</p>
        </div>

      </div>

    </div>
  )
}

export default DesignPage