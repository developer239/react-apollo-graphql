import React, { FC } from 'react'
import { message } from 'antd'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { History as RouterHistory } from 'history'
import { auth } from 'services/auth'
import { TextInput } from 'components/TextInput'
import { FormButton } from 'components/FormButton'
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

interface IProps {
  routerHistory: RouterHistory
}

export const LoginForm: FC<IProps> = ({ routerHistory }) => {
  const [login] = useLogin()

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const result = await login({ variables: { ...values } })
          if (result) {
            auth.setAccessToken(result.data.login.accessToken)
            routerHistory.push('/me')
          }
        } catch (error) {
          setSubmitting(false)
          message.error(error.message)
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
