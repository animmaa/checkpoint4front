import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Newtest = () => {
  const { id } = useParams();
  const [ingred, setIngred] = useState([]);
  const [inputIngredient, setInputIngredient] = useState([]);
  const [allIngredientAvailable, setAllIngredientAvailable] = useState([]);
  const [refresh, setRefresh] = useState("")
  const [refresh1, setRefresh1] = useState('');

  const getAllIngredientAvailable = () => {
    axios
      .get(`http://localhost:8000/api/ingredients`)
      .then((response) => setAllIngredientAvailable(response.data));
  };

  const getIngred = () => {
    axios
      .get(`http://localhost:8000/api/dishes/liste/${id}`)
      .then((response) => setIngred(response.data));
  };

  const AddIngredientToSelectedRecipie = async (ingredName) => {
      const test = allIngredientAvailable
        .filter((element) => element.name === ingredName)
        .map((ingredient) => ingredient.name);
      console.log(test)
    if (
      ingredName == test)
     {
      const pickIdFromIngredientList = allIngredientAvailable
        .filter((element) => element.name === ingredName)
        .map((ingredient) => ingredient.id);

      await axios.post(
        `http://localhost:8000/api/matchIngredientRouter/${id}`,
        {
          id_ingredients: pickIdFromIngredientList,
        }
      );
      setRefresh1("ok")
      setRefresh1("")
      //setRefresh("ok")
    } else {
        await axios.post(
          `http://localhost:8000/api/ingredients`,
          {
            name: ingredName,
          }
        );
          setRefresh("ok")
          //setRefresh1("ok")
        /* window.location.reload(); */
        //alert("l'ingredient a été ajouté a la liste, reclick pour le lié a la recette")
    }
    
    console.log(ingred)
    //getIngred();
    //alert('ingredient added to recipie!');
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

export default Newtest;
