import React, { useEffect } from 'react';
import Payments from '../Order/Payments';
import styled from 'styled-components';
import { useActionData } from 'react-router-dom';
import UploadForm from '../Blog/UploadForm';
import UserOrders from '../Order/UsersOrders';
import AllOrders from '../Order/AllOrders';

function Dashboard() {
  const isOwner = localStorage.getItem('isOwner') === 'true';
  
 useEffect(() => {
  console.log(isOwner);
 }, [])

  return (
    <Container>
      {isOwner && <Payments />} 
      <AllOrders />
      <UploadForm />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  minheight: 100vh;
  padding: 100px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default Dashboard;
