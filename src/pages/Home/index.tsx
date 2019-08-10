import React from 'react'
import { H1 } from 'components/Typography/H1'
import { PagesList } from 'modules/blog/components/PagesList'

export const PAGE_HOME_TEST_ID = 'home-page'

export const HomePage = () => (
  <div data-testid={PAGE_HOME_TEST_ID}>
    <H1>All Pages</H1>
    <PagesList />
  </div>
)
