import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { message } from 'antd'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { History as RouterHistory } from 'history'
import { auth } from 'services/auth'
import { TextInput } from 'components/TextInput'
import { FormButton } from 'components/FormButton'
import { ElementLink } from 'components/FormElementLink'
import { ROUTE_PATHS } from 'routes'
import { useLogin } from '../../hooks/useLogin'
import { previousLocation } from '../../../router/previousLocation'

const initialValues = {
  email: 'email@email1.com',
  password: 'heslo1234',
}

const loginSchema = Yup.object().shape({
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
      validationSchema={loginSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const result = await login({ variables: { ...values } })
          if (result) {
            auth.setAccessToken(result.data.login.accessToken)
            const targetPath = previousLocation(routerHistory.location)
            routerHistory.push(targetPath)
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
          <TextInput
            iconType="lock"
            label="Password"
            name="password"
            type="password"
          />
          <ElementLink>
            <Link to={ROUTE_PATHS.auth.passwordForgot}>Forgot password</Link>
          </ElementLink>
          <FormButton htmlType="submit" type="primary" disabled={isSubmitting}>
            {isSubmitting ? 'Logging in...' : 'Login'}
          </FormButton>
          <ElementLink>
            Or <Link to={ROUTE_PATHS.auth.register}>register now!</Link>
          </ElementLink>
        </Form>
      )}
    </Formik>
  )
}
