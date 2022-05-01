import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import fleche from '../../../assets/fleche-droite.png';
import './dishe.scss';

const Dishe = () => {
  const { id } = useParams();
  const [plat, setPlat] = useState([]);
  const [ingred, setIngred] = useState([]);

  const getPlat = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/dishes/${id}`)
      .then((response) => setPlat(response.data));
  };

  const getIngred = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/dishes/liste/${id}`)
      .then((response) => setIngred(response.data));
  };

  useEffect(() => {
    getPlat();
    getIngred();
  }, []);

  return (
    <div className="dishe">
      <div>
        <div className="ingredi">
          <div className="ingredilist">
            ingredients : <br />
            <br />
            {ingred.map((ingredientList) => (
              <li key={ingred}>{ingredientList.name}</li>
            ))}
          </div>
        </div>
      </div>
      <div className="plat">
        <div>{plat.name}</div>
        <div key={plat} className="image_plat">
          <img
            alt={plat.name}
            src={`${process.env.REACT_APP_API_URL}/${plat.image}`}
          />
        </div>
      </div>
      <div className="lien_recette">
        <a href={plat.lien_recette} target="_blank" rel="noopener noreferrer">
          lien vers la recette
        </a>
        <img alt="flecheLien" src={fleche} />
      </div>
    </div>
  );
};

export default Dishe;
