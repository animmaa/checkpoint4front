import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './searchDishe.scss';

const SearchDishe = () => {
  const [ingredients, setIngredients] = useState([]);

  const getIngredients = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/ingredients`)
      .then((response) => setIngredients(response.data));
  };

  useEffect(() => {
    getIngredients();
  }, []);
console.log(ingredients)
  return (
    <div className="search-dishe">
      <div>
        <h1>liste des ingredients : </h1>
        {ingredients.map((ingredient) => (
          <div>
            <div>{ingredient.name}</div>
            {/* <Link to={`/api/dishes/${ingredient.id}`} className="buttonLink">
              Par ici
            </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchDishe;
