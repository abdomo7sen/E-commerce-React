import React, { useContext, useState } from 'react';
import styles from './Login.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner';
import axios from 'axios';
import { UserContext } from '../../context/userContext';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  let navigate = useNavigate();
  useContext(UserContext)

  async function loginSubmit(values) {
    setLoading(true);
    let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values).catch((err) => {
      setApiError(err.response.data.message);
      setLoading(false);
    });
    if (data.message == 'success'){
      setLoading(false);
      localStorage.setItem('userToken' , data.token)
      // setUserToken(data.token)
      navigate('/');
    }
  }

  let validationSchema = Yup.object({
    email: Yup.string().required('Email is Required').email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .matches(/^[A-Z][\w @]{5,8}$/, 'Password starts with a capital letter'),
  });

  let formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: loginSubmit,
  });

  return (
    <>
      <div className="w-75 mx-auto py-4">
        <h2>Login now</h2>
        <form onSubmit={formik.handleSubmit}>
          {apiError ? <div className="alert alert-danger">{apiError}</div> : null}

          <label htmlFor="email">Email:</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="email"
            id="email"
            name="email"
            className="form-control mb-3"
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="alert alert-danger py-2">{formik.errors.email}</div>
          ) : null}

          <label htmlFor="password">Password:</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="password"
            id="password"
            name="password"
            className="form-control mb-3"
          />
          {formik.errors.password && formik.touched.password ? (
            <div className="alert alert-danger py-2">{formik.errors.password}</div>
          ) : null}

          {loading ? (
            <button type="button" className="btn bg-main text-light">
              <BallTriangle
                height={30}
                width={30}
                radius={5}
                color="#fff"
                ariaLabel="ball-triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </button>
          ) : (
            <button disabled={!formik.isValid && formik.dirty} type="submit" className="btn bg-main text-light">
              Login
            </button>
          )}

          <Link className="ps-4" to={'/register'}>
            Register now
          </Link>
        </form>
      </div>
    </>
  );
}