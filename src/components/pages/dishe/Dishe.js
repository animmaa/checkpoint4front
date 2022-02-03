import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
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

  console.log(ingred);
  return (
    <div className="dishe">
      <div className="plat">
        <div>{plat.name}</div>
        <div>{plat.image}</div>
      </div>
      <div>
        <div className="ingredi">
          <div className='ingredilist'>
            {ingred.map((ingredientList) => (
              <li>{ingredientList.name}</li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dishe;
