import React from 'react'
import Page from './index'
import { renderApp } from '../../../test/utils/render'

describe('[page] Home', () => {
  it('should render correctly', () => {
    const renderer = renderApp(<Page />, '/')
    expect(renderer.getByTestId('page-home')).toBeTruthy()
  })
})
