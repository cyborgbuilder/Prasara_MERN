import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import './Order.css'


const AllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9000/order/all-orders', { 
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then(response => setAllOrders(response.data))
    .catch(error => console.error('Error fetching all orders:', error));
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const handleDeleteOrder = async (orderId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if(confirmDelete){
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
    }
  };

  return (
    <Container>
  {allOrders.map(order => (
    <div class="card" key={order._id}>
      <a class="card1">
      <div>
      <p>Username: {order.userId ? order.userId.username : 'Unknown User'}</p>
      <p>Name: {order.userId ? order.userId.fullname : 'Unknown User'}</p>
        </div> 
        <div>
        <p>State: {order.userId ? order.state : 'Unknown Address'}</p>
        </div>
        <div>
        <p>Date: {order.reservationDate ? formatDate(order.reservationDate) : 'Unknown Date'}</p>
        </div>
        
     <div>
     <Link to={`${order._id}`}><button className='button-d'>View</button></Link>
      <button className='button-d' onClick={() => handleDeleteOrder(order._id)}>Delete</button>
     </div>

     <div class="go-corner" href="#">
      <div class="go-arrow">
        →
      </div>
    </div>
      </a>
    </div>
  ))}


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
  width: 80%;
  height: 100px;
  border-radius: 15px;
  background: #673DE6;
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

export default AllOrders;