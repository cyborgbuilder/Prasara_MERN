import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components'
const OrderDetails = () => {
  const [order, setOrder] = useState({});
  const [editedState, setEditedState] = useState('');
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:9000/order/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then(response => {
      setOrder(response.data);
      setEditedState(response.data.state); // Initialize editedState with current state
    })
    .catch(error => console.error('Error fetching order details:', error));
  }, [id]);

  const handleStateChange = newState => {
    setEditedState(newState);
  };

  const handleSave = () => {
    axios.put(
      `http://localhost:9000/order/${id}`,
      { state: editedState },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    )
    .then(response => {
      // Update the displayed state with the edited state
      setOrder(prevOrder => ({ ...prevOrder, state: editedState }));
      console.log('Order state updated successfully');
    })
    .catch(error => console.error('Error updating order state:', error));
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <Container>
      <Bill>
      <h1>User ID: <p>{order.userId ? order.userId : 'Unknown User ID'}</p></h1>
        <h1>Date:<p> {order.reservationDate ? formatDate(order.reservationDate) : 'Unknown Date'}</p></h1>
        <h1>Pieces: <p>{order.pieces ? order.pieces : 'Unknown Pieces'}</p></h1>
        <h1>Water Level: <p>{order.waterLevel ? order.waterLevel : 'Unknown Level'}</p></h1>
        <h1>Chemical Level 01: <p>{order.chemicalsLevel01 ? order.chemicalsLevel01 : 'Unknown chemical Level'}</p></h1>
        <h1>Chemical Level 02: <p>{order.chemicalsLevel02 ? order.chemicalsLevel02 : 'Unknown chemical Level'}</p></h1>
        <h1>Fabric: <p>{order.fabric ? order.fabric : 'Unknown Fabric'}</p></h1>
        <h1>Pressure Level: <p>{order.pressureLevel ? order.pressureLevel : 'Unknown Pressure Level'}</p></h1>
        <h1>State:
          <select className='select' value={editedState} onChange={e => handleStateChange(e.target.value)}>
            <option value="Washing">Washing</option>
            <option value="Drying">Drying</option>
            <option value="Using Chemical">Using Chemical</option>
            <option value="Completed">Completed</option>
          </select>
        </h1>
        <button className='button-28' onClick={handleSave}>Save Changes</button>
      </Bill>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center; 

`

const Bill = styled.div`
  width: 600px;
  padding: 20px;
  border: 1px solid #673DE6;
  background: #673DE6;
  border-radius: 15px;

  h1{
    color: #fff;
    font-size: 20px;
    display: flex;
    margin: 20px 0;
    
  }

  p{
    font-family: 'Roboto Mono', monospace;
    font-size: 16px;
    color: #fff;
    margin: 5px 10px;
  }
`
export default OrderDetails;