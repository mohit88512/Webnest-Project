import React from 'react'
import LandingPage from './LandingPage'
import DesignPage from './DesignPage'
import ProjectPage from './ProjectPage'
import Introduction from './Introduction'
import Footer from './Footer'

const HomePage = () => {
  return (
    <div>
      <LandingPage/>
      <DesignPage/>
      <ProjectPage/>
      <Introduction/>
      <Footer/>
    </div>
  )
}

export default HomePage