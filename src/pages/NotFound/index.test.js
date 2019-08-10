import React from 'react'
import { renderApp } from '../../../test/utils/render'
import App from '../../app'
import { NOT_FOUND_TEST_ID } from './index'

describe('[page] NotFound', () => {
  it('should render correctly', () => {
    const renderer = renderApp(<App />, '/does-not-exist')
    expect(renderer.getByTestId(NOT_FOUND_TEST_ID)).toBeTruthy()
  })
})
