import React, { Fragment } from 'react';
import { Field, ErrorMessage } from 'formik';
import './style.css';

import TextError from '../TextError';

const Radio = ({ label, name, options, ...rest }) => {

  return (
    <>
      <Field as="radio" id={name} name={name} {...rest}>
        {({ field }) => {
          return options.map(({ value, key }) => {
            return (
              <Fragment key={value}>
                <label htmlFor={value}>{key}</label>
                <input type="radio" id={value} {...field} value={value} checked={field.value === value} />
              </Fragment>
            )
          })
        }}
      </Field>

      <ErrorMessage className="error" name={name} component={TextError} />
    </>
  );
}

export default Radio;