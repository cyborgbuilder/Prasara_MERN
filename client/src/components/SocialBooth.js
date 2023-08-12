import React from 'react'
import styled from 'styled-components'
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";
function SocialBooth() {
  return (
    <Container>
      <FaFacebook className='icons' />
      <FaYoutube className='icons' />
      <FaInstagram className='icons' />
    </Container>
  )
}

const Container = styled.div`
    position: fixed;
    top: 40%;
    right: 0;
    display: flex;
    flex-direction: column;
    background: #fff;
    z-index: 1000;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    .icons{
        color: var(--sec);
        font-size: 35px;
        z-index: 1000;
        margin: 5px;
    }


`

export default SocialBooth
