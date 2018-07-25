import React from 'react'
import styled from 'styled-components'


const Spinner = styled.div`
  height: 100%;
  text-align: center;
    
  & > div {
    width: 12px;
    height: 12px;
    background-color: ${props => props.theme.color.primary};
  
    border-radius: 100%;
    display: inline-block;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }
  
  & div:nth-child(1) {
    animation-delay: -0.32s;
  }
  
  & div:nth-child(2) {
    animation-delay: -0.16s;
  }
  
  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
`

const SpinnerComponent = () => (
  <Spinner>
    <div />
    <div />
    <div />
  </Spinner>
)

export default SpinnerComponent
