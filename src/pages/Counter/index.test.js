import React from 'react'
import Page from './index'
import { renderApp } from '../../../test/utils/render'

describe('[page] HOME', () => {
  it('should render correctly', () => {
    const renderer = renderApp(<Page />, '/counter')
    expect(renderer.getByTestId('page-counter')).toBeTruthy()
  })
})
