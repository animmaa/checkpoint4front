import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Dishe = () => {
  const { id } = useParams();
  const [plat, setPlat] = useState([]);

  const getPlat = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/dishes/${id}`)
      .then((response) => setPlat(response.data));
  };

  useEffect(() => {
    getPlat();
  }, []);

  console.log(plat);

  return (
    <div>
      <div>page du plat cliqué</div>
      <div>{plat.name}</div>
      <div>{plat.image}</div>
    </div>
  );
};

export default Dishe;
