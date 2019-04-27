import { ALL_POSTS } from '../../src/modules/blog/gql'

export const fakeAllPostsSuccess = {
  request: {
    query: ALL_POSTS,
  },
  result: {
    data: {
      allPosts: [
        {
          id: 1,
          title: 'Mock Title',
          text: 'Mock lorem ipsum text.',
        },
        {
          id: 2,
          title: 'Another Title',
          text: 'More mock text..',
        },
      ],
    },
  },
}

export const ERROR_MESSAGE = 'Something went wrong.'

export const fakeAllPostsError = {
  request: {
    query: ALL_POSTS,
  },
  error: new Error(ERROR_MESSAGE),
}
