import React from 'react'
import { NotFoundPage, PAGE_NOT_FOUND_TEST_ID } from '../index'
import { renderWithRouter } from 'test-utils/render'

describe('[page] NotFound', () => {
  it('should render correctly', () => {
    const renderer = renderWithRouter(<NotFoundPage />, '/does-not-exist')
    const renderedElement = renderer.getByTestId(PAGE_NOT_FOUND_TEST_ID)
    expect(renderedElement).toBeTruthy()
  })
})
