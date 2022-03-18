import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';


const Creaplatbis = () => {
  const [error, setError] = useState(null);
  const [genres, setGenres] = useState([]);
  const navigator = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validateOnChange: false,
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = 'Required';
      }

      return errors;
    },
    onSubmit: (values) => {
      axios
        .post(`${process.env.REACT_APP_API_URL}/api/ingredients`, values)
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

  return (
    <div className="Login">
      <h1>Create Comic Form</h1>
      <p className="error">{error}</p>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">
          name
          {formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Creaplatbis;
