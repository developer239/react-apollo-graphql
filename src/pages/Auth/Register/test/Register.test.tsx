import React from 'react'
import { waitForElement } from '@testing-library/react'
import { PAGE_ME_TEST_ID } from '../../Me'
import { PAGE_REGISTER_TEST_ID } from '../index'
import { App } from 'app'
import { ROUTE_PATHS } from 'routes'
import { renderWithRouter } from 'test-utils/render'
import { changeInput, submitForm } from 'test-utils/form/input'
import { createUserWithPages } from 'test-utils/generators'
import { mockRegisterSuccess, mockMeSuccess } from 'test-utils/gql'

describe('[page] Register Page', () => {
  it('should render correctly', () => {
    const renderer = renderWithRouter(<App />, ROUTE_PATHS.auth.register)
    const renderedElement = renderer.getByTestId(PAGE_REGISTER_TEST_ID)
    expect(renderedElement).toBeTruthy()
  })

  describe('when form is submitted', () => {
    it('should handle success', async () => {
      const user = createUserWithPages(1, [1, 2])
      const renderer = renderWithRouter(<App />, ROUTE_PATHS.auth.register, [
        mockRegisterSuccess(user),
        mockMeSuccess(user),
      ])

      changeInput(renderer)('email', user.email)
      changeInput(renderer)('password', user.password)
      changeInput(renderer)('firstName', user.firstName)
      changeInput(renderer)('lastName', user.lastName)
      submitForm(renderer)()

      await waitForElement(() => renderer.getByTestId(PAGE_ME_TEST_ID))

      expect(renderer.getByTestId(PAGE_ME_TEST_ID)).toBeTruthy()
    })
  })
})
