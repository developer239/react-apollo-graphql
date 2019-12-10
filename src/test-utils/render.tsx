import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { MockedResponse } from '@apollo/react-testing'
import { ApolloProvider } from './ApolloProvider'

export const renderWithRouter = (
  component: JSX.Element,
  uri: string,
  mocks: MockedResponse[] = []
) =>
  render(
    <MemoryRouter initialEntries={[uri]}>
      <ApolloProvider mocks={mocks}>{component}</ApolloProvider>
    </MemoryRouter>
  )
