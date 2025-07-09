import api from './api';

const getMenuItems = async () => {
  const response = await api.get('/menu');
  return response.data;
};

export { getMenuItems };