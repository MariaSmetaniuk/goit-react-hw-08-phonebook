import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// CONTACTS
export const getContacts = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

export const postContact = async contact => {
  const response = await axios.post('/contacts', contact);
  return response.data;
};

export const deleteContact = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};

// AUTH
export const signup = async credentials => {
  const responce = await axios.post('/users/signup', credentials);
  return responce.data;
};

export const login = async credentials => {
  const responce = await axios.post('/users/login', credentials);
  return responce.data;
};

export const logout = async () => await axios.post('/users/logout');

export const getCurrentUser = async () => {
  const responce = await axios.get('/users/current');
  return responce.data;
};
