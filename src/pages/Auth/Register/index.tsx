import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router'
import { H1 } from 'components/Typography/H1'
import { RegisterForm } from 'modules/auth/forms/Register'

export const RegisterPage: FC<RouteComponentProps> = props => (
  <>
    <H1>Register Page</H1>
    <RegisterForm routerHistory={props.history} />
  </>
)
