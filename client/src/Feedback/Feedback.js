import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'

const Feedback = () => {
  const [data, setData] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetchTodos();
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

    axios.post('http://localhost:9000/feedback/new', {
      text: newTodo,
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
      <h1>Feedback</h1>
      <Slot>
        {data.map((item) => (
          <p key={item._id}>
            <h4>{item.username}</h4>
            {item.text}
            <button className='delete_btn' onClick={() => handleDeleteTodo(item._id)}>Delete</button>
          </p>
        ))}
      </Slot>

      <Form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Give your feedback"
        />
        <button className='button-89' type="submit">Submit Feedback</button>
      </Form>
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
    font-size: 40px;
    text-align: center;
    color: var(--sec);
    margin: 40px 0;
  
    @media only screen and (max-width: 1200px){
      font-size: 26px;
    }

`

const Slot = styled.div`
    width: 70%;
    background: #fff;
    border-radius: 15px;
    padding: 20px;

    h4{
      margin: 10px 0;
    }
    .delete_btn{
      border: none;
      outline: none;
      background: #fff;
      text-decoration: underline;
      color: var(--sec);
      margin: 0 5px; 
    }

`

const Form = styled.form`
    width: 100%;
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;


    input{
      width: 50%;
      border: none;
      padding: 50px;
      border-radius: 15px;
      font-size: 18px;
      margin-bottom: 20px;
    }

    

`

export default Feedback;