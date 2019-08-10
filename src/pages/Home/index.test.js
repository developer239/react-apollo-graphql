import React from 'react'
import { renderApp } from '../../../test/utils/render'
import App from '../../app'
import { HOME_TEST_ID } from './index'
import { ROUTE_PATHS } from '../../routes'

describe('[page] Home', () => {
  it('should render correctly', () => {
    const renderer = renderApp(<App />, ROUTE_PATHS.home)
    expect(renderer.getByTestId(HOME_TEST_ID)).toBeTruthy()
  })
})
