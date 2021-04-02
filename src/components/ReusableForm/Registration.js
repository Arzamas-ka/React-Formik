import React from 'react';
import { Formik, Form } from 'formik';
import FormikControl from './FormikControl';
import * as Yup from 'yup';
import './style.css';

const Registration = () => {
  const options = [
    { key: 'Email', value: 'emailmock' },
    { key: 'Telephone', value: 'telephonemock' },
  ]

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    modeOfContact: '',
    phone: '',
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Password must match').required('Required'),
    modeOfContact: Yup.string().required('Required'),
    phone: Yup.string().when('modeOfContact', {
      is: 'telephonemock',
      then: Yup.string().required('Required')
    }),
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

              <FormikControl
                control="input"
                type="password"
                label="Confirm"
                name='confirmPassword'
              />

              <FormikControl
                control="radio"
                options={options}
                label="Mode"
                name='modeOfContact'
              />

              <FormikControl
                control="input"
                type="text"
                label="Phone"
                name='phone'
              />

              <button className="button" type="submit" disabled={!isValid}>Submit</button>
            </Form>
          )
        }
      }

    </Formik>
  );
}

export default Registration;