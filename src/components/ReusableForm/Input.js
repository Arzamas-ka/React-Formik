import React from 'react';
import { Field, ErrorMessage } from 'formik';
import './style.css';

import TextError from '../TextError';

const Input = ({ label, name, ...rest }) => {

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      
      <ErrorMessage className="error" name={name} component={TextError} />
    </>
  );
}

export default Input;