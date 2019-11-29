import React from 'react'
import { renderWithRouter } from 'test-utils/render'
import { App } from 'app'
import { PAGE_PASSWORD_RESET_TEST_ID } from '../index'

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
})
