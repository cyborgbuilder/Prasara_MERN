import React, { useState } from 'react';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios'; // You'll need axios for making API calls to your server

const StripePaymentForm = ({ amount, onSuccess, onError }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async () => {
    if (!stripe || !elements) {
      // Stripe is not yet loaded or some elements are not ready
      return;
    }

    // Create a payment method
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      // Handle payment error
      onError(error);
    } else {
      // Send the payment method ID to your server for further processing
      try {
        const response = await axios.post('/your-server-endpoint', {
          amount: amount, // Replace with your payment amount
          paymentMethodId: paymentMethod.id,
        });

        // Handle the server response here, and trigger success or error accordingly
        if (response.data.success) {
          onSuccess(response.data);
        } else {
          onError(response.data.error);
        }
      } catch (error) {
        onError('Server error');
      }
    }
  };

  return (
    <div>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
            },
          },
        }}
      />
      <button onClick={handlePayment}>Pay with Stripe</button>
    </div>
  );
};

export default StripePaymentForm;