import React from 'react';

const Cart = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <div className="bg-white rounded-lg shadow-md p-4">
        <p>Your cart is empty.</p>
      </div>
    </div>
  );
};

export default Cart;