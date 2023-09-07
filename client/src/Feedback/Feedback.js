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
      username: username,
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
      <h1>Give us your Feedback</h1>

      <Form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Give your feedback"
        />
        <SubmitButton type="submit">Submit Feedback</SubmitButton>
      </Form>
      <Slot>
        {data.map((item) => (
          <FeedbackItem key={item._id}>
            <h4><FaUserAlt style={{margin: '0 10px'}} />{item.username}</h4>
            <p>{item.text}</p>
          <div>

          {item.username === loggedUser && (
        <button className="button-28" onClick={() => handleDeleteTodo(item._id)}>Delete</button>
      )}
          
          </div>
          </FeedbackItem>
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

  h1 {
    font-size: 40px;
    text-align: center;
    color: var(--sec);
    margin: 40px 0;

    @media only screen and (max-width: 1200px) {
      font-size: 26px;
    }
  }
`;

const Slot = styled.div`
  width: 50%;
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
background: var(--sec);
color: #fff;
padding: 10px 20px;
margin: 10px 0;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

justify-content: space-between;

h4{
  margin: 10px 0;
}

p{
  color: #fff;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 40px;

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
    width: 50%;
    border: none;
    height: 80px;
    padding: 25px;
    border-radius: 15px;
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

const SubmitButton = styled.button`
  background-color: var(--sec);
  color: white;
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 50px ;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  &:hover {
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73% ) 0px 16px 10px -10px;
  }
`;

export default Feedback;
