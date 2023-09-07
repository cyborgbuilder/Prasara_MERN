import React, { useState } from 'react';

const Payment = ({ onPaymentConfirmed }) => {
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  const handleConfirmPayment = async () => {
    // Simulate payment confirmation logic
    // You would replace this with actual payment gateway integration
    // For example, using an API call to your payment provider
    try {
      // Simulate successful payment confirmation
      // Set paymentConfirmed to true
      setPaymentConfirmed(true);
      onPaymentConfirmed();
    } catch (error) {
      console.error('Error confirming payment:', error);
    }
  };

  return (
    <div>
      <h2>Payment</h2>
      <p>Complete your payment to confirm the order.</p>
      {!paymentConfirmed && (
        <button onClick={handleConfirmPayment}>Confirm Payment</button>
      )}
      {paymentConfirmed && <p>Payment Confirmed!</p>}
    </div>
  );
};

export default Payment;