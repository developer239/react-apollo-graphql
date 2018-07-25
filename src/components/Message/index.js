import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Container = styled.div`
  background-color: ${({ theme: { color }, type }) => {
    if (type === 'success') {
      return color.lightGreen
    }
  
    if (type === 'error') {
      return color.lightRed
    }
  
    return color.lightGrey
  }};
  color: ${props => props.theme.color.white};
  font-size: 14px;
  padding: 15px 20px;
`

const Message = ({ text, type }) => (
  <Container type={type}>
    {text}
  </Container>
)

Message.defaultProps = {
  type: null,
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error']),
}

export default Message
