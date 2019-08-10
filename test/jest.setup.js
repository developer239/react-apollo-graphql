import { cleanup } from 'react-testing-library'

window.console.log = jest.fn()

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup)
