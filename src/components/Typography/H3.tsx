import { Typography } from 'antd'
import React, { FC } from 'react'

export const H3: FC = ({ children }) => (
  <Typography.Title level={4}>{children}</Typography.Title>
)
