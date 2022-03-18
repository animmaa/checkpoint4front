import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const InsertIngredients = () => {
  const { id } = useParams();
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const [specificIng, setSpecificIng] = useState([]);

  const getIngredients = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/ingredients`)
      .then((response) => setIngredients(response.data));
  };

  console.log(specificIng.id);

  useEffect(() => {
    getIngredients();
  }, []);

  const getSpecificing = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/ingredients/test/${name}`)
      .then((resp) => setSpecificIng(resp.data));
  };

  const verify = async () => {
    const list = [];
    {
      ingredients.map((ingred) => list.push(ingred.name));
    }
    //console.log(list);
    if (list.includes(name)) {
      await console.log('il est present');

      //console.log(idPlat);
      //console.log(fData);
    } else {
      console.log("il n'est pas present");
    }
  };

  useEffect(() => {
    getSpecificing();
    verify();
  }, []);

  /* const addIngredient = async () => {
    const fData = new FormData();
    fData.append('name', name);
    await axios.post(`${process.env.REACT_APP_API_URL}/api/ingredients`, fData);
  }; */

  return (
    <div className="">
      <label htmlFor="name">
        name
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <button type="button" /* onClick={addIngredient} */>submit</button>
      <div></div>
    </div>
  );
};

/* const getIngredients = () => {
  axios
    .get(`${process.env.REACT_APP_API_URL}/api/ingredients`)
    .then((response) => setIngredients(response.data));
};

useEffect(() => {
  getIngredients();
}, []); */

/* <label htmlFor="idPlats">
id du plat
        <input
        id="idPlats"
        name="idPlats"
        type="text"
          value={id}
          onChange={(event) => setIdPlat(event.target.value)}
          />
          </label> */

// si l'ingredient est present
// => j'ajoute l'id de l'ingredient dans la table de jointure avec id plat
/* const list = [];
      {
          ingredients.map((ingred) => list.push(ingred.name));
        }
        console.log(list); */
/* if (list.includes(name)) { */
//console.log('il est present');
//console.log(idPlat);
//console.log(fData);
/* } else {
      console.log("il n'est pas present");
    } */

// si il n'est pas present
// => je le crée en le mettant dans la table ingredient puis
// je l'ajoute a la able de jointure

export default InsertIngredients;
