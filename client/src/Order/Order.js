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
      <h1>It's great to have you aboard {username}</h1>
      <Greeting>Thank you for choosing our services and placing your order. We're excited to assist you with your purchase and ensure a seamless and satisfying experience. If you have any questions or need assistance, please don't hesitate to reach out. Welcome to the Prasara family!</Greeting>
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
    color: black;
    font-size: 39px;
    display: flex;
    padding-top: 100px; 
  }
  
  
 
 `

 const Greeting = styled.p`
    padding: 40px 80px;
    text-align: center;
    line-height: 2.1rem;
 
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
