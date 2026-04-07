import axios from 'axios'

export const verProfesional = async (id) => {
  try {
    const response = await axios.get(`/usuario/${id}`);
    return response;
  } catch (error) {
    console.log(error.response.data);
  }
}