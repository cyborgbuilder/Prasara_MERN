import React from 'react';
import styled from 'styled-components';
import './Order.css'

// Calculate the balance based on the selected options
export function calculateBalance(waterLevel, chemicalsLevel01, chemicalsLevel02, pressureLevel, pieces) {
  let balance = 0;
  if (pieces === 'between 1000 - 5000') {
    balance += 400;   
  }
  if (waterLevel === 'Low') {
    balance += 510;
  }
  if (waterLevel === 'Medium') {
    balance += 513;
  }
  if (waterLevel === 'High') {
    balance += 517;
  }
  if (chemicalsLevel01 === 'Sodium Hypochlorite 12.5%') {
    balance += 25;
  }
  if (chemicalsLevel01 === 'Hydrochloric Acid') {
    balance += 15;
  }
  if (chemicalsLevel01 === 'Oxalic Acid') {
    balance += 12;
  }
  if (chemicalsLevel02 === 'Sodium Hypochlorite 12.5%') {
    balance += 32;
  }
  if (chemicalsLevel02 === 'Super Red II Modified') {
    balance += 23;
  }
  if (chemicalsLevel02 === 'Super Red II Degreaser') {
    balance += 17;
  }
  if (chemicalsLevel02 === 'Green Cat 5000') {
    balance += 13;
  }
  if (chemicalsLevel02 === 'DeScale7 Liquid Descaler') {
    balance += 18;
  }
  if (pressureLevel === '2500 PSI') {
    balance += 20;
  }
  if (pressureLevel === '3000 PSI') {
    balance += 26;
  }
  if (pressureLevel === '3500 PSI') {
    balance += 32;
  }
  if (pressureLevel === '4000 PSI') {
    balance += 40;
  }
  return balance;
}

const Balance = ({ waterLevel, chemicalsLevel01, chemicalsLevel02, pressureLevel, pieces }) => {
  // Validation function to check if any field is empty
  const validateForm = () => {
    if (!waterLevel || !chemicalsLevel01 || !chemicalsLevel02 || !pressureLevel || !pieces) {
      return false;
    }
    return true;
  };

  const isValid = validateForm();

  return (
    <Container>
      {isValid ? (
        <Success>
          <h3>Accrued Total for Your Order</h3>
          <p>You may proceed with order submission once the payment has been successfully processed</p>
          <div>
          <h2>Balance:  </h2>
          <h2>${calculateBalance(waterLevel, chemicalsLevel01, chemicalsLevel02, pressureLevel, pieces)}</h2>
          </div>
          <div>
          <h4>Discount Rate </h4>
          <h4>0</h4>
          </div>
          

          <div>
          <h4>Taxes and Fees</h4>
          <h4>0</h4>
          </div>

          <div>
          <h4>Setup</h4>
          <h4>0</h4>
          </div>

          
          
          
          </Success>
      ) : (
        <Warn>

          <p>
          Kindly complete all the required input fields to access the status of your order balance
          </p>
          
          <div>
          <h2>Balance:  </h2>
          <h2>0$</h2>
          </div>
          <div>
          <h4>Discount Rate </h4>
          <h4>0</h4>
          </div>
          

          <div>
          <h4>Taxes and Fees</h4>
          <h4>0</h4>
          </div>

          <div>
          <h4>Setup</h4>
          <h4>0</h4>
          </div>

          
          
          
        </Warn>
        
      )}
    </Container>
  );
};

export default Balance;
const Container = styled.div`
  width: 100%;
  padding: 30px;

`
const Warn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  p{
    color: red;
    text-align: center;
    margin-bottom: 40px;
  }

  h1{
    color: var(--sec);
    text-decoration: line-through;

  }

  h4{
    color: #808080;
    text-decoration: line-through;

  }

  div{
    width: 70%;
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
  }
`



const Success = styled.div`
display: flex;
align-items: center;
flex-direction: column;
//justify-content: center;
h3{
  color: black;
  text-align: center;
  margin-bottom: 10px;
}
p{
  color: Green;
  text-align: center;
  margin-bottom: 30px;
}

h1{
  color: var(--sec);

}

h4{
  color: #808080;


}

div{
  width: 70%;
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
}

`
