import styled from 'styled-components'
import { mediaQueries } from 'styles'


const Content = styled.div`
  background: white;
  min-height: 100%;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 10px;
  
  ${mediaQueries.lg} {
    width: ${props => props.theme.layout.maxWidth};
    padding: 20px 0;
    margin: 0 auto;
  }
`

export default Content
