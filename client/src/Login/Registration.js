import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Contact() {
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleRegister = async () => {
    try {
      setError('');
      setSuccess('');

      // Validation checks
      if (password.length < 6) {
        setError('Password must be at least 6 characters long');
        return;
      }

      if (password !== passwordConfirmation) {
        setError('Passwords do not match');
        return;
      }

      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setError('Invalid email format');
        return;
      }

      if (!/^\d{10}$/.test(phoneNumber)) {
        setError('Phone number must be 10 digits');
        return;
      }

      const response = await axios.post('http://localhost:9000/user/register', {
        fullname,
        username,
        email,
        phoneNumber,
        address,
        password,
      });

      setSuccess('User registered successfully');
      window.location.reload();
      window.location.href = '/';
    } catch (error) {
      setError('Error registering user');
      console.error('Error registering user:', error);
    }
  };

  return (
    <Container>
     <Header>
            <h1>Sign Up</h1>
            <p>Register to get full access now :)</p>
            <img src='https://ouch-cdn2.icons8.com/DJgWd0-py9dlSKOmAWxUgSY18UFkSvlwOXNQnRaY2Qc/rs:fit:368:701/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTI3/LzRlMTljZjgzLWVl/ZDItNDczZC05MjFh/LTFlY2U2YTE3ZjIx/Ny5wbmc.png' />
          </Header>
      <Body>
        <Wrap>
          
          <InputContainer>
         



            <Input
              type="text"
              placeholder="Name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Confirm Password" 
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {success && <SuccessMessage>{success}</SuccessMessage>}
            <Button onClick={handleRegister}>Sign Up</Button>
          </InputContainer>

          
        </Wrap>
      </Body>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const Head = styled.div`
  width: 100%;
  height: 75vh;

  div {
    width: 100%;
    height: 11vh;
    background: var(--main);
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

const Body = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f3f4f5;
  padding: 50px;
`;

const Wrap = styled.div`
  width: 95%;
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Header = styled.div`
flex: 50%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
  h1 {
    font-size: 70px;
    text-align: center;
    color: black;
  }

  img{
    width: 25%;
    margin-top: 20px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  
`;

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
`;

const SuccessMessage = styled.p`
  color: green;
  margin: 5px;
`;

const Button = styled.button`
width: 400px;
height: 45px;
margin: 10px;
letter-spacing: 1.2px;;
border: none;
border-radius: 8px;
cursor: pointer;
outline: none;
background-color: royalblue;
color: #fff;
font-size: 16px;
transform: .3s ease;
`;

export default Contact;