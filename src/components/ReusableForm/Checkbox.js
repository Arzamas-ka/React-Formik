import React, { Fragment } from 'react';
import { Field, ErrorMessage } from 'formik';
import './style.css';

import TextError from '../TextError';

const Checkbox = ({ label, name, options, ...rest }) => {

  return (
    <>
      <Field as="checkbox" id={name} name={name} {...rest}>
        {({ field }) => {
          return options.map(({ value, key }) => {
            return (
              <Fragment key={value}>
                <label htmlFor={value}>{key}</label>
                <input type="checkbox" id={value} {...field} value={value} checked={field.value.includes(value)} />
              </Fragment>
            )
          })
        }}
      </Field>

      <ErrorMessage className="error" name={name} component={TextError} />
    </>
  );
}

export default Checkbox;