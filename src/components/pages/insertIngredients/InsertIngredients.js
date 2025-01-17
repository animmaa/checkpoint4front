import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import './insertingredient.scss';

const InsertIngredients = () => {
  const { id } = useParams();
  const [ingred, setIngred] = useState([]);
  const [inputIngredient, setInputIngredient] = useState([]);
  const [allIngredientAvailable, setAllIngredientAvailable] = useState([]);
  const [inputText, setInputText] = useState('');

  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const filteredData = allIngredientAvailable.filter((filtreIngredients) => {
    if (inputText === '') {
      return filtreIngredients;
    }
    return filtreIngredients.name.toLowerCase().includes(inputText);
  });

  const getAllIngredientAvailable = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/api/ingredients`)
      .then((response) => setAllIngredientAvailable(response.data));
  };

  const getIngred = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/api/dishes/liste/${id}`)
      .then((response) => setIngred(response.data));
  };

  const AddIngredientToSelectedRecipie = async (ingredName) => {
    await axios.post(`${process.env.REACT_APP_API_URL}/api/ingredients`, {
      name: ingredName,
    });
    await getAllIngredientAvailable();
  };

  const AddIngredientTo = async (ingredId) => {
    await axios.post(
      `${process.env.REACT_APP_API_URL}/api/ingredients/add/${id}`,
      {
        idIngredients: ingredId,
      },
    );
    await getIngred();
  };

  const DeleteIngredientTo = async (deleteIngredId) => {
    await axios.delete(
      `${process.env.REACT_APP_API_URL}/api/ingredients/delete/${deleteIngredId}`,
    );
    await getIngred();
  };

  useEffect(() => {
    getAllIngredientAvailable();
    getIngred();
  }, []);

  return (
    <div>
      <div className="create-ingredients">
        <input
          className="form-control"
          id="ingredient input"
          type="text"
          onChange={(event) => setInputIngredient(event.target.value)}
        />
        <button
          type="button"
          className=""
          onClick={() => AddIngredientToSelectedRecipie(inputIngredient)}
        >
          Créer nouvelle ingredient
        </button>
      </div>
      <div className="global-insert-ingredients">
        <div className="col-left">
          Ingredients du plat : <br />
          <br />
          {ingred.map((ingredientList) => (
            <li className="listing-ingredient-plat" key={ingred.id}>
              <button
                type="button"
                className=""
                onClick={() => DeleteIngredientTo(ingredientList.id)}
              >
                Supprimer
              </button>
              &emsp;
              {ingredientList.name}{' '}
            </li>
          ))}
        </div>

        <div className="col-right">
          <div className="search_bar">
            <TextField
              id="outlined-basic"
              onChange={inputHandler}
              variant="outlined"
              fullWidth
              label="Recherche un ingredient"
            />
          </div>
          {filteredData.map((ingredientList) => (
            <li className="listing-ingredient" key={ingredientList.id}>
              <button
                type="button"
                className=""
                onClick={() => AddIngredientTo(ingredientList.id)}
              >
                Ajouter
              </button>
              &emsp;
              {ingredientList.name}{' '}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsertIngredients;
