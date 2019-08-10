import Cookie from 'js-cookie'

enum STORAGE {
  ACCESS_TOKEN = 'accessToken',
}

export const auth = {
  setAccessToken: (token: string) =>
    Cookie.set(STORAGE.ACCESS_TOKEN, token, { expires: 365 }),

  getAccessToken: () => Cookie.get(STORAGE.ACCESS_TOKEN),

  removeAccessToken: () => Cookie.remove(STORAGE.ACCESS_TOKEN),
}
