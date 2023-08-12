import React from 'react'
import styled from 'styled-components'
function Contents() {
  return (
    <Container>
      <Wrap>
       <Head>
       <h1>Explore the world of Prasara</h1>
        <h2>Your Most Trusted Washing Partner In Textile Field</h2>
       </Head>
       <Body>
        <Left>

        </Left>
        <Right></Right>
       </Body>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f3f4f5;
   // background-image: linear-gradient(to right bottom, #f3f4f5, #b8cbe5, #84a2d4, #5778c1, #304eab, #513fa2, #692a94, #7c0081, #ad0075, #d4005f, #f10040, #ff0011);


`

const Wrap = styled.div`
    width: 95%;
    padding: 60px 0;

    @media only screen and (max-width: 1200px){
      padding: 10px 0;
    }

    


`

const Head = styled.div`
h1{
  font-size: 76px;
  text-align: center;
  padding: 50px 0 10px 0;
  letter-spacing: 2.1px;
  color: var(--sec);


  
  @media only screen and (max-width: 1200px){
    font-size: 42px;
    padding: 10px 0;
  }

}
h2{
  text-align: center;
  font-size: 30px;
  letter-spacing: 2.1px;
  color: #808080;

  @media only screen and (max-width: 1200px){
    font-size: 22px;
  }
  
}

`

const Body = styled.div`
  display: flex;

`

const Left = styled.div``

const Right = styled.div`` 
export default Contents
