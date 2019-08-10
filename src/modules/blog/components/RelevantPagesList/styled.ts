import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 50px;
`

export const PagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`
