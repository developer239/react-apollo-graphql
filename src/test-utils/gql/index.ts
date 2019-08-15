import {
  CREATE_PAGE_MUTATION,
  DELETE_PAGE_MUTATION,
  LIST_PAGES_QUERY,
  PAGE_DETAIL_QUERY,
  UPDATE_PAGE_MUTATION,
} from 'modules/blog/gql'
import {
  MockPageType,
  MockPageWithUserType,
  MockUserType,
  MockUserWithPages,
} from '../generators'
import {
  CHANGE_PASSWORD_MUTATION,
  FORGOT_PASSWORD_MUTATION,
  LOGIN_MUTATION,
  ME_QUERY,
  REGISTER_MUTATION,
} from '../../modules/auth/gql'

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
      me: {
        pages: [] as MockPageType[],
        ...data,
      },
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

export const mockLoginSuccess = (
  data: MockUserType | MockUserWithPages,
  accessToken = 'randomToken',
  refreshToken = 'randomToken'
) => ({
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
        accessToken,
        refreshToken,
      },
    },
  },
})

//
// Register

export const mockRegisterSuccess = (
  data: MockUserType | MockUserWithPages,
  accessToken = 'randomToken',
  refreshToken = 'randomToken'
) => ({
  request: {
    query: REGISTER_MUTATION,
    variables: {
      data: {
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
      },
    },
  },
  result: {
    data: {
      register: {
        accessToken,
        refreshToken,
      },
    },
  },
})

//
// Create Page

export const mockCreatePageSuccess = (page: MockPageWithUserType) => ({
  request: {
    query: CREATE_PAGE_MUTATION,
    variables: {
      data: {
        title: page.title,
        text: page.text,
      },
    },
  },
  result: {
    data: {
      createPage: {
        id: page.id,
        title: page.title,
        text: page.text,
        user: {
          pages: [] as MockPageType[],
          ...page.user,
        },
      },
    },
  },
})

//
// Edit Page

export const mockUpdatePageSuccess = (page: MockPageWithUserType) => ({
  request: {
    query: UPDATE_PAGE_MUTATION,
    variables: {
      data: {
        id: page.id,
        title: page.title,
        text: page.text,
      },
    },
  },
  result: {
    data: {
      updatePage: {
        id: page.id,
        title: page.title,
        text: page.text,
        user: {
          pages: [] as MockPageType[],
          ...page.user,
        },
      },
    },
  },
})

//
// Mock Password Forgot

export const mockPasswordForgotSuccess = (email: string) => ({
  request: {
    query: FORGOT_PASSWORD_MUTATION,
    variables: {
      email,
    },
  },
  result: {
    data: {
      forgotPassword: true,
    },
  },
})

//
// Mock Password Change

export const mockPasswordChangeSuccess = (
  data: { password: string; token: string },
  accessToken = 'mock-token',
  refreshToken = 'mock-refresh-token'
) => ({
  request: {
    query: CHANGE_PASSWORD_MUTATION,
    variables: {
      data: {
        password: data.password,
        token: data.token,
      },
    },
  },
  result: {
    data: {
      changePassword: {
        accessToken: accessToken,
        refreshToken: refreshToken,
      },
    },
  },
})
