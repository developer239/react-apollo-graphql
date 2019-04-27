import React from 'react'
import { waitForElement } from 'react-testing-library'
import * as Page from './index'
import { renderApp } from '../../../test/utils/render'
import { fakeDefaultCounterValue } from '../../../test/utils/gql-counter'

describe('[page] Counter', () => {
  it('should render correctly', () => {
    const renderer = renderApp(<Page.CounterPage />, '/counter')
    expect(renderer.getByTestId('page-counter')).toBeTruthy()
  })

  it('should show default counter state', async () => {
    const { getByTestId } = renderApp(<Page.CounterPage />, '/counter', [
      fakeDefaultCounterValue,
    ])

    // Wait for Query to be resolved
    await waitForElement(() => getByTestId('counter-value'))

    expect(getByTestId('counter-value').innerHTML).toEqual(
      `${fakeDefaultCounterValue.result.data.counterValue}`
    )
  })
})
