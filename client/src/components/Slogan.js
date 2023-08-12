import React from 'react'
import styled from 'styled-components'

function Slogan() {
  return (
    <Container>

          <Image>
            <img src='https://ik.imagekit.io/y5xyemmwee7/assets/images/v4/walking-man.webp' />
            </Image>
      <Wrap>
        <div>
            <img src='./comma.png' />
            <Year>2000</Year>
            <p>"“We have 30+ years of experience in the
Apparel industry”</p>
            <img src='./comma.png' />
        </div>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--main);
    //background: url('https://www.casal.fr/assets/images/banniere/banniere-renseignements.jpg');
    background-size: cover;
    position: relative;

    @media only screen and (max-width: 1200px){
      height: 50vh;
      padding: 30px 0;
    }

`

const Image = styled.div`
    width: 100%;
    position: absolute;
    top: 0%;
    left: 5%;
    z-index: 1;

    @media only screen and (max-width: 1200px){
        left: 40%;
        display: none;
      }


    img{
        width: 88%;

        @media only screen and (max-width: 1200px){
            width: 30%;
          }
    }

`


const Wrap = styled.div`
    width: 80%;
    background: #fff;
    padding: 20px;
    position: relative;
    border-radius: 10px;
    box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);


    @media only screen and (max-width: 1200px){
      width: 90%;
      padding: 10px;
    }
    

    div{
        width: 100%;
        height: 100%;
        border: 1px solid #585858;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        z-index: 1000;
    }
    p{
        text-align: center;
        padding: 30px 20px;
        font-size: 27px;
        z-index: 1000;
        color: var(--sec);
    }
    img{
      width: 5%;
        margin: 6px 0;

        @media only screen and (max-width: 1200px){
          width: 10%;
          margin: 3px 0;
        }
    }
    
     

`

const Year = styled.h1`
font-family: Merriweather-Light;
font-size: 175px;
color: #19386c;
opacity: 0.1;
position: absolute;
left: 35%;
top: 13%;

@media only screen and (max-width: 1200px){
  font-size: 120px;
  top: 30%;
  left: 18%;
}

`



export default Slogan