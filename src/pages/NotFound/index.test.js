import React from 'react'
import Page from './index'
import { renderApp } from '../../../test/utils/render'

describe('[page] NotFound', () => {
  it('should render correctly', () => {
    const renderer = renderApp(<Page />, '/does-not-exist')
    expect(renderer.getByTestId('page-not-found')).toBeTruthy()
  })
})
