import React from 'react'
import { waitForElement } from '@testing-library/react'
import { PAGE_HOME_TEST_ID } from '../index'
import { COMPONENT_EMPTY_TEST_ID } from '../../../components/Empty'
import { COMPONENT_ERROR_ALERT_TEST_ID } from '../../../components/ErrorAlert'
import { ROUTE_PATHS } from 'routes'
import { App } from 'app'
import { COMPONENT_PAGE_CARD_TEST_ID } from 'modules/blog/components/PageCard'
import { renderWithRouter } from 'test-utils/render'
import { mockListPagesError, mockListPagesSuccess } from 'test-utils/gql'
import { createPage, MockPageType } from 'test-utils/generators'
import { COMPONENT_LOADER_TEST_ID } from 'components/Loader'

describe('[page] Home', () => {
  it('should render correctly', () => {
    const renderer = renderWithRouter(<App />, ROUTE_PATHS.home)
    const pageElement = renderer.getByTestId(PAGE_HOME_TEST_ID)
    const spinnerElement = renderer.getByTestId(COMPONENT_LOADER_TEST_ID)
    expect(pageElement).toBeTruthy()
    expect(spinnerElement).toBeTruthy()
  })

  describe('when loaded', () => {
    it('should handle success state', async () => {
      const expectedData = [createPage(1), createPage(2)]

      const { getAllByTestId } = renderWithRouter(<App />, ROUTE_PATHS.home, [
        mockListPagesSuccess(expectedData),
      ])

      await waitForElement(() => getAllByTestId(COMPONENT_PAGE_CARD_TEST_ID))
      expect(getAllByTestId(COMPONENT_PAGE_CARD_TEST_ID).length).toEqual(
        expectedData.length
      )
    })

    it('should handle empty state', async () => {
      const expectedData: MockPageType[] = []

      const { getByTestId } = renderWithRouter(<App />, ROUTE_PATHS.home, [
        mockListPagesSuccess(expectedData),
      ])

      await waitForElement(() => getByTestId(COMPONENT_EMPTY_TEST_ID))
      expect(getByTestId(COMPONENT_EMPTY_TEST_ID)).toBeTruthy()
    })

    it('should handle error state', async () => {
      const { getByTestId } = renderWithRouter(<App />, ROUTE_PATHS.home, [
        mockListPagesError,
      ])

      await waitForElement(() => getByTestId(COMPONENT_ERROR_ALERT_TEST_ID))
      expect(getByTestId(COMPONENT_ERROR_ALERT_TEST_ID)).toBeTruthy()
    })
  })
})
