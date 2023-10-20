import { React, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import getProducts from '../../utility/getProducts';

const Product = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const filterProducts = async () => {
      try {
        const result = await getProducts();
        const findProduct = result.find((product) => {
          return product.id === id;
        });
        if (!findProduct) {
          navigate('/404');
        }

        setLoading(true);
        setProducts(findProduct);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setProducts([]);
      }
    };
    filterProducts();
  }, [id, navigate]);

  return loading ? (
    <div>Loading</div>
  ) : (
    <div>
      <h2>Product</h2>
      <p>{products.name}</p>
    </div>
  );
};

export default Product;
