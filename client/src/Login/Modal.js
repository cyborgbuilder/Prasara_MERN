import React, { useState } from 'react';
import "./Modal.css";
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Modal({ isOpen, setOpenModal }) {

    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const openSignUpModal = () => {
    setShowSignUpModal(true);
    setOpenModal(false); // Close the login modal when opening the sign-up modal
  };

  const closeSignUpModal = () => {
    setShowSignUpModal(false);
  };
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:9000/user/login', {
        username,
        password,
      });

      

      const secretKey = 'npHlCV9tNXxy8svZACnjxA0kEAcRcJ8z'; 
      const token = response.data.token;

      const userResponse = await axios.get('http://localhost:9000/user/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

      const isAdmin = response.data.isAdmin;
      const isOwner = response.data.isOwner;
      const users = userResponse.data; 
      const user = users.find((u) => u.username === username);

      localStorage.setItem('token', token);
      localStorage.setItem('isAdmin', isAdmin);
      localStorage.setItem('isOwner', isOwner);
      localStorage.setItem('userId', user._id);

      
      console.log('Login successful');
      
      window.location.reload();
      window.location.href = '/';
    } catch (error) {
      setError('Invalid username or password');
      console.error('Error logging in:', error);
    }
  }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Login</h1>
        </div>
        <div className="body">
        <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ErrorMessage>{error}</ErrorMessage>
        </div>
        <div className="footer">
          
          <Button onClick={handleLogin}>Login</Button>
          <p>OR</p>
          <Link to='/signup'><a >Create Account?</a></Link>
        </div>
      </div>
      
      
    </div>
  );
}





const Input = styled.input`
width: 400px;
height: 45px;
padding: 12px;
border-radius: 5px;
margin: 15px 0;
border: 1.5px solid lightgrey;
outline: none;
transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
box-shadow: 0px 0px 20px -18px;

&:hover{
    border: 2px solid lightgrey;
    box-shadow: 0px 0px 20px -17px;
    cursor: pointer;
}

&:active{
    transform: scale(0.95);
}

&:focus{
    border: 2px solid grey;
}
`;

const ErrorMessage = styled.p`
  color: red;
  margin: 5px;
  font-size: 12px;
`;


const Button = styled.button`
width: 400px;
border: none;
outline: none;
background-color: royalblue;
border-radius: 10px;
color: #fff;
font-size: 16px;
transform: .3s ease;

`

export default Modal;