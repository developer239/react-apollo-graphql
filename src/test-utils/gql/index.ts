import {
  DELETE_PAGE_MUTATION,
  LIST_PAGES_QUERY,
  PAGE_DETAIL_QUERY,
} from 'modules/blog/gql'
import {
  MockPageType,
  MockPageWithUserType,
  MockUserType,
  MockUserWithPages,
} from '../generators'
import { LOGIN_MUTATION, ME_QUERY } from '../../modules/auth/gql'

//
// List Pages

export const LIST_PAGES_ERROR_MESSAGE = 'list pages failed'

export const mockListPagesSuccess = (data: MockPageType[]) => ({
  request: {
    query: LIST_PAGES_QUERY,
  },
  result: {
    data: {
      listPages: data,
    },
  },
})

export const mockListPagesError = {
  request: {
    query: LIST_PAGES_QUERY,
  },
  error: new Error(LIST_PAGES_ERROR_MESSAGE),
}

//
// Page Detail

export const PAGE_DETAIL_ERROR_MESSAGE = 'page detail failed'

export const mockPageDetailSuccess = (data: MockPageWithUserType) => ({
  request: {
    query: PAGE_DETAIL_QUERY,
    variables: {
      id: data.id,
    },
  },
  result: {
    data: {
      pageDetail: data,
    },
  },
})

export const mockPageDetailError = (id: number = 1) => ({
  request: {
    query: PAGE_DETAIL_QUERY,
    variables: {
      id,
    },
  },
  error: new Error(PAGE_DETAIL_ERROR_MESSAGE),
})

//
// Me

export const ME_ERROR_MESSAGE = 'me failed'

export const mockMeSuccess = (data: MockUserType | MockUserWithPages) => ({
  request: {
    query: ME_QUERY,
  },
  result: {
    data: {
      me: data,
    },
  },
})

export const mockMeError = () => ({
  request: {
    query: ME_QUERY,
  },
  error: new Error(ME_ERROR_MESSAGE),
})

//
// Delete Post

export const mockDeletePageSuccess = (data: MockPageType) => ({
  request: {
    query: DELETE_PAGE_MUTATION,
    variables: {
      id: data.id,
    },
  },
  result: {
    data: {
      deletePage: data,
    },
  },
})


//
// Log In

export const mockLoginSuccess = (data: MockUserType | MockUserWithPages, accessToken = 'randomToken') => ({
  request: {
    query: LOGIN_MUTATION,
    variables: {
      email: data.email,
      password: data.password,
    },
  },
  result: {
    data: {
      login: {
        accessToken
      },
    },
  },
})
