import React from 'react';

const MenuItemCard = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{item.name}</h3>
        <p className="text-gray-700 mb-4">{item.description}</p>
        <p className="text-yellow-500 font-bold">₹{item.price.toFixed(2)}</p>
        <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600">Add to Cart</button>
      </div>
    </div>
  );
};

export default MenuItemCard;