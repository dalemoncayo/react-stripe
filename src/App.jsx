import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

// Load the Stripe.js library with your publishable API key
const stripePromise = loadStripe('YOUR_STRIPE_PUBLISHABLE_KEY'); // Replace with your publishable key

const App = () => {
  // State variables to store the product name, price, and error message
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState(1000); // Default price is $10.00
  const [error, setError] = useState(null);

  // Handle the click event when the user clicks the "Checkout" button
  const handleClick = async () => {
    const stripe = await stripePromise;

    // Send a request to the backend to create a checkout session
    const response = await fetch('http://localhost:4000/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productName, price }), // Send product name and price to the backend
    });

    if (response.ok) {
      // If the request is successful, retrieve the session ID from the response
      const session = await response.json();

      // Redirect the user to the Stripe Checkout page using the session ID
      const result = await stripe.redirectToCheckout({ sessionId: session.id });

      if (result.error) {
        // If there is an error during the redirect, display the error message
        setError(result.error.message);
      }
    } else {
      // If there is an error creating the checkout session, display an error message
      setError('Error creating checkout session');
    }
  };

  // Handle the change event when the user enters a product name
  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  // Handle the change event when the user enters a price
  const handlePriceChange = (event) => {
    setPrice(event.target.value * 100); // Convert price to cents for Stripe
  };

  return (
    <div>
      <label>
        Product Name:
        <input type="text" value={productName} onChange={handleProductNameChange} />
      </label>
      <label>
        Price ($):
        <input type="number" value={price / 100} onChange={handlePriceChange} />
      </label>
      <button onClick={handleClick}>Checkout</button>
      {error && <div>{error}</div>}
    </div>
  );
};

export default App;
