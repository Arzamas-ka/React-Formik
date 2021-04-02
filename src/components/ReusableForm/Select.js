import React from 'react';
import { Field, ErrorMessage } from 'formik';
import './style.css';

import TextError from '../TextError';

const Select = ({ label, name, options, ...rest }) => {


  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map(({ value, key }) => {
          return (
            <option key={value} value={value}>{key}</option>
          )
        })}
      </Field>

      <ErrorMessage className="error" name={name} component={TextError} />
    </>
  );
}

export default Select;