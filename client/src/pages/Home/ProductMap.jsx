import React from 'react';
import { Link } from 'react-router-dom';

const ProductMap = (props) => {
  const { id, name, price, type } = props.data;

  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
      <p>{type}</p>
      <Link to={'/product/' + id}>Voir le produit</Link>
      <button>Ajouter au panier</button>
    </div>
  );
};

export default ProductMap;
