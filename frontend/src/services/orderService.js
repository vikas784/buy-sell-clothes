import api from './api';

const createOrder = async (orderData) => {
  const response = await api.post('/orders', orderData);
  return response.data;
};

export { createOrder };