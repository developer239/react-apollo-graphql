import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const initialValues = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
}

const registerSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
})

export const RegisterForm = () => (
  <Formik
    initialValues={initialValues}
    validationSchema={registerSchema}
    onSubmit={values => {
      console.log(values)
    }}
  >
    {() => (
      <Form>
        <div>
          <label>
            Email:
            <Field name="email" />
          </label>
          <ErrorMessage name="email" />
        </div>

        <div>
          <label>
            Password:
            <Field name="password" type="password" />
            <ErrorMessage name="password" />
          </label>
        </div>

        <div>
          <label>
            First Name
            <Field name="firstName" type="firstName" />
            <ErrorMessage name="firstName" />
          </label>
        </div>

        <div>
          <label>
            Last Name
            <Field name="lastName" type="lastName" />
            <ErrorMessage name="lastName" />
          </label>
        </div>

        <button type="submit">Submit</button>
      </Form>
    )}
  </Formik>
)
