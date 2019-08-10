import { ALL_POSTS, CREATE_POST, POST_DETAIL } from '../../src/modules/blog/gql'

export const ERROR_MESSAGE = 'Something went wrong.'

// GET Post Detail

export const fakePostDetailSuccess = {
  request: {
    query: POST_DETAIL,
    variables: {
      id: '1',
    },
  },
  result: {
    data: {
      Post: {
        id: '1',
        title: 'Mock Title',
        text: 'Mock lorem ipsum text.',
      },
    },
  },
}

export const fakePostDetailError = {
  request: {
    query: POST_DETAIL,
    variables: {
      id: '1',
    },
  },
  error: new Error(ERROR_MESSAGE),
}

// GET All Posts

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

export const fakeAllPostsError = {
  request: {
    query: ALL_POSTS,
  },
  error: new Error(ERROR_MESSAGE),
}

// POST Create Post

export const fakeCreatePostSuccess = {
  request: {
    query: CREATE_POST,
  },
  result: {
    data: {
      createPost: {
        id: 1,
        title: 'Mock Title',
        text: `Mock lorem ipsum text.
      
      And another paragraph.`,
      },
    },
  },
}

export const fakeCreatePostError = {
  request: {
    query: CREATE_POST,
  },
  error: new Error(ERROR_MESSAGE),
}
