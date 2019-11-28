import React from 'react'
import { Empty as AntEmpty } from 'antd'

export const COMPONENT_EMPTY_TEST_ID = 'error-alert-component'

export const Empty = () => (
  <AntEmpty
    description="Page Not Found"
    data-testid={COMPONENT_EMPTY_TEST_ID}
  />
)
