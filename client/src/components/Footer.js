import React from 'react'
import styled from 'styled-components'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {  BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
function Footer() {
  return (
    <Container>
      <Up>
      <Wrap>
      <Section>
        <img src='logo1.jpg' />

        <h4>Prasara Washing Plant (Pvt) Ltd</h4>
        <p>Negombo road</p>
        <p>Thambarawila</p>
        <p>Waikkala</p>
      </Section>

      <Section_Middle>
        <p>Support</p>
        <h4>Home</h4>
        <h4>Abouts Us</h4>
        <h4>Brands</h4>
        <h4>Sustainability</h4>
        <h4>Contact Us</h4>
        
      </Section_Middle>

      <Section>
        <p>Contacts</p>
        <a href='tel:+94114797000'>< BsFillTelephoneFill className='icons_footer'  /> <h4>(+94) 11 4797000</h4></a>
        <a href='tel:+94768287040'>< BsFillTelephoneFill className='icons_footer' /> <h4>(+94) 76 8287 040</h4></a>
        <a href='mailto: rec@prasarawashing.com. '>< FiMail className='icons_footer' /> <p>rec@prasarawashing.com. </p></a>
        <a href='mailto: dhammikah@prasarawashing.com'>< FiMail className='icons_footer' /> <p>dhammikah@prasarawashing.com</p></a>
        
      </Section>
      
      </Wrap>
      </Up>
      <Down>
        <Folder>
          <p>All Rights Recieved 2023</p>
          <p>Developed by <a>Duomo</a></p>
        </Folder>
      </Down>

    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    overflow: hidden;
    

`

const Wrap = styled.div`
    width: 95%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;


    @media only screen and (max-width: 1200px){
      flex-direction: column;
      padding: 20px 0;
    }

   

    
    .icons{
        color: #fff;
        font-size: 32px;
        margin-right:  8px; 
    }
    

`

const Section = styled.div`
height: 100%;
padding: 40px 0;
margin: 0 100px;

@media only screen and (max-width: 1200px){
  width: 100%;
  margin: 0;
  padding: 10px 0;
  text-align: center;
  height: 50%;
}


p{
  color: #fff;
  font-size: 12px;
  padding-top: 5px ;

  @media only screen and (max-width: 1200px){
    font-size: 10px;
  }
  
}

h4{
  color: #fff;
  margin: 10px 0;

  @media only screen and (max-width: 1200px){
    font-size: 13px;
  }
}

img{
  width: 12%;
  border-radius: 15%;
  margin: 10px 0;
}

a{
  display: flex;
  margin: 10px 0;
  text-decoration: none;

  @media only screen and (max-width: 1200px){
    align-items: center;
    justify-content: center;
  }

}

.icons_footer{
  color: #fff;
  font-size: 20px;
  margin:  5px 10px;
}

`

const Section_Middle = styled(Section)`
@media only screen and (max-width: 1200px){
  display: none;
}

`

const Up = styled.div`
width: 100%;
height: 45vh;
background: var(--sec);
display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 1200px){
      height: 60vh;
    }

`

const Down = styled.div`
  width: 100%;
  height: 20vh;
  background: #000634;
  display: flex;
  align-items: center;
  justify-content: center;

`

const Folder = styled.div`
width: 30%;
padding: 10px 0;
border-bottom: 1px solid white;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

@media only screen and (max-width: 1200px){
  text-align: center;
}

p{
  font-size: 13px;
  margin: 10px 0;
}

img{
  width:5%;
}
a{
  font-family: 'Libre Barcode 128 Text', cursive;
  font-size: 15px;
}



`


export default Footer

