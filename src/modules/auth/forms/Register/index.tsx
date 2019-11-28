import React, { FC } from 'react'
import { showAllGraphQLErrors } from 'services/messages'
import { Link } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { History as RouterHistory } from 'history'
import { auth } from 'services/auth'
import { ROUTE_PATHS } from 'routes'
import { TextInput } from 'components/TextInput'
import { FormButton } from 'components/FormButton'
import { ElementLink } from 'components/FormElementLink'
import { useRegister } from '../../hooks/useRegister'

const initialValues = {
  email: '',
  password: '',
  firstName: 'John',
  lastName: 'Doe',
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

interface IProps {
  routerHistory: RouterHistory
}

export const RegisterForm: FC<IProps> = ({ routerHistory }) => {
  const [register] = useRegister()

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const result = await register({ variables: { data: values } })
          if (result) {
            auth.logIn(
              result.data.register.accessToken,
              result.data.register.refreshToken
            )
            routerHistory.push('/me')
          }
        } catch (error) {
          setSubmitting(false)
          showAllGraphQLErrors(error.graphQLErrors)
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <TextInput label="Email" name="email" />
          <TextInput label="Password" name="password" type="password" />
          <TextInput label="First Name" name="firstName" />
          <TextInput label="Last Name" name="lastName" />

          <FormButton htmlType="submit" type="primary" disabled={isSubmitting}>
            {isSubmitting ? 'Registering...' : 'Register'}
          </FormButton>
          <ElementLink>
            Or you can use existing account to{' '}
            <Link to={ROUTE_PATHS.auth.login}>login!</Link>
          </ElementLink>
        </Form>
      )}
    </Formik>
  )
}
