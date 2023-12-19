import React, { Component } from 'react';
import styled from 'styled-components';
import './Order.css';



class Balance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isValid: this.validateForm(),
    };
  }


  static calculateBalance(waterLevel, chemicalsLevel01, chemicalsLevel02, pressureLevel, pieces) {
    let balance = 0;
    if (pieces === 'between 1000 - 5000') {
      balance += 400;
    }

    return balance;
  }

  validateForm() {
    const { waterLevel, chemicalsLevel01, chemicalsLevel02, pressureLevel, pieces } = this.props;
    if (!waterLevel || !chemicalsLevel01 || !chemicalsLevel02 || !pressureLevel || !pieces) {
      return false;
    }
    return true;
  }

  render() {
    const { waterLevel, chemicalsLevel01, chemicalsLevel02, pressureLevel, pieces } = this.props;
    const { isValid } = this.state;

    return (
      <Container>
        {isValid ? (
          <Success>
            <h3>Accrued Total for Your Order</h3>
            <p>You may proceed with order submission once the payment has been successfully processed</p>
            <div>
              <h2>Balance: </h2>
              <h2>${Balance.calculateBalance(waterLevel, chemicalsLevel01, chemicalsLevel02, pressureLevel, pieces)}</h2>
            </div>
          </Success>
        ) : (
          <Warn>
            <p>Kindly complete all the required input fields to access the status of your order balance</p>
            <div>
              <h2>Balance: </h2>
              <h2>$0</h2>
            </div>
          </Warn>
        )}
      </Container>
    );
  }
}

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


export default Balance;
