import React from 'react';
import { Formik, Form } from 'formik';
import FormikControl from './FormikControl';
import * as Yup from 'yup';
import './style.css';

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
  })

  const onSubmit = values => console.log('values: ', values);


  return (
    <Formik className="wrapper" initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {
        ({ isValid }) => {
          return (
            <Form className="form">
              <FormikControl
                control="input"
                type="email"
                label="Email"
                name='email'
              />

              <FormikControl
                control="input"
                type="password"
                label="Password"
                name='password'
              />

              <button className="button" type="submit" disabled={!isValid}>Submit</button>
            </Form>
          )
        }
      }

    </Formik>
  );
}

export default Login;