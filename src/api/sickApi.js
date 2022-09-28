import axios from 'axios';

export const getSicks = async query => {
  try {
    const response = await axios.get('http://localhost:4000/sick');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getSicks;
