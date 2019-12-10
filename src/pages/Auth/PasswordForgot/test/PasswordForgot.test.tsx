import React from 'react'
import { waitForElement } from '@testing-library/react'
import { PAGE_PASSWORD_FORGOT_TEST_ID } from '../index'
import { renderWithRouter } from 'test-utils/render'
import { App } from 'app'
import { changeInput, submitForm } from 'test-utils/form/input'
import { SUCCESS_MESSAGE } from 'modules/auth/forms/ForgotPassword'
import { mockPasswordForgotSuccess } from 'test-utils/gql'

describe('[page] PasswordForgot', () => {
  const mockEmail = 'email@email.com'

  it('should render correctly', () => {
    const renderer = renderWithRouter(<App />, '/password-forgot')
    const renderedElement = renderer.getByTestId(PAGE_PASSWORD_FORGOT_TEST_ID)
    expect(renderedElement).toBeTruthy()
  })

  describe('when form is submitted', () => {
    it('should handle success', async () => {
      const renderer = renderWithRouter(<App />, '/password-forgot', [
        mockPasswordForgotSuccess(mockEmail),
      ])

      changeInput(renderer)('email', mockEmail)
      submitForm(renderer)()

      await waitForElement(() => renderer.getByText(SUCCESS_MESSAGE))

      expect(renderer.getByText(SUCCESS_MESSAGE)).toBeTruthy()
    })
  })
})
