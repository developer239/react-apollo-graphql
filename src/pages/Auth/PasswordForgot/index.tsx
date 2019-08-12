import React from 'react'
import { H1 } from 'components/Typography/H1'
import { ForgotPasswordForm } from 'modules/auth/forms/ForgotPassword'

export const PAGE_PASSWORD_FORGOT_TEST_ID = 'password-forgot-page'

export const PasswordForgotPage = () => (
  <div data-testid={PAGE_PASSWORD_FORGOT_TEST_ID}>
    <H1>Forgotten Password</H1>
    <ForgotPasswordForm />
  </div>
)
