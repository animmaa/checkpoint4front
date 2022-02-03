import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
        <div className="text">liste des plats : </div>
        {plats.map((plat) => (
          <div className="mapping">
            <div className="orga">
              <div>{plat.name}</div>
              <div>{plat.image}</div>
            </div>
            <div className='lien'>
              <Link to={`/dishes/${plat.id}`} className="buttonLink">
                Par ici
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListDishes;
