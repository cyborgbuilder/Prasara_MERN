import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
      <Wrap>
      <h1>Your Recent Orders</h1>
      <ul>
        {userOrders.map(order => (
          <div style={{width: '100%'}} class="card" key={order._id}>
          <a class="card1">
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
         <Link to={`/orderUser/${order._id}`}><button className='button-d'>View</button></Link>
          <button className='button-d' onClick={() => handleDeleteOrder(order._id)}>Cancel</button>
         </div>
    
         <div class="go-corner" href="#">
          <div class="go-arrow">
            →
          </div>
        </div>
          </a>
        </div>
        
        ))}
      </ul>
      </Wrap>

      
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
    width: 100%;
    color: black;
    font-size: 38px;
    margin: 40px 0;
    text-align: left;
  }

`

const Wrap = styled.div`
  width: 80%;

  ul{
    padding: 70px 50px;
  }
  

`



export default UserOrders;