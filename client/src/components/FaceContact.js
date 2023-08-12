import React from 'react'
import styled from 'styled-components'

function Feedback() {
  return (
    <Container>
      <Wrap>
        <Left>
            <h1>Connect with Us</h1>
            <p>We value your engagement and would love to
hear from you. <br></br>Thus, inquiries, feedback, or
requests of exploring potential collaborations
are quite welcome. Our team of experts is
ready to assist you and provide the
information you need.</p>
            <button className="button-89" >Contact us</button>
        </Left>
        <Right>
            <img src='https://static.vecteezy.com/packs/media/components/pricing/pricing-main/img/pricing-hero-800px-b8810bc733a9898472effdd5fe2bc606.jpg' />
        </Right>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    min-height: 40vh;
    background: #f7f9fa;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrap = styled.div`
    width: 95%;
    height: 100%;
    display: flex;
    border: 1px solid white;

    @media only screen and (max-width: 1200px){
        flex-direction: column;
      }

`
const Left = styled.div`
    width: 70%;
    padding-right: 240px;
    padding-top: 20px;

    @media only screen and (max-width: 1200px){
        width: 100%;
        padding: 0;
      }

    h1{
        text-align: left;
        color: var(--sec);
    }
    p{
        line-height: 1.8rem;
        padding: 10px 0;
        margin-bottom: 20px;
    }
    // button {
    //     flex: 1 1 auto;
    //     background-image: linear-gradient(to right, #fbc2eb 0%, #a6c1ee 51%, #fbc2eb 100%);
        
    //     padding: 15px;
    //     border: none;
    //     text-align: center;
    //     text-transform: uppercase;
    //     transition: 0.5s;
    //     background-size: 200% auto;
    //     color: white;
    //    /* text-shadow: 0px 0px 10px rgba(0,0,0,0.2);*/
    //     box-shadow: 0 0 20px #eee;
    //     border-radius: 10px;
    //    }

    }

`

const Right = styled.div`
    width: 30%;

     @media only screen and (max-width: 1200px){
         margin-top: 20px;
         width: 100%;
     }

    img{
        width: 100%;
        height: 100%;
    }
`

export default Feedback

