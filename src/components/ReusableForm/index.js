import React from 'react'
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import './style.css';

import FormikControl from './FormikControl';

const ReusableForm = () => {

  const dropdownOptions = [
    { key: 'Select an option', value: 'select' },
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' },
  ]

  const radioOptions = [
    { key: 'Radio 1', value: 'Radio1' },
    { key: 'Radio 2', value: 'Radio2' },
    { key: 'Radio 3', value: 'Radio3' },
  ]

  const checkboxOptions = [
    { key: 'Checkbox 1', value: 'Checkbox1' },
    { key: 'Checkbox 2', value: 'Checkbox2' },
    { key: 'Checkbox 3', value: 'Checkbox3' },
  ]

  const initialValues = {
    email: '',
    selectOption: '',
    radio: '',
    checkboxOptions: [],
    birthDate: null,
  }
  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    selectOption: Yup.string().required('Required'),
    radio: Yup.string().required('Required'),
    checkboxOptions: Yup.array().min(1, 'Required'),
    birthDate: Yup.date().required('Required').nullable(),
  })
  const onSubmit = (values) => console.log('values: ', values);

  return (
    <Formik className="wrapper" initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {
        formik => <Form className="form">
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />

          <FormikControl
            control="select"
            label="Select"
            name="selectOption"
            options={dropdownOptions}
          />

          <FormikControl
            control="radio"
            label="Radio"
            name="radio"
            options={radioOptions}
          />

          <FormikControl
            control="checkbox"
            label="checkbox"
            name="checkboxOptions"
            options={checkboxOptions}
          />

          <FormikControl
            control="date"
            label="date"
            name="birthDate"
          />

          <button className="button" type="submit">Submit</button>
        </Form>
      }
    </Formik>
  )
}

export default ReusableForm;