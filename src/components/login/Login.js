import { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigator = useNavigate();
  const [error, setError] = useState('');

  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
    },
    validateOnChange: false,
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = 'Required';
      }

      if (!values.password) {
        errors.password = 'Required';
      }

      return errors;
    },

    onSubmit: (values) => {
      axios
        .post('http://localhost:8000/admin/login/', values)
        .then(({ data: { credential } }) => {
          localStorage.setItem('jwt', credential);
          navigator('/create');
        })
        .catch(
          ({
            response: {
              data: { message },
            },
          }) => {
            setError(message);
          },
        );
      setError(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="Login">
      <h1>Login Form</h1>
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
            type="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </label>
        <label htmlFor="password">
          password
          {formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
