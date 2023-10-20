import axios from 'axios';

const getProducts = async () => {
  try {
    const response = await axios.get('http://localhost:5500/product');
    return response.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default getProducts;
