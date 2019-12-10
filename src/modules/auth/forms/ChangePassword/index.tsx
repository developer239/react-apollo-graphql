import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { message } from 'antd'
import { History as RouterHistory } from 'history'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useChangePassword } from '../../hooks/useChangePassword'
import { auth } from '../../../../services/auth'
import { TextInput } from 'components/TextInput'
import { FormButton } from 'components/FormButton'
import { ElementLink } from 'components/FormElementLink'
import { ROUTE_PATHS } from 'routes'

const initialValues = {
  password: '',
}

const forgotPasswordSchema = Yup.object().shape({
  token: Yup.string().required(),
  password: Yup.string().required('Required'),
})

interface IProps {
  token: string
  routerHistory: RouterHistory
}

export const ChangePasswordForm: FC<IProps> = ({ token, routerHistory }) => {
  const [changePassword] = useChangePassword()

  return (
    <Formik
      initialValues={{
        token,
        ...initialValues,
      }}
      onSubmit={async (values, { setSubmitting }) => {
        const result = await changePassword({
          variables: { data: { ...values } },
        })

        if (result?.data.changePassword) {
          await message.success(
            'Password reset was successful. You were automatically logged in.',
            10
          )
          auth.logIn(
            result.data.changePassword.accessToken,
            result.data.changePassword.refreshToken
          )
          routerHistory.push('/me')
        } else {
          setSubmitting(false)
          await message.error('Invalid password reset token.')
        }
      }}
      validationSchema={forgotPasswordSchema}
    >
      {({ isSubmitting }) => (
        <Form>
          <TextInput name="token" type="hidden" />
          <TextInput label="New Password" name="password" type="password" />
          <FormButton htmlType="submit" type="primary" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </FormButton>
          <ElementLink>
            Or you can <Link to={ROUTE_PATHS.auth.register}>login</Link>!
          </ElementLink>
        </Form>
      )}
    </Formik>
  )
}
