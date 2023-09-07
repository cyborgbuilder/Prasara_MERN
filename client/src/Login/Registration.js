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

  const handleRegister = async () => {
    try {
      setError('');
      setSuccess('');

      // Validation checks
      if (password.length < 6) {
        setError('Password must be at least 6 characters long');
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
      console.log('User registered successfully');
    } catch (error) {
      setError('Error registering user');
      console.error('Error registering user:', error);
    }
  };

  return (
    <Container>
      <Head>
        <div></div>
        {/* <img src='./contact.png' alt="Contact" /> */}
      </Head>
      <Body>
        <Wrap>
          <Header>
            <h1>Register</h1>
          </Header>
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
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {success && <SuccessMessage>{success}</SuccessMessage>}
            <Button onClick={handleRegister}>Register</Button>
          </InputContainer>

          <Link to='/login'><a>Login</a></Link>
        </Wrap>
      </Body>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
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
  width: 100%;
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
  h1 {
    font-size: 70px;
    text-align: center;
    color: var(--sec);
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
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
  padding: 10px;
  margin: 10px;
  background-color: var(--sec);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default Contact;