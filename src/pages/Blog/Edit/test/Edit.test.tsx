import React from 'react'
import { App } from 'app'
import { ROUTE_PATHS } from 'routes'
import { waitForElement } from '@testing-library/react'
import { renderWithRouter } from 'test-utils/render'
import { changeInput, changeTextarea, submitForm } from 'test-utils/form/input'
import { createPageWithUser } from 'test-utils/generators'
import {
  mockMeSuccess,
  mockPageDetailSuccess,
  mockUpdatePageSuccess,
} from 'test-utils/gql'
import { PAGE_EDIT_TEST_ID } from '../index'
import { PAGE_DETAIL_TEST_ID } from '../../Detail'

describe('[page] Edit Page', () => {
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

    describe('when form is submitted', () => {
      it('should handle success', async () => {
        const page = createPageWithUser(1, 1)
        const updatedPage = createPageWithUser(1, 1)

        const renderer = renderWithRouter(
          <App />,
          ROUTE_PATHS.blog.edit(String(page.id)),
          [
            mockPageDetailSuccess(page),
            mockUpdatePageSuccess(updatedPage),
            // // Mock queries on page detail page where we are redirected
            mockPageDetailSuccess(updatedPage),
            mockMeSuccess(updatedPage.user),
          ]
        )

        await waitForElement(() => renderer.getByTestId(PAGE_EDIT_TEST_ID))

        changeInput(renderer)('title', updatedPage.title)
        changeTextarea(renderer)('text', updatedPage.text)
        submitForm(renderer)()

        await waitForElement(() => renderer.getByTestId(PAGE_DETAIL_TEST_ID))

        expect(renderer.getByTestId(PAGE_DETAIL_TEST_ID)).toBeTruthy()
      })
    })
  })
})
