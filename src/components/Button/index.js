import styled from 'styled-components'


const Button = styled.button`
  background-color: ${props => props.theme.color.lightGrey};
  border: none;
  color: white;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  transition: background-color 150ms linear;
  
  &:hover {
    background-color: ${props => props.theme.color.darkGrey};
  }
  
  &:focus {
    outline: 0;
  }
  
  &:active {
    background-color: ${props => props.theme.color.primary};
  }
`

export default Button
