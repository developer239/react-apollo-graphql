import { Typography } from 'antd'
import React, { FC } from 'react'

export const H1: FC = ({ children }) => (
  <Typography.Title level={2}>{children}</Typography.Title>
)
