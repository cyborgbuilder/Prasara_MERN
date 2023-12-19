import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FaUserAlt } from "react-icons/fa";

const Feedback = () => {
  const [data, setData] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [username, setUsername] = useState('');
  const [loggedUser, setloggedUser] = useState('');


  useEffect(() => {
    fetchTodos();
    console.log("Logged User: "+ loggedUser);
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        setloggedUser(decodedToken.username);
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, []);

  const fetchTodos = () => {
    axios.get('http://localhost:9000/feedback/sync')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching todos:', error);
      });
  };

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const userId = localStorage.getItem('userId');

    axios.post('http://localhost:9000/feedback/new', {
      username: loggedUser,
      text: newTodo,
      userId: userId,
    })
    .then((response) => {
      fetchTodos();
      setNewTodo('');
    })
    .catch((error) => {
      console.error('Error creating todo:', error);
    });
  };

  const handleDeleteTodo = (todoId) => {
    axios.delete(`http://localhost:9000/feedback/delete/${todoId}`)
      .then((response) => {
        fetchTodos(); // Fetch the updated list of todos after deletion
      })
      .catch((error) => {
        console.error('Error deleting todo:', error);
      });
  };

  return (
    <Container>
      <h2>Give us your Feedback</h2>

      <Form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Give your feedback"
        />
        <button class="btn" style={{width: '70%',margin: '25px 0', fontSize: '15px', backgroundColor: '#00838D',  padding: '15px 0', borderRadius: '6px'}} type='submit'><i class="animation"></i>Submit Feedback<i class="animation"></i></button>
      </Form>
      <Slot>
        {data.map((item) => (
        



<div style={{width: '100%'}} class="card" key={item._id}>
<a class="card1">
<div>
<h4><FaUserAlt style={{margin: '0 10px'}} />{item.username}</h4>
</div> 
  <div style={{padding: '25px 80px'}}>
  <p style={{textAlign: 'left'}}>{item.text}</p>
  </div>
  <div>
  </div>
  
  
<div>
{item.username === loggedUser && (
        <button className='button-d' onClick={() => handleDeleteTodo(item._id)}>Delete</button>


        
        
      )}
</div>

<div class="go-corner" href="#">
<div class="go-arrow">
  →
</div>
</div>
</a>
</div>



        ))}
      </Slot>

      
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 100px ;

  h2 {
    font-size: 40px;
    text-align: center;
    margin: 40px 0;

    @media only screen and (max-width: 1200px) {
      font-size: 26px;
    }
  }
`;

const Slot = styled.div`
  width: 80%;
  background: #fff;
  border-radius: 15px;
  d


  h4 {
    margin: 10px 0;
  }

  .delete-btn {
    border: none;
    outline: none;
    background: transparent;
    text-decoration: underline;
    color: var(--sec);
    margin: 0 5px;
    cursor: pointer;

    &:hover {
      color: var(--sec-light);
    }
  }
`;

const FeedbackItem = styled.div`
width: 100%;
height: 200px;
border-radius: 15px;
color: black;
padding: 10px 20px;
margin: 10px 0;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
border: 1px solid #00838D;

justify-content: space-between;

h4{
  margin: 10px 0;
}

p{
  color: black;
  height: 100px;
  padding-left: 20px;
  padding-top: 20px;


}

button{
}

`;

const Form = styled.form`
  width: 100%;
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  input {
    width: 80%;
    border: none;
    height: 150px;
    padding: 25px;
    border-radius: 15px;
    font-size: 18px;
    margin-bottom: 20px;
  }
`;



export default Feedback;
