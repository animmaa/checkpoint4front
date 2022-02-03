import React, { useEffect, useState } from 'react';
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
        <div className='title-list'>
          liste des ingredients : </div>
        {ingredients.map((ingredient) => (
          <div className='list-ingre'>
            <ul>- {ingredient.name}</ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchDishe;
