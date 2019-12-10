import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router'
import { H1 } from 'components/Typography/H1'
import { LoginForm } from 'modules/auth/forms/Login'

export const PAGE_LOGIN_TEST_ID = 'login-page'

export const LoginPage: FC<RouteComponentProps> = ({ history }) => (
  <div data-testid={PAGE_LOGIN_TEST_ID}>
    <H1>Login Page</H1>
    <LoginForm routerHistory={history} />
  </div>
)
