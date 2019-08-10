import styled from 'styled-components'
import { mediaQueries } from 'styles/mediaQueries'

export const Container = styled.div`
  margin-top: 50px;
`

export const PagesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;

  ${mediaQueries.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mediaQueries.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`
