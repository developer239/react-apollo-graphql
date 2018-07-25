import { injectGlobal } from 'styled-components'


export const theme = {
  layout: {
    maxWidth: `${1000 / 16}rem`,
  },
  color: {
    primary: '#5d9cec',
    secondary: '#4a89dc',
    lightGreen: '#48cfad',
    darkGreen: '#37bc9b',
    lightRed: '#ed5565',
    darkRed: '#da4453',
    white: '#fff',
    lightGrey: '#ccd1d9',
    darkGrey: '#aab2bd',
    black: '#000',
  },
}

const breakpoints = {
  xs: 340,
  sm: 550,
  md: 768,
  lg: 1000,
  xl: 1200,
  xxl: 1600,
}

export const mediaQueries = Object.keys(breakpoints).reduce((obj, size) => {
  obj[size] = `@media (min-width: ${breakpoints[size] / 16}rem)`
  return obj
}, {})

const injectGlobalStyles = () => injectGlobal`
  html,
  body,
  #__next {
    height: 100%;
  }
  
  body {
    min-width: 326px;
  }
  body,
  textarea,
  input,
  button,
  label {
    font-family: 'Open Sans', sans-serif;
  }
`

export default injectGlobalStyles
