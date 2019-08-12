import styled from 'styled-components'

export const FormElementLabel = styled.label<{ isHidden?: boolean }>`
  display: ${props => (props.isHidden ? 'none' : 'block')};

  & + & {
    display: block;
    margin-top: 15px;
  }
`
