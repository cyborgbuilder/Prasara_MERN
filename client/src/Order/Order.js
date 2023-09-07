import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Feedback from '../Feedback/Feedback';
import MakeOrder from '../Order/MakeOrder'
import PayPalButtonComponent from '../Order/PayPalButtonComponenet';
import Balance from './Blance'
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
      <h1>Welcome, {username}</h1>
      <MakeOrder />
      <UserOrders />
      
      
    </Container>
  )
}
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 100px 0;
 
 `
export default Order
