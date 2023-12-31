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

      window.location.reload();
      window.location.href = '/dashboard/order';
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
          <select className='select-2' value={editedState} onChange={e => handleStateChange(e.target.value)}>
            <option value="queue">Queue</option>
            <option value="Washing">Washing</option>
            <option value="Drying">Drying</option>
            <option value="Using Chemical">Using Chemical</option>
            <option value="Completed">Completed</option>
          </select>
        </h1>
        <button class="btn" style={{width: '100%', fontSize: '15px', backgroundColor: '#00838D',  padding: '12px 0', borderRadius: '6px'}} onClick={handleSave}><i class="animation"></i>Save Changes<i class="animation"></i></button>
      </Bill>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 90vh;


  display: flex;
  align-items: center;
  justify-content: center; 

`

const Bill = styled.div`
  width: 600px;
  padding: 20px;
  background: #fff;
  border: 2px solid #323232;
  box-shadow: 4px 4px #323232;
  border-radius: 5px;

  .select-2 {
    width: 100%;
    min-width: 10ch;
    max-width: 20ch;
    margin: 0 20px;
    border: 1px solid black;
    border-radius: 0.25em;
    padding: 0.25em 0.5em;
    font-size: 17px;
    cursor: pointer;
    line-height: 1.1;
    background-color: #fff;
    background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
  }

  h1{
    color: #323232;
    font-size: 20px;
    display: flex;
    margin: 20px 0;
    
  }

  p{
    font-family: 'Roboto Mono', monospace;
    font-size: 16px;
    color: #666;
    margin: 5px 10px;
  }
`

const Button = styled.button`

width: 100%;
height: 45px;
margin: 10px;
letter-spacing: 1.2px;;
border: none;
border-radius: 8px;
cursor: pointer;
outline: none;
background-color: #00838D;
color: #fff;
font-size: 16px;
transform: .3s ease;

&:hover{
  background-color: #048C9C;
}

`
export default OrderDetails;