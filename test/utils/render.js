import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'ui-react-library'
import ApolloProvider from '../../__mocks__/ApolloProvider'

export const renderApp = (component, uri, mocks = []) =>
  render(
    <MemoryRouter initialEntries={[uri]}>
      <ThemeProvider theme={theme}>
        <ApolloProvider mocks={mocks}>{component}</ApolloProvider>
      </ThemeProvider>
    </MemoryRouter>
  )
