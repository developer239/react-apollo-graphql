import styled from 'styled-components'
import { Card as AntCard } from 'antd'
import { Link } from 'react-router-dom'

export const Card = styled(AntCard)`
  margin-top: 0 !important;
  
  & + & {
    margin-top: 25px;
  }
`

export const CardLink = styled(Link)`
  margin-top: 25px;
  display: block;
`
