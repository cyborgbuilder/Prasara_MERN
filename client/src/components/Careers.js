import React from 'react'
import styled from 'styled-components'
function Careers() {
  return (
    <Container>
      <Head>
        <div></div>
        <img src='https://storage.googleapis.com/cdn.malibangroup.com/theme/images-min/careers/careers-top-banner.jpg' />
      </Head>
      <Body>
        <Wrap>
           <Header>
           <h1>Employee Welfare </h1>
            <p>Our employees are our backbone. Actually they are not employees, they are our partners . We consider it our prime responsibility to ensure a satisfactory living condition for them and to improve the corporate working environment. We have confirmed it through a satisfactory salary, uniforms, food, transport facilities, insurance, comfort facilities .</p>
            <h2>Job Opportunities</h2>
            <h3>No current job vacancies available</h3>
           </Header>
            

            
        </Wrap>
      </Body>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;

`



const Head = styled.div`
    width: 100%;
    height: 75vh;

    div{
      width: 100%;
      height: 11vh;
      background: var(--main);
    }


    @media only screen and (max-width: 1200px){
        height: 46vh;
    }

    img{
        width: 100%;
        height: 100%;
    }

`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #f3f4f5;
    padding: 50px 0;

`

const Wrap = styled.div`
    width: 95%;
    padding: 30px 0;



   

`

const Header = styled.div`
h1{
  font-size: 70px;
  text-align: center;
  color: var(--sec);

  @media only screen and (max-width: 1200px){
    font-size: 42px;
  }

}

p{

  padding: 30px 10px;
  line-height: 2.1rem;
  letter-spacing: 2.1px;

  @media only screen and (max-width: 1200px){
    font-size: 16px;
    text-align: center;
  }
}

h2{
    text-align: center;
    padding: 100px 0;
    font-size: 40px;

    @media only screen and (max-width: 1200px){
        font-size: 32px;
      }
}
h3{
    text-align: center;
    color: var(--sec);

    @media only screen and (max-width: 1200px){
        font-size: 18px;
      }
}

`


export default Careers
