import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

export const renderWithRouter = (component: JSX.Element, uri: string) =>
  render(<MemoryRouter initialEntries={[uri]}>{component}</MemoryRouter>)
