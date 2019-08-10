import React, { FC } from 'react'
import { MockedProvider, MockedResponse } from '@apollo/react-testing'

interface IProps {
  mocks: MockedResponse[]
  children: JSX.Element
}

export const ApolloProvider: FC<IProps> = ({ mocks, children }) => (
  <MockedProvider mocks={mocks} addTypename={false}>
    {children}
  </MockedProvider>
)
