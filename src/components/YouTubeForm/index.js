import React, { Fragment, useState } from 'react'
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from 'formik';

import './style.css';

import TextError from '../TextError';

const initialValues = {
  name: 'Mila',
  email: '',
  channel: '',
  comments: '',
  address: '',
  social: {
    facebook: '',
    twitter: '',
  },
  phoneNumbers: ['222', '333', '444'],
  phNumbers: [''],
}

const savedValues = {
  name: 'dfs',
  email: 'test@test.gmail.RU',
  channel: 'sdfsd',
  comments: 'sf',
  address: 'ksfksdfsj',
  social: {
    facebook: '',
    twitter: '',
  },
  phoneNumbers: ['', '', ''],
  phNumbers: [''],
}

const onSubmit = (values, onSubmitProps) => {
  console.log('values: ', values);
  console.log('onSubmitProps: ', onSubmitProps);

  setTimeout(() => {
    onSubmitProps.setSubmitting(false)
    onSubmitProps.resetForm()
  }, 2000)
}

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
  channel: Yup.string().required('Required'),
})

const validateComments = value => {
  let error;

  if (!value) {
    error = 'Required'
  }

  return error;
}
const YouTubeForm = () => {
  const [formValues, setFormValues] = useState(null);

  return (
    <Formik
      initialValues={formValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      className="wrapper"
      enableReinitialize
    // validateOnMount
    >
      {({ values, validateForm, validateField, setFieldTouched, setTouched, isValid, dirty, isSubmitting }) => {
        return (
          <Form className="form">
            <label htmlFor='name'>Name</label>
            <Field id="name" name="name" placeholder="Name" />
            <ErrorMessage name="name" component={TextError} />

            <label htmlFor='name'>E-mail</label>
            <Field id="email" name="email" />
            <ErrorMessage name="email">
              {(error) => <div className="error">{error}</div>}
            </ErrorMessage>

            <label htmlFor='name'>Channel</label>
            <Field id="channel" name="channel" />
            <div className="error">
              <ErrorMessage name="channel" component={TextError} />
            </div>

            <label htmlFor="comments">Comments</label>
            <Field id="comments" name="comments" as="textarea" validate={validateComments} />
            <ErrorMessage name="comments" component={TextError} />

            <label htmlFor="address">Address</label>
            <FastField name="address">
              {({ field, meta }) => {
                return (
                  <>
                    <input type="text" id="address" {...field} />
                    {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
                  </>
                )
              }}
            </FastField>

            <label htmlFor="facebook">Facebook profile</label>
            <Field type="text" id="facebook" name="social.facebook" />

            <label htmlFor="twitter">Twitter profile</label>
            <Field type="text" id="twitter" name="social.twitter" />

            {values.phoneNumbers.map((phone, ind) => {
              return (
                <Fragment key={phone + ind}>
                  <label htmlFor="phone">Phone {ind + 1} </label>
                  <Field type="text" id="phone" name={`phoneNumbers[${ind}]`} />
                </Fragment>
              )
            })}

            <label>List of phone numbers</label>
            <FieldArray name="phNumbers">
              {(props) => {
                const { push, remove, form: { values: { phNumbers } } } = props;

                return <div>{phNumbers.map((item, ind) => {
                  return (
                    <div key={item + ind}>
                      <Field name={`phNumbers[${ind}]`} />
                      {
                        ind > 0 && <button type="button" onClick={() => remove(ind)}> - </button>
                      }
                      <button type="button" onClick={() => push('')}> + </button>
                    </div>
                  )
                })}
                </div>
              }}
            </FieldArray>

            { /* <button className="button" type="button" onClick={() => validateField()}>Validate comments</button>
            <button className="button" type="button" onClick={() => validateForm()}>Validate all</button>

            <button className="button" type="button" onClick={() => setFieldTouched('comments')}>Visit comments</button>
            <button className="button" type="button" onClick={() => setTouched({
              name: true,
              email: true,
              channel: true,
              comments: true,
            })}>Visit fields</button> */}

            <button className="button" type="button" onClick={() => setFormValues(savedValues)}>Load saved data</button>

            <button className="button" type="reset">Reset</button>
            <button className="button" type="submit" disabled={!isValid || isSubmitting}>Submit</button>
          </Form>
        )
      }}

    </Formik>
  )
}

export default YouTubeForm;