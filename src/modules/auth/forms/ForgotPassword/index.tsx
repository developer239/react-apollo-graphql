import React from 'react'
import { Link } from 'react-router-dom'
import { message } from 'antd'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useForgotPassword } from '../../hooks/useForgotPassword'
import { TextInput } from 'components/TextInput'
import { FormButton } from 'components/FormButton'
import { ElementLink } from 'components/FormElementLink'
import { ROUTE_PATHS } from 'routes'

export const SUCCESS_MESSAGE = 'Password reset link has been sent to your email'

const initialValues = {
  email: '',
}

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
})

export const ForgotPasswordForm = () => {
  const [resetPassword] = useForgotPassword()

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          const result = await resetPassword({ variables: { ...values } })
          if (result) {
            await message.success(SUCCESS_MESSAGE, 15)
            resetForm()
          }
        } catch (error) {
          setSubmitting(false)
          await message.error(error.message)
        }
      }}
      validationSchema={forgotPasswordSchema}
    >
      {({ isSubmitting }) => (
        <Form>
          <TextInput label="Email" name="email" />
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
