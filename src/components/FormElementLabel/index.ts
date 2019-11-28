import styled from 'styled-components'
import { Form } from 'antd'

export const FormElementLabel = styled(Form.Item)<{ isHidden?: boolean }>`
  display: ${props => (props.isHidden ? 'none' : 'block')};
  margin-bottom: 0 !important;

  & + & {
    display: block;
    margin-top: 15px;
  }
`
