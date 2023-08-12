import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"

function ImagePage() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    accessibility: true,
    arrows: false
  };
  return (
    <Container>
      <Wrap>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 80vh;
    background: var(--main);
    display: flex;
    align-items: center;
    justify-content: center;
    //background-image: linear-gradient(to right bottom, #f3f4f5, #b8cbe5, #84a2d4, #5778c1, #304eab, #513fa2, #692a94, #7c0081, #ad0075, #d4005f, #f10040, #ff0011);
`
const Wrap = styled.div`
    width: 95%;

    img{
      width: 60%;
    }

  div{
    z-index: 0;
  }

  
  

  img{
    width: 100%;
    border-radius: 5px;
  }



`

export default ImagePage