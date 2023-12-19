import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const PaymentHistory = () => {
  const [paymentHistory, setPaymentHistory] = useState([]);

  useEffect(() => {
    // Fetch payment history data from the server
    axios.get('http://localhost:9000/api/payments')
      .then(response => setPaymentHistory(response.data))
      .catch(error => console.error('Error fetching payment history:', error));
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <Container>
      <Wrap>
      <Bill>
        {paymentHistory.map(payment => (
          <li key={payment.transactionId}>
            
            <h1><p>{`Transaction ID: ${payment.transactionId} `}</p><p>{`Date: ${payment.timestamp} `}</p></h1>
            <h1><p>{`Amount: ${payment.amount}`}</p></h1>
          </li>
        ))}
      </Bill>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

`
const Wrap = styled.div`
  width: 90%;
  padding-top: 50px;

`

const Bill = styled.div`
width: 100%;
padding: 20px;
background: #fff;
border: 2px solid #323232;
box-shadow: 4px 4px #323232;
border-radius: 5px;

li{
  list-style-type: none;
}
h1{
  color: #323232;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  
}

p{
  font-family: 'Roboto Mono', monospace;
  font-size: 16px;
  color: #666;
  margin: 5px 10px;
}

`

export default PaymentHistory;
