import React from 'react'
import { waitForElement } from 'react-testing-library'
import { renderApp } from '../../../test/utils/render'
import { fakeDefaultCounterValue } from '../../../test/utils/gql-counter'
import App from '../../app'
import { COUNTER_TEST_ID, COUNTER_VALUE_TEST_ID } from './index'
import { ROUTE_PATHS } from '../../routes'

describe('[page] Counter', () => {
  it('should render correctly', () => {
    const renderer = renderApp(<App />, ROUTE_PATHS.counter)
    expect(renderer.getByTestId(COUNTER_TEST_ID)).toBeTruthy()
  })

  it('should show default counter state', async () => {
    const { getByTestId } = renderApp(<App />, ROUTE_PATHS.counter, [
      fakeDefaultCounterValue,
    ])

    // Wait for Query to be resolved
    await waitForElement(() => getByTestId(COUNTER_VALUE_TEST_ID))

    expect(getByTestId(COUNTER_VALUE_TEST_ID).innerHTML).toEqual(
      `${fakeDefaultCounterValue.result.data.counterValue}`
    )
  })
})
