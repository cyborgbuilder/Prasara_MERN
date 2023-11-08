import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components'
const UserDetails = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:9000/user/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then(response => {
      setUser(response.data);
    })
    .catch(error => console.error('Error fetching order details:', error));
  }, [id]);

  return (
    <Container>
        
      <Bill>
      <Head>
        <Wrap >
        <img src='https://ouch-cdn2.icons8.com/2Q-aqq33rczURZlGP-8H0hMMrExx5r084OetlqrCz1g/rs:fit:368:600/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzgz/LzllMDc5MmQ2LWUx/NGEtNDQ2My1hOGM3/LTYwMzk4NmY5NDIy/ZS5wbmc.png' />

            <div class="card-photo"></div>
    </Wrap>
        </Head>
        <h1>Username:<p> {user.username }</p></h1>
        <h1>Full Name: <p>{user.fullname}</p></h1>
        <h1>Email: <p>{user.email}</p></h1>
        <h1>Phone Number: <p>{user.phoneNumber}</p></h1>
        <h1>Address: <p>{user.address }</p></h1>
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
const Wrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center; 

  img{
    width: 20%;
  }


`
const Head = styled.div`
    width: 100%;
    display: flex;
  align-items: center;
  justify-content: center; 
  padding: 8px 0;

  .user-picture {
    overflow: hidden;
    object-fit: cover;
    width: 10rem;
    height: 10rem;
    border: 4px solid #0E2238;
    border-radius: 999px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  }

  svg{
    width: 3.5rem;
  fill: currentColor;
  }



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
export default UserDetails;