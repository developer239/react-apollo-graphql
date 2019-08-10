import { gql } from 'apollo-boost'

export interface IPage {
  id: number
  title: string
  text: string
}

export const QUERY = gql`
  {
    listPages {
      id
      title
    }
  }
`
