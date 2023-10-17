import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import './Dashboard.css'


const AllOrders = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9000/user')
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            console.log('Received data:', data); // Log the data to inspect it
            setUsers(data);
          })
          .catch((error) => console.error('Error fetching users:', error));
      }, []);

      const handleDeleteOrder = async (userId) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
      
        if (confirmDelete) {
          try {
            await axios.delete(`http://localhost:9000/user/${userId}`, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
            });
            setUsers(prevUsers => prevUsers.filter(user => user._id !== userId));
          } catch (error) {
            console.error('Error deleting user:', error);
          }
        }
      };


  return (
    <Container>
  {users.map(user => (
    <div class="card" key={user._id}>
      <a class="card1">
      <div>
      <p>Username: {user.username}</p>
      <p>Name: {user.fullname}</p>
        </div> 
        <div>
        <p>Email: {user.email}</p>
        </div>
        <div>
        <p>Phone NO.: {user.phoneNumber}</p>
        </div>
        
     <div>
     <Link to={`${user._id}`}><button className='button-d'>View</button></Link>
      <button className='button-d' onClick={() => handleDeleteOrder(user._id)}>Delete</button>
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