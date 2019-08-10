import React, { FC } from 'react'
import { Button as AntButton } from 'antd'
import { ButtonProps } from 'antd/lib/button'

export const Button: FC<ButtonProps> = ({ children, ...rest }) => (
  <AntButton {...rest}>{children}</AntButton>
)
