import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { browserHistory } from 'appHistory'
import { auth } from 'services/auth'
import { useLogin } from '../../hooks/useLogin'
import { TextInput } from 'components/TextInput'
import { FormButton } from 'components/FormButton'

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
          <TextInput iconType="user" label="Email" name="email" />
          <TextInput iconType="lock" label="Password" name="password" />

          <FormButton htmlType="submit" type="primary" disabled={isSubmitting}>
            {isSubmitting ? 'Logging in...' : 'Login'}
          </FormButton>
        </Form>
      )}
    </Formik>
  )
}
