import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MakeOrder from '../Order/MakeOrder'
import MetaPayments from '../Metamask/MetaPaymetnt'
import UserOrders from './UsersOrders';

function Order() {

  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        setUsername(decodedToken.username);
        
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, []);


  

  

  return (
    <Container>
      <Head>
        <div></div>
        <img src='order.png' />
      </Head>
      <h1>Welcome, <span>{username}</span></h1>
      <UserOrders />
      <MakeOrder />
      
      
      
    </Container>
  )
}
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1{
    color: var(--sec);
    font-size: 36px;
    display: flex;
    padding-top: 100px ; 
  }
  span{
    display: block;
    font-family: 'Roboto Mono', monospace;
  }
 
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
export default Order
