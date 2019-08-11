import React from 'react'
import { App } from 'app'
import { ROUTE_PATHS } from 'routes'
import { waitForElement } from '@testing-library/react'
import { renderWithRouter } from 'test-utils/render'
import { changeInput, changeTextarea, submitForm } from 'test-utils/form/input'
import { createPageWithUser } from 'test-utils/generators'
import {
  mockCreatePageSuccess,
  mockMeSuccess,
  mockPageDetailSuccess,
} from 'test-utils/gql'
import { auth } from 'services/auth'
import { PAGE_CREATE_TEST_ID } from '../index'
import { PAGE_DETAIL_TEST_ID } from '../../Detail'

describe('[page] Create Page', () => {
  beforeEach(() => {
    auth.setAccessToken('mockAccessToken')
  })

  afterEach(() => {
    auth.removeAccessToken()
  })

  it('should render correctly', () => {
    const renderer = renderWithRouter(<App />, ROUTE_PATHS.blog.create)
    const renderedElement = renderer.getByTestId(PAGE_CREATE_TEST_ID)
    expect(renderedElement).toBeTruthy()
  })

  describe('when form is submitted', () => {
    it('should handle success', async () => {
      const page = createPageWithUser(1, 1)
      const renderer = renderWithRouter(<App />, ROUTE_PATHS.blog.create, [
        // Mock create form response
        mockCreatePageSuccess(page),
        // Mock queries on page detail page where we are redirected
        mockPageDetailSuccess(page),
        mockMeSuccess(page.user),
      ])

      changeInput(renderer)('title', page.title)
      changeTextarea(renderer)('text', page.text)
      submitForm(renderer)()

      await waitForElement(() => renderer.getByTestId(PAGE_DETAIL_TEST_ID))

      expect(renderer.getByTestId(PAGE_DETAIL_TEST_ID)).toBeTruthy()
    })
  })
})
