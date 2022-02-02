import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './listDishes.scss';

const ListDishes = () => {
  const [plats, setPlats] = useState([]);

  const getPlats = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/dishes`)
      .then((response) => setPlats(response.data));
  };

  useEffect(() => {
    getPlats();
  }, []);

  return (
    <div className="list-dishes">
      <div>
        <h1>liste des plats : </h1>
        {plats.map((plat) => (
          <div>
            <div>{plat.name}</div>
            <div>{plat.image}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListDishes;
