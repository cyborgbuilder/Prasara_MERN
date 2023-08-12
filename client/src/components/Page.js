import React from 'react'
import styled from 'styled-components'
function Page() {
  return (
    <Container>
      <Head>
        <img src='./dummy.jpg' />
        
      </Head>
      <Body>
        <Wrap>
        </Wrap>
      </Body>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;

`
const Frame = styled.div`
  border: 1px solid black;
  margin: 10px;
  padding: 10px;

`
const Head = styled.div`
    width: 100%;
    height: 75vh;

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
    background: #f3f3fe;

`

const Wrap = styled.div`
    width: 95%;
    padding: 30px 0;

`

export default Page
