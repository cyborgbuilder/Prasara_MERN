import React from 'react'
import Contents from './Contents'
import VideoPage from './VideoPage'
import styled from 'styled-components'
import Slogan from './Slogan'
import BlackPage from './BlackPage'
import ImagePage from './ImagePage'
import Welcome from './Welcome'
import Certify from './Certify'
import FaceContact from './FaceContact'
import FaceSustainability from './FaceSustainability'
import FaceAbout from './FaceAbout'
import Blank from './Blank'

function Home() {
  return (
    <Container>
      <BlackPage />
      <VideoPage />
      
      <Welcome />
      <FaceAbout />
      
      <Slogan />
      <Certify />
      
      
      <FaceContact />
      <Blank />
      
      {/* <FaceSustainability /> */}
      

      
    </Container>
  )
}


const Container = styled.div`
  iwdth: 100%;
  overflow: hidden;

`

export default Home
