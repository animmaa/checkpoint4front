import axios from 'axios';
import React, { /* useEffect, */ useState } from 'react';
/* import { useNavigate }  from 'react-router-dom'; */

const CreateDishes = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [lien, setLien] = useState('');
  /* const navigator = useNavigate(); */

  const handleSubmit = async () => {
    console.log(name, image, lien);
    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', image);
    formData.append('lienRecette', lien);

    axios.post(`${process.env.REACT_APP_API_URL}/api/dishes`, formData);
    /* const formData = new formData() */
  };

  /* useEffect(() => {
    if (localStorage.getItem('jwt') === null) navigator('/');
  }, []); */

  return (
    <div>
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
      <button type="button" onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default CreateDishes;
