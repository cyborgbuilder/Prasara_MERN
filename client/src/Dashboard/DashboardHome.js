import React from 'react';
import styled from 'styled-components';
const Home = () => {

  return (
    <Container>
      <h1>Home Page</h1>
      <p>Welcome to the Prasara Washing Plant Dashboard – Your Hub for Real-time Insights</p>
      <p>You can navigate to different sections using the sidebar.</p>

      <Charts>

     <img src='https://ouch-cdn2.icons8.com/KAVxaNielvhcYC7xHkJu4qVS37TG6MB28AOzrcTIXY0/rs:fit:368:637/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzM0/L2UxZmJkN2RmLWI4/YjAtNGVhZS04MDM1/LWFlYmNlMmUyMDNm/MS5wbmc.png' />

      </Charts>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px 0;

  h1{
    margin: 10px 0;
  }
  img{
    margin-top: 15px;
  }

`

const Charts = styled.div`
  width: 100%;
  display: flex;
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    width: 20%;
  }

`
export default Home;