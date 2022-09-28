import axios from 'axios';

const api_url = process.env.REACT_APP_API_URL

export const getSicks = async () => {
  try {
    const response = await axios.get(api_url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getSicks;
