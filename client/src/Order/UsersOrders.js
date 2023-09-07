import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Feedback from '../Feedback/Feedback'

const UserOrders = () => {
  const [userOrders, setUserOrders] = useState([]);
  const [allOrders, setAllOrders] = useState([]);
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem('userId'); // Retrieve user ID from localStorage

    axios.get(`http://localhost:9000/order/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then(response => setUserOrders(response.data))
    .catch(error => console.error('Error fetching user orders:', error));
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const handleDeleteOrder = async (orderId) => {
    try {
      await axios.delete(`http://localhost:9000/order/${orderId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setAllOrders(prevOrders => prevOrders.filter(order => order._id !== orderId));
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };


  return (
    <Container>
      <h2>Your Orders</h2>
      <ul>
        {userOrders.map(order => (
          <Slot key={order._id}>
          <div>
          <p>Pieces: {order.userId ? order.pieces : 'Unknown Pieces'}</p>
          <p>Fabric: {order.userId ? order.fabric : 'Unknown Fabric'}</p>
            </div> 
            <div>
            <p>State: {order.userId ? order.state : 'Unknown Address'}</p>
            </div>
            <div>
            <p>Date: {order.reservationDate ? formatDate(order.reservationDate) : 'Unknown Date'}</p>
            </div>
            
         <div>
         <Link to={`/orderUser/${order._id}`}><button className='button-28'>View</button></Link>
          <button className='button-28' onClick={() => handleDeleteOrder(order._id)}>Cancel</button>
         </div>
         
        </Slot>
        
        ))}
      </ul>

      
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1{
    color: var(--sec);
    font-size: 40px;
    margin: 40px 0;
  }

`

const Slot = styled.div`
  width: 1200px;
  height: 100px;
  border-radius: 15px;
  background: var(--sec);
  color: #fff;
  padding: 10px 20px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;

  P{
    color: #fff;
    margin: 10px 0;

  }


`

export default UserOrders;