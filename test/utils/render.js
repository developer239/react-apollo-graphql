import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render } from 'react-testing-library'
import { ThemeProvider } from 'styled-components'
import { theme } from 'ui-react-library'
import ApolloProvider from '../../__mocks__/ApolloProvider'

export const renderApp = (component, uri, mocks = []) =>
  render(
    <MemoryRouter initialEntries={[uri]}>
      <ApolloProvider mocks={mocks}>
        <ThemeProvider theme={theme}>{component}</ThemeProvider>
      </ApolloProvider>
    </MemoryRouter>
  )
