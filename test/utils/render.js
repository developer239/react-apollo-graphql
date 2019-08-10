import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render } from 'react-testing-library'

export const renderWithRouter = (component, uri) =>
  render(<MemoryRouter initialEntries={[uri]}>{component}</MemoryRouter>)
