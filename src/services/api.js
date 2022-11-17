import axios from 'axios';

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
