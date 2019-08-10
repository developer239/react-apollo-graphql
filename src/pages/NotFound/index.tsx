import React from 'react'
import { Empty } from 'components/Empty'

export const PAGE_NOT_FOUND_TEST_ID = 'home-page'

export const NotFoundPage = () => (
  <div data-testid={PAGE_NOT_FOUND_TEST_ID}>
    <Empty />
  </div>
)
