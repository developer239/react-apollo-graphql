import React from 'react'
import Page from './index'
import { renderWithRouter } from '../../../test/utils/render'

describe('[page] NotFound', () => {
  it('should render correctly', () => {
    const renderer = renderWithRouter(<Page />, '/does-not-exist')
    expect(renderer.container).toBeTruthy()
  })
})
