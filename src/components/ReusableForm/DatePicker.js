import React from 'react';
import { Field, ErrorMessage } from 'formik';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './style.css';

import TextError from '../TextError';

const DatePickerComponent = ({ label, name, ...rest }) => {

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {
          (({ form: { setFieldValue }, field, field: { value } }) => {
            return (
              <DatePicker
                id={name}
                {...field}
                {...rest}
                selected={value}
                onChange={(value) => setFieldValue(name, value)}
              />)
          })
        }
      </Field>

      <ErrorMessage className="error" name={name} component={TextError} />
    </>
  );
}

export default DatePickerComponent;