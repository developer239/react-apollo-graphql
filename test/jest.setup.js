import { cleanup } from 'react-testing-library'

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

// !!!!
// TODO: Temporarily ignore React warnings because of ui-react-library
// !!!!

const originalError = console.error

beforeAll(() => {
  console.error = (...args) => {
    if (
      /Warning: React does not recognize the/u.test(args[0]) ||
      /Warning: Invalid value for prop/u.test(args[0]) ||
      /Warning: Invalid DOM property/u.test(args[0])
    ) {
      return
    }
    originalError.call(console, ...args)
  }
})

afterAll(() => {
  console.error = originalError
})
