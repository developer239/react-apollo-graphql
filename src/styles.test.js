import { mediaQueries } from './styles'

describe('Styles', () => {
  it('mediaQueries', () => {
    expect(mediaQueries).toEqual({
      lg: '@media (min-width: 62.5rem)',
      md: '@media (min-width: 48rem)',
      sm: '@media (min-width: 34.375rem)',
      xl: '@media (min-width: 75rem)',
      xs: '@media (min-width: 21.25rem)',
      xxl: '@media (min-width: 100rem)',
    })
  })
})
