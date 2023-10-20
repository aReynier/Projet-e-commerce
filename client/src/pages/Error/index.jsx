import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <p>Erreur 404, cette page n&apos;existe pas</p>
      <Link to="/">Retour à la page d&apos;accueil</Link>
    </div>
  );
};

export default Error;
