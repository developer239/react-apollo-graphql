import styled from 'styled-components'


const ErrorText = styled.span`
  display: inline-block;
  background-color: ${props => props.theme.color.lightRed};
  color: ${props => props.theme.color.white};
  margin-top: 10px;
  padding: 10px;
  font-size: 12px;
`

export default ErrorText
