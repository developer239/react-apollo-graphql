/* eslint-disable no-console */
import { cleanup } from '@testing-library/react'

// Automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

// https://github.com/kentcdodds/react-testing-library/issues/281#issuecomment-480349256
// This is just a little hack to silence a warning that we'll get until react
// Fixes this: https://github.com/facebook/react/pull/14853
const originalError = console.error
beforeAll(() => {
  console.error = (...args: any) => {
    if (
      /Warning.*not wrapped in act/u.test(args[0]) ||
      args[0].includes(
        "Warning: Can't perform a React state update on an unmounted component"
      )
    ) {
      return
    }
    originalError.call(console, ...args)
  }
})

afterAll(() => {
  console.error = originalError
})
