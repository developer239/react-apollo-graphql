import * as styledComponents from 'styled-components'
import injectGlobalStyles, { mediaQueries } from './styles'


// Mock injectGlobal method
styledComponents.injectGlobal = a => a[0].replace(/\s\s+/g, ' ').trim() //eslint-disable-line

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
  it('injectGlobalStyles', () => {
    // eslint-disable-next-line max-len
    expect(injectGlobalStyles()).toEqual('html, body, #__next { height: 100%; } body { min-width: 326px; } body, textarea, input, button, label { font-family: \'Open Sans\', sans-serif; }')
  })
})
