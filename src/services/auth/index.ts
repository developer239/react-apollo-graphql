import Cookie from 'js-cookie'

enum STORAGE {
  ACCESS_TOKEN = 'accessToken',
  REFRESH_TOKEN = 'refreshToken',
}

export const auth = {
  logIn: (accessToken: string, refreshToken: string) => {
    auth.setAccessToken(accessToken)
    auth.setRefreshToken(refreshToken)
  },

  logOut: () => {
    auth.removeAccessToken()
    auth.removeRefreshToken()
  },

  // Access Token
  setAccessToken: (token: string) =>
    Cookie.set(STORAGE.ACCESS_TOKEN, token, { expires: 365 }),
  getAccessToken: () => Cookie.get(STORAGE.ACCESS_TOKEN),
  removeAccessToken: () => Cookie.remove(STORAGE.ACCESS_TOKEN),

  // Refresh Token
  setRefreshToken: (token: string) =>
    Cookie.set(STORAGE.REFRESH_TOKEN, token, { expires: 365 }),
  getRefreshToken: () => Cookie.get(STORAGE.REFRESH_TOKEN) || '',
  removeRefreshToken: () => Cookie.remove(STORAGE.REFRESH_TOKEN),
}
