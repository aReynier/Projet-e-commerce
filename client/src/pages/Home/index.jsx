import React from 'react';
import { useEffect, useState } from 'react';
import getProducts from '../../utility/getProducts';
import ProductMap from './ProductMap';

const Home = () => {
  const [products, setProducts] = useState([]);

  const axiosProducts = async () => {
    const result = await getProducts();
    setProducts(result);
  };

  useEffect(() => {
    axiosProducts();
  }, []);

  return (
    <div>
      <div className="flex flex-start items-center h-20 px-4">
        {products?.map((eachProduct, index) => (
          <ProductMap key={eachProduct.name + index} data={eachProduct} />
        ))}
      </div>
    </div>
  );
};

export default Home;
