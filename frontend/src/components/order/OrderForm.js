import React, { useState } from 'react';
import DeliveryOptions from './DeliveryOptions';
import PickupOptions from './PickupOptions';

const OrderForm = () => {
  const [deliveryOption, setDeliveryOption] = useState('delivery');

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Place Your Order</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Delivery Option</label>
        <select
          className="w-full p-2 border rounded"
          value={deliveryOption}
          onChange={(e) => setDeliveryOption(e.target.value)}
        >
          <option value="delivery">Delivery</option>
          <option value="pickup">Pickup</option>
        </select>
      </div>
      {deliveryOption === 'delivery' ? <DeliveryOptions /> : <PickupOptions />}
    </div>
  );
};

export default OrderForm;