import React from 'react'
import { ROUTE_PATHS } from 'routes'
import { App } from 'app'
import { waitForElement, fireEvent } from '@testing-library/react'
import { COMPONENT_LOADER_TEST_ID } from 'components/Loader'
import { COMPONENT_ERROR_ALERT_TEST_ID } from 'components/ErrorAlert'
import { renderWithRouter } from 'test-utils/render'
import {
  mockDeletePageSuccess,
  mockMeError,
  mockMeSuccess,
  mockPageDetailSuccess,
} from 'test-utils/gql'
import {
  createPageWithUser,
  createUser,
  createUserWithPages,
} from 'test-utils/generators'
import { COMPONENT_PAGE_CARD_TEST_ID } from 'modules/blog/components/PageCard'
import {
  COMPONENT_DELETE_PAGE_TEST_ID,
  COMPONENT_EDIT_PAGE_TEST_ID,
} from '../index'
import { PAGE_HOME_TEST_ID } from '../../../Home'

describe('[page] Detail', () => {
  it('should render correctly', () => {
    const renderer = renderWithRouter(<App />, ROUTE_PATHS.blog.detail('1'))
    const spinnerElement = renderer.getByTestId(COMPONENT_LOADER_TEST_ID)
    expect(spinnerElement).toBeTruthy()
  })

  describe('when loaded', () => {
    it('should handle error state', async () => {
      const { getByTestId } = renderWithRouter(
        <App />,
        ROUTE_PATHS.blog.detail('1'),
        [mockMeError()]
      )

      await waitForElement(() => getByTestId(COMPONENT_ERROR_ALERT_TEST_ID))
      expect(getByTestId(COMPONENT_ERROR_ALERT_TEST_ID)).toBeTruthy()
    })

    it('should handle success state', async () => {
      const expectedPageData = createPageWithUser(1, 1, [1, 2, 3])
      const expectedMeData = createUser(2)

      const { getAllByTestId, queryByTestId, getByText } = renderWithRouter(
        <App />,
        ROUTE_PATHS.blog.detail('1'),
        [mockMeSuccess(expectedMeData), mockPageDetailSuccess(expectedPageData)]
      )

      await waitForElement(() => getByText(expectedPageData.title))

      expect(queryByTestId(COMPONENT_EDIT_PAGE_TEST_ID)).toBeFalsy()
      expect(queryByTestId(COMPONENT_DELETE_PAGE_TEST_ID)).toBeFalsy()
      expect(getByText(expectedPageData.title)).toBeTruthy()
      expect(getAllByTestId(COMPONENT_PAGE_CARD_TEST_ID).length).toEqual(
        expectedPageData.user.pages.length - 1
      )
    })

    describe('when page is mine', () => {
      it('should show edit/delete buttons', async () => {
        const expectedPageData = createPageWithUser(1, 1, [1])
        const expectedMeData = createUserWithPages(1, [1])

        const { getByTestId, getByText } = renderWithRouter(
          <App />,
          ROUTE_PATHS.blog.detail('1'),
          [
            mockMeSuccess(expectedMeData),
            mockPageDetailSuccess(expectedPageData),
          ]
        )

        await waitForElement(() => getByText(expectedPageData.title))

        expect(getByTestId(COMPONENT_EDIT_PAGE_TEST_ID)).toBeTruthy()
        expect(getByTestId(COMPONENT_DELETE_PAGE_TEST_ID)).toBeTruthy()
        expect(getByText(expectedPageData.title)).toBeTruthy()
      })

      describe('when user clicks on delete button', () => {
        it('should allow me to call deletePage mutation', async () => {
          const expectedPageData = createPageWithUser(1, 1, [1])
          const expectedMeData = createUserWithPages(1, [1])

          const { getByTestId, getByText } = renderWithRouter(
            <App />,
            ROUTE_PATHS.blog.detail('1'),
            [
              mockMeSuccess(expectedMeData),
              mockPageDetailSuccess(expectedPageData),
              mockDeletePageSuccess(expectedPageData),
            ]
          )

          await waitForElement(() => getByText(expectedPageData.title))

          fireEvent.click(getByTestId(COMPONENT_DELETE_PAGE_TEST_ID))
          fireEvent.click(getByText('Yes'))

          await waitForElement(() => getByTestId(PAGE_HOME_TEST_ID))

          expect(getByTestId(PAGE_HOME_TEST_ID)).toBeTruthy()
        })
      })
    })
  })
})
