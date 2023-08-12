import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Contact() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:9000/user/login', {
        username,
        password,
      });

      const token = response.data.token;
      localStorage.setItem('token', token);
      console.log('Login successful');

      // Reload the page and set location to the home page
      window.location.reload();
      window.location.href = '/'; // Set the page location to the home page
    } catch (error) {
      setError('Invalid username or password');
      console.error('Error logging in:', error);
    }
  }


  return (
    <Container>
      <Head>
        <div></div>
        <img src='./contact.png' alt="Contact" />
      </Head>
      <Body>
        <Wrap>
          <Header>
            <h1>Login</h1>
          </Header>
          <InputContainer>
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
            <Button onClick={handleLogin}>Login</Button>
          </InputContainer>

          <Link to='/signup'><a >Login</a></Link>
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