import gql from 'graphql-tag'


export const MOCK_MUTATION = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`

export const mutation_mock = {
  request: {
    query: MOCK_MUTATION,
  },
  result: { data: { deletePost: { id: 1, title: 'Mock Title' } } },
}

export const mutation_mock_error = {
  request: {
    query: MOCK_MUTATION,
  },
  error: new Error('Error state.'),
}

export const MOCK_QUERY = gql`
  query post{
    allPosts {
      id
      title
      text
    }
  }
`

export const query_mock = {
  request: {
    query: MOCK_QUERY,
  },
  result: {
    data: {
      allPosts: [
        { id: 1, title: 'Mock Title', text: 'Mock lorem ipsum text.' },
        { id: 2, title: 'Another Title', text: 'More mock text..' },
      ],
    },
  },
}
export const query_mock_error = {
  request: {
    query: MOCK_QUERY,
  },
  error: new Error('Error state.'),
}
