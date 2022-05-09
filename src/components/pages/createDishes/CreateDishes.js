import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './createDishes.scss';

const CreateDishes = () => {
  const [plats, setPlats] = useState([]);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [lien, setLien] = useState('');

  const getPlats = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/api/dishes`)
      .then((response) => setPlats(response.data));
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', image);
    formData.append('lienRecette', lien);

    await axios.post(`${process.env.REACT_APP_API_URL}/api/dishes`, formData);
    await getPlats();
  };

  const DeleteDisheTo = async (deletePlatId) => {
    await axios.delete(
      `${process.env.REACT_APP_API_URL}/api/dishes/${deletePlatId}`,
    );
    await getPlats();
  };

  useEffect(() => {
    getPlats();
  }, []);

  return (
    <>
      <div className="menu-create">
        <label htmlFor="name">
          name
          <input
            id="name"
            name="name"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label htmlFor="image">
          image
          <input
            id="image"
            name="image"
            type="file"
            onChange={(event) => setImage(event.target.files[0])}
          />
        </label>
        <label htmlFor="lienRecette">
          lien
          <input
            id="lienRecette"
            name="lienRecette"
            type="text"
            onChange={(event) => setLien(event.target.value)}
          />
        </label>
        <button type="button" onClick={handleSubmit}>
          submit
        </button>
      </div>
      <div className="look-dishes">
        {plats.map((Dishe) => (
          <div key={Dishe} className="mapping">
            <div className="layout">
              <Link to={`/admin/create/${Dishe.id}`} className="buttonLink">
                <div className="title">{Dishe.name}</div>
                <img
                  alt={Dishe.name}
                  src={`${process.env.REACT_APP_API_URL}/${Dishe.image}`}
                />
              </Link>
              <button
                type="button"
                className="delete-button-dishe"
                onClick={() => DeleteDisheTo(Dishe.id)}
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CreateDishes;
