import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import fleche from '../../../assets/fleche-droite.png';
import './dishe.scss';

const Dishe = () => {
  const { id } = useParams();
  const [dishe, setDishe] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const getDishe = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/dishes/${id}`)
      .then((response) => setDishe(response.data));
  };

  const getIngredients = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/dishes/liste/${id}`)
      .then((response) => setIngredients(response.data));
  };

  useEffect(() => {
    getDishe();
    getIngredients();
  }, []);

  return (
    <div className="dishe">
      <div className="ingredients">
        <div className="ingredients-list">
          ingredients : <br />
          <br />
          {ingredients.map((ingredientList) => (
            <li key={ingredients}>{ingredientList.name}</li>
          ))}
        </div>
      </div>
      <div className="title-dishes">
        <div>{dishe.name}</div>
        <div key={dishe} className="image-plat">
          <img
            alt={dishe.name}
            src={`${process.env.REACT_APP_API_URL}/${dishe.image}`}
          />
        </div>
      </div>
      <div className="link-recette">
        <a href={dishe.lien_recette} target="_blank" rel="noopener noreferrer">
          lien vers la recette
        </a>
        <img alt="flecheLien" src={fleche} />
      </div>
    </div>
  );
};

export default Dishe;
