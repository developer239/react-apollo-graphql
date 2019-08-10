import { useQuery } from '@apollo/react-hooks'
import { ME_QUERY } from '../gql'
import { Me } from '../gql/__generated__/Me'

export const useMe = () => useQuery<Me>(ME_QUERY)
