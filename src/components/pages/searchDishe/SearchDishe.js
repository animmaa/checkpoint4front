import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import './searchDishe.scss';

const SearchDishe = () => {
  const [ingredients, setIngredients] = useState([]);
  const [inputText, setInputText] = useState('');

  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const filteredData = ingredients.filter((filtreIngredients) => {
    if (inputText === '') {
      return filtreIngredients;
    }
    return filtreIngredients.name.toLowerCase().includes(inputText);
  });

  const getIngredients = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/ingredients`)
      .then((response) => setIngredients(response.data));
  };

  useEffect(() => {
    getIngredients();
  }, []);

  return (
    <div className="search-dishe">
      <p className="descriptif">
        Cliquez sur l&apos;ingrédient de votre choix pour voir les recettes
        comportant celui-ci
      </p>
      <div>
        <div className="search_bar">
          <TextField
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            fullWidth
            label="Recherche un ingredient"
          />
        </div>
        <div className="title-list">liste des ingredients : </div>
        {filteredData.map((ingredient) => (
          <div key={ingredient.id} className="list-ingre">
            <ul>
              <Link to={`/listdishes/${ingredient.id}`}>
                &ndash; {ingredient.name}&ensp;
              </Link>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchDishe;
