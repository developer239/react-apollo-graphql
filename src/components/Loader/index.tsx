import React from 'react'
import { Spin } from 'antd'

export const COMPONENT_LOADER_TEST_ID = 'loader-component'

export const Loader = () => (
  <Spin data-testid={COMPONENT_LOADER_TEST_ID} size="large" />
)
