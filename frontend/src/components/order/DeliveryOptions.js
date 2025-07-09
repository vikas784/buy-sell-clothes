import React from 'react';

const DeliveryOptions = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Delivery Details</h3>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Phone Number</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Address</label>
          <textarea className="w-full p-2 border rounded"></textarea>
        </div>
        <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600">Place Order</button>
      </form>
    </div>
  );
};

export default DeliveryOptions;