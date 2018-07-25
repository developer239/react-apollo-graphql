import { withProps } from 'recompose'
import styled from 'styled-components'
import { mediaQueries } from 'styles'


export const H1 = styled.h1`
  font-weight: 500;
  margin: 0 0 24px  0;
  font-size: 21px;
  line-height: 24px;
  
  &::selection {
    background: ${props => props.theme.color.primary};
  }
    
  ${mediaQueries.sm} {
    font-size: 24px;
    line-height: 36px;
  }
  
  ${mediaQueries.md} {
    font-size: 36px;
    line-height: 48px;
  }
`

export const H2 = styled.h1`
  font-weight: 500;
  margin: 0 0 24px  0;
  font-size: 18px;
  line-height: 24px;
  
  &::selection {
    background: ${props => props.theme.color.primary};
  }
  
  ${mediaQueries.sm} {
    font-size: 21px;
    line-height: 36px;
  }
  
  ${mediaQueries.md} {
    font-size: 24px;
    line-height: 24px;
  }
`

export const H3 = styled.h1`
  font-weight: 500;
  margin: 0 0 24px  0;
  font-size: 16px;
  line-height: 24px;
  
  &::selection {
    background: ${props => props.theme.color.primary};
  }
  
  ${mediaQueries.sm} {
    font-size: 18px;
    line-height: 36px;
  }
  
  ${mediaQueries.md} {
    font-size: 21px;
    line-height: 24px;
  }
`

export const P = styled.p`
  font-weight: lighter;
  margin: 0 0 25px 0;
  font-size: 16px;
  line-height: 1.5;
  
  &::selection {
    background: ${props => props.theme.color.primary};
  }
`

export const HR = styled.hr`
  box-sizing: content-box;
  height: 0;
  display: block;
  unicode-bidi: isolate;
  overflow: hidden;
  margin-top: 25px;
  margin-bottom: 25px;
  border: 0;
  border-top: 1px solid #f2f2f4;
`


export const A = withProps({ target: '_blank', rel: 'noopener noreferrer' })(styled.a`
  color: ${props => props.theme.color.secondary};
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color: ${props => props.theme.color.primary};
  }

  &:active,
  &:focus {
    outline: none;
    text-decoration: none;
  }
`)
