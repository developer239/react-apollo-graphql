import React from 'react'
import { App } from 'app'
import { ROUTE_PATHS } from 'routes'
import { waitForElement } from '@testing-library/react'
import { renderWithRouter } from 'test-utils/render'
import { createPageWithUser } from 'test-utils/generators'
import { mockPageDetailSuccess } from 'test-utils/gql'
import { auth } from 'services/auth'
import { PAGE_EDIT_TEST_ID } from '../index'

describe('[page] Edit Page', () => {
  beforeEach(() => {
    auth.setAccessToken('mockAccessToken')
  })

  afterEach(() => {
    auth.removeAccessToken()
  })

  describe('when page is loaded', () => {
    it('it should render correctly', async () => {
      const page = createPageWithUser(1, 1)
      const renderer = renderWithRouter(
        <App />,
        ROUTE_PATHS.blog.edit(String(page.id)),
        [mockPageDetailSuccess(page)]
      )

      await waitForElement(() => renderer.getByTestId(PAGE_EDIT_TEST_ID))

      expect(renderer.getByTestId(PAGE_EDIT_TEST_ID)).toBeTruthy()
    })
  })
})
