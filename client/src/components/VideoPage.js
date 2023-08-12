import React from 'react'
import styled from 'styled-components'
import SocialBooth from './SocialBooth'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
function VideoPage() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <Container>


<Slider className='img_slider' {...settings}>
          <div>
            <img src='./cover1.png' />
          </div>
          <div>
          <img src='./cover2.png' />
          </div>
          <div>
          <img src='./cover3.png' />
          </div>
          <div>
          <img src='./cover4.png' />
          </div>
          <div>
          <img src='./cover5.png' />
          </div>
          <div>
          <img src='./cover6.png' />
          </div>
          <div>
          <img src='./cover7.png' />
          </div>
          <div>
          <img src='./cover8.png' />
          </div>
          <div>
          <img src='./cover9.png' />
          </div>
        </Slider>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  max-height: 89vh;
  position: relative;

 

  img{
    width: 100%;
    height: 89vh;

    @media only screen and (max-width: 1200px){
      height: 65vh;

    }
    
  }

  
 

`

const Arrow = styled.div`
  width: 5%;
  position: absolute;
  bottom: 30px;
  left: 48%;
  animation: example 2s infinite linear;

  @media only screen and (max-width: 1200px){
    width: 24%;
    left: 40%;
  }
  img{
    width: 100%;
  }
`
export default VideoPage
