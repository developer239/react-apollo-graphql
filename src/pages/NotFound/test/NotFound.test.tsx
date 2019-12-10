import React from 'react'
import { PAGE_NOT_FOUND_TEST_ID } from '../index'
import { renderWithRouter } from 'test-utils/render'
import { App } from 'app'

describe('[page] NotFound', () => {
  it('should render correctly', () => {
    const renderer = renderWithRouter(<App />, '/does-not-exist')
    const renderedElement = renderer.getByTestId(PAGE_NOT_FOUND_TEST_ID)
    expect(renderedElement).toBeTruthy()
  })
})
