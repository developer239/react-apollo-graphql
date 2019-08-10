import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { browserHistory } from 'appHistory'
import { auth } from 'services/auth'
import { useLogin } from '../../hooks/useLogin'

const initialValues = {
  email: 'email@email1.com',
  password: 'heslo1234',
}

const registerSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
})

export const LoginForm = () => {
  const [login] = useLogin()

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={async values => {
        const result = await login({ variables: { ...values } })
        if (result) {
          auth.setAccessToken(result.data.login.accessToken)
          browserHistory.push('/me')
        }
      }}
    >
      {({ isSubmitting }) => (
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

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </Form>
      )}
    </Formik>
  )
}
