import React from 'react'
import styled from 'styled-components'

function Certify() {
  return (
    <Container>
      <Wrap>
        <Left>
            <h1>ACCREDITATIONS AND
CERTIFICATIONS</h1>
            <p>Experience a peace of mind through our certified washing plant services. We are an accredited service provider with global accolades and are committed to upholding the highest industry standards.</p>
        </Left>
        <Right>
        <Slot>
          <img src='./1.png' />
        </Slot>
        <Slot>
        <img src='./2.png' />
        </Slot>
        <Slot>
        <img src='./3.png' />
        </Slot>
        <Slot>
        <img src='./4.png' />
        </Slot>
        <Slot>
        <img src='./5.png' />
        </Slot>
        <Slot>
        <img src='./6.png' />
        </Slot>
        <Slot>
        <img src='./7.png' />
        </Slot>
        <Slot>
        <img src='./8.png' />
        </Slot>
        <Slot>
        <img src='./9.png' />
        </Slot>
        <Slot>
        <img src='./10.png' />
        </Slot>
        <Slot>
        <img src='./11.png' />
        </Slot>
        </Right>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    min-height: 70vh;
    background: var(--main);
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 100px;
`
const Wrap = styled.div`
    width: 95%;
    height: 100%;
    display: flex;
    flex-direction: column;

`
const Left = styled.div`
    padding: 20px;
    padding: 50px 0;

    h1{
        color: var(--sec);
        text-transform: uppercase;
        font-size: 36px;
        padding: 40px 0;
        text-align: center;
        letter-spacing: 1.3px;

        @media only screen and (max-width: 1200px){
            font-size: 30px;
            padding: 10px 0;
        }
    }

    p{
        text-align: center;
        color: #585858;
        line-height: 2.1rem;

        @media only screen and (max-width: 1200px){
            font-size: 16px;
          }
    }

`

const Right = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

const Slot = styled.div`
    width: 200px; 
    height: 200px;
    border-radius: 5px;
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    @media only screen and (max-width: 1200px){
        width 120px;
        height: 120px;
        margin: 10px 15px;
    }

    img{
      width: 80%;
  }

`

export default Certify