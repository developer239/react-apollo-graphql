import React, { FC } from 'react'
import { Alert } from './styled'

export const COMPONENT_ERROR_ALERT_TEST_ID = 'error-alert-component'

export const ErrorAlert: FC = ({ children }) => (
  <Alert
    data-testid={COMPONENT_ERROR_ALERT_TEST_ID}
    message={children || 'something went wrong'}
    type="error"
  />
)
