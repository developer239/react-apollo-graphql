import React from 'react'
import { ROUTE_PATHS } from 'routes'
import { waitForElement } from '@testing-library/react'
import { App } from 'app'
import { COMPONENT_LOADER_TEST_ID } from 'components/Loader'
import { COMPONENT_ERROR_ALERT_TEST_ID } from 'components/ErrorAlert'
import { COMPONENT_PAGE_CARD_TEST_ID } from 'modules/blog/components/PageCard'
import { renderWithRouter } from 'test-utils/render'
import { mockMeError, mockMeSuccess } from 'test-utils/gql'
import { createUserWithPages } from 'test-utils/generators'
import { auth } from 'services/auth'

describe('[page] Me', () => {
  beforeEach(() => {
    auth.setAccessToken('mockAccessToken')
  })

  afterEach(() => {
    auth.removeAccessToken()
  })

  it('should render correctly', () => {
    const renderer = renderWithRouter(<App />, ROUTE_PATHS.auth.me)
    const spinnerElement = renderer.getByTestId(COMPONENT_LOADER_TEST_ID)
    expect(spinnerElement).toBeTruthy()
  })

  describe('when loaded', () => {
    it('should handle error state', async () => {
      const { getByTestId } = renderWithRouter(<App />, ROUTE_PATHS.auth.me, [
        mockMeError(),
      ])

      await waitForElement(() => getByTestId(COMPONENT_ERROR_ALERT_TEST_ID))
      expect(getByTestId(COMPONENT_ERROR_ALERT_TEST_ID)).toBeTruthy()
    })

    it('should handle success state', async () => {
      const pagesIds = [1, 2, 3]
      const expectedData = createUserWithPages(1, pagesIds)

      const { getAllByTestId, getByText } = renderWithRouter(
        <App />,
        ROUTE_PATHS.auth.me,
        [mockMeSuccess(expectedData)]
      )

      await waitForElement(() => getByText(expectedData.email))

      expect(getByText(expectedData.email)).toBeTruthy()
      expect(getByText(expectedData.firstName)).toBeTruthy()
      expect(getByText(expectedData.lastName)).toBeTruthy()
      expect(getAllByTestId(COMPONENT_PAGE_CARD_TEST_ID).length).toEqual(
        pagesIds.length
      )
    })
  })
})
