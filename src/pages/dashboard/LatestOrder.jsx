import React from 'react';
import './app.css';

function Orders() {
  return (
    <div className="orders">
      <h1>Latest Orders</h1>
      <div className="order-list">
        <div className="order-item">
          <p>John Doe</p>
          <p>Order ID: CS-1095</p>
          <p>Order Date: 02 Feb</p>
          <p>Cost: AED 20</p>
          <p>Status: Ongoing</p>
        </div>
        <div className="order-item">
          <p>John Doe</p>
          <p>Order ID: CS-1095</p>
          <p>Order Date: 02 Feb</p>
          <p>Cost: AED 20</p>
          <p>Status: Completed</p>
        </div>
        {/* Add more orders as needed */}
      </div>
    </div>
  );
}

export default Orders;
