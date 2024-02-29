// components/Order.js
import React, { useState } from 'react';

const Order = () => {
  const [foodId, setFoodId] = useState('');
  const [userId, setUserId] = useState('');
  const [orderId, setOrderId] = useState('');
  const [paymentMode, setPaymentMode] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    fetch('/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ foodId, userId, orderId, paymentMode })
    })
    .then(response => response.json())
    .then(data => console.log('Order placed:', data))
    .catch(error => console.error('Error placing order:', error));
  };

  return (
    <div>
      <h2>Place Order</h2>
      <form onSubmit={handleSubmit}>
        <label>Food ID:</label>
        <input type="text" value={foodId} onChange={(e) => setFoodId(e.target.value)} />
        <label>User ID:</label>
        <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
        <label>Order ID:</label>
        <input type="text" value={orderId} onChange={(e) => setOrderId(e.target.value)} />
        <label>Payment Mode:</label>
        <input type="text" value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)} />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Order;