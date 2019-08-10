import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router'
import { H1 } from 'components/Typography/H1'
import { RegisterForm } from 'modules/auth/forms/Register'

export const PAGE_REGISTER_TEST_ID = 'register-page'

export const RegisterPage: FC<RouteComponentProps> = props => (
  <div data-testid={PAGE_REGISTER_TEST_ID}>
    <H1>Register Page</H1>
    <RegisterForm routerHistory={props.history} />
  </div>
)
