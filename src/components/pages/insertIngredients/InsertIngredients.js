import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const InsertIngredients = () => {
  const { id } = useParams();
  const [ingred, setIngred] = useState([]);
  const [inputIngredient, setInputIngredient] = useState([]);
  const [allIngredientAvailable, setAllIngredientAvailable] = useState([]);
  const [refresh, setRefresh] = useState('');
  const [refresh1, setRefresh1] = useState('');

  const getAllIngredientAvailable = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/ingredients`)
      .then((response) => setAllIngredientAvailable(response.data));
  };

  const getIngred = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/dishes/liste/${id}`)
      .then((response) => setIngred(response.data));
  };

  const AddIngredientToSelectedRecipie = async (ingredName) => {
    const test = allIngredientAvailable
      .filter((element) => element.name === ingredName)
      .map((ingredient) => ingredient.name);
    console.log(test);
    if (ingredName === test[0]) {
      const pickIdFromIngredientList = allIngredientAvailable
        .filter((element) => element.name === ingredName)
        .map((ingredient) => ingredient.id);

      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/matchIngredientRouter/${id}`,
        {
          id_ingredients: pickIdFromIngredientList,
        },
      );
      setRefresh1('ok');
      setRefresh1('');
      setRefresh('');
    } else {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/ingredients`, {
        name: ingredName,
      });
      alert(
        `l'ingredient : ${ingredName} à était ajouter à la liste des ingredients`,
      );
      setRefresh('ok');
    }
  };

  useEffect(() => {
    getAllIngredientAvailable();
  }, [refresh]);

  useEffect(() => {
    getIngred();
  }, [refresh1]);

  return (
    <div>
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
        addIngredient to recipie
      </button>
      <div className="ingredi">
        <div className="ingredilist">
          ingredients : <br />
          <br />
          {ingred.map((ingredientList) => (
            <li key={ingred.id}>{ingredientList.name}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsertIngredients;
