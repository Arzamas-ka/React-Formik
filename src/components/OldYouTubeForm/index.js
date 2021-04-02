import React from 'react'
import './style.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  name: 'Mila',
  email: '',
  channel: '',
};

const onSubmit = (values) => {
  console.log('values: ', values);
}

// const validate = values => {
//   // values.name values.email values.channel
//   // errors.name errors.email errors.channel
//   // errors.name = 'This field is required
//   let errors = {};

//   console.log('values: ', values);

//   if (!values.name) {
//     errors.name = 'Required'
//   }

//   if (!values.email) {
//     errors.email = 'Required'
//   } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)) {
//     errors.email = 'Invalid email format'
//   }

//   if (!values.channel) {
//     errors.channel = 'Required'
//   }

//   return errors
// };

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
  channel: Yup.string().required('Required'),
})

const YouTubeForm = () => {

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    // validate
  });

  console.log('errors; ', formik.touched);

  return (
    <div className="wrapper">
      <form className="form" onSubmit={formik.handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
        {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}

        <label htmlFor='name'>E-mail</label>
        <input type="text" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
        {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}

        <label htmlFor='name'>Channel</label>
        <input type="text" id="channel" name="channel" onChange={formik.handleChange} value={formik.values.channel} onBlur={formik.handleBlur} />
        {formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null}

        <button className="button" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default YouTubeForm;