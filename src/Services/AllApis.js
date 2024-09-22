import axios from 'axios';

const API_URL = 'https://contact-server-99a7.onrender.com'; 





export const fetchContacts = async () => {
    const response = await axios.get(`${API_URL}/contact`);
    return response.data;
};

export const updateContact = async (id, updatedContact) => {
    const response = await axios.put(`${API_URL}/contact/${id}`, updatedContact);
    return response.data;
};

export const deleteContact = async (id) => {
    await axios.delete(`${API_URL}/contact/${id}`);
};
export const getContacts = async () => axios.get(`${API_URL}/contact`);
export const addContact = async (contact) => axios.post(`${API_URL}/contact`, contact);