import React, { FC } from 'react'
import { Alert } from './styled'

export const ErrorComponent: FC = ({ children }) => (
  <Alert message={children || 'something went wrong'} type="error" />
)
