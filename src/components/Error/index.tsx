import React, { FC } from 'react'

export const ErrorComponent: FC = ({ children }) => (
  <div>{children || 'something went wrong'}</div>
)
