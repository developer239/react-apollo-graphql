import styled from 'styled-components'
import { Card as AntCard } from 'antd'

export const Card = styled(AntCard)`
  & + & {
    margin-top: 25px;
  }
`
