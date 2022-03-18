import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';

const TestJointure = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [specificIng, setSpecificIng] = useState([]);
  const [ingred, setIngred] = useState([]);
  const navigator = useNavigate();

  const getIngredients = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/ingredients`)
      .then((response) => setIngredients(response.data));
  };

  const getIngred = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/dishes/liste/${id}`)
      .then((response) => setIngred(response.data));
  };

  const getSpecificing = () => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/api/ingredients/test/${formik.values.idIngredients}`
      )
      .then((resp) => setSpecificIng(resp.data));
  };
  console.log(specificIng.id);
  useEffect(() => {
    getIngredients();
  }, []);

  useEffect(() => {
    getSpecificing();
    getIngred();
  }, []);

  const list = [];
  {
    ingredients.map((ingred) => list.push(ingred.name));
  }
  console.log(list);
  if (list.includes(formik.values.idIngredients)) {
    const formik = useFormik({
      initialValues: {
        idPlats: id,
        idIngredients: '',
      },
      validateOnChange: false,
      validate: (values) => {
        const errors = {};
        if (!values.idPlats) {
          errors.idPlats = 'Required';
        }
        if (!values.idIngredients) {
          errors.idIngredients = 'Required';
        }

        return errors;
      },
      onSubmit: (values) => {
        axios
          .post(
            `${process.env.REACT_APP_API_URL}/api/ingredients/insert`,
            values
          )
          .catch(
            ({
              response: {
                data: { message },
              },
            }) => {
              setError(message);
            }
          );
      },
    });
    //console.log('il est present');
    //console.log(idPlat);
    //console.log(fData);
  } else {
    console.log("il n'est pas present");
  }

  return (
    <div className="Login">
      <h1>Create Comic Form</h1>
      <p className="error">{error}</p>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="idIngredients">
          idIngredients
          {formik.errors.idIngredients ? (
            <div className="error">{formik.errors.idIngredients}</div>
          ) : null}
          <input
            id="idIngredients"
            name="idIngredients"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.idIngredients}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div>
        {ingred.map((ingredientList) => (
          <li>{ingredientList.name}</li>
        ))}
      </div>
    </div>
  );
};

export default TestJointure;
