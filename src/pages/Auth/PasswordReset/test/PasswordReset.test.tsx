import React from 'react'
import { waitForElement } from '@testing-library/react'
import { PAGE_ME_TEST_ID } from '../../Me'
import { PAGE_PASSWORD_RESET_TEST_ID } from '../index'
import { renderWithRouter } from 'test-utils/render'
import { App } from 'app'
import { changeInput, submitForm } from 'test-utils/form/input'
import { mockMeSuccess, mockPasswordChangeSuccess } from 'test-utils/gql'
import { createUserWithPages } from 'test-utils/generators'

describe('[page] PasswordReset', () => {
  const mockFormData = {
    password: 'mock-password',
    token: 'mock-token',
  }

  it('should render correctly', () => {
    const renderer = renderWithRouter(
      <App />,
      `/password-reset/${mockFormData.token}`
    )
    const renderedElement = renderer.getByTestId(PAGE_PASSWORD_RESET_TEST_ID)
    expect(renderedElement).toBeTruthy()
  })

  describe('when form is submitted', () => {
    it('should handle success', async () => {
      const user = createUserWithPages(1)
      const renderer = renderWithRouter(
        <App />,
        `/password-reset/${mockFormData.token}`,
        [mockPasswordChangeSuccess(mockFormData), mockMeSuccess(user)]
      )

      changeInput(renderer)('password', mockFormData.password)
      submitForm(renderer)()

      await waitForElement(() => renderer.getByTestId(PAGE_ME_TEST_ID))

      expect(renderer.getByTestId(PAGE_ME_TEST_ID)).toBeTruthy()
    })
  })
})
