import { useState } from 'react';
import { createOrder } from '../services/orderService';

const useOrder = () => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const placeOrder = async (orderData) => {
    setLoading(true);
    try {
      const newOrder = await createOrder(orderData);
      setOrder(newOrder);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { order, loading, error, placeOrder };
};

export default useOrder;