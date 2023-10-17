import React, { useEffect } from 'react';
import Payments from '../Order/Payments';
import styled from 'styled-components';
import UploadForm from '../Blog/UploadForm';
import UserOrders from '../Order/UsersOrders';
import { useNavigate, Outlet } from 'react-router-dom';
import AllOrders from '../Order/AllOrders';
import Sidebar from './Sidebar'


function Dashboard() {
  const isOwner = localStorage.getItem('isOwner') === 'true';
  const navigate = useNavigate();
  
 useEffect(() => {
  console.log(isOwner);
 }, [])

  return (
    <Container>
      {/* {isOwner && <Payments />} 
      <AllOrders />
      <UploadForm /> */}

      <Left>
        <Sidebar />
      </Left>
      <Right>
      <Outlet />
      </Right>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 150vh;
  padding: 60px 0;
  display: flex;
`;
const Left = styled.div`
  width: 18%;

`

const Right = styled.div`
width: 82%;

`
export default Dashboard;
