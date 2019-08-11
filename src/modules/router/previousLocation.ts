import { Location as HistoryLocation } from 'history'

export const previousLocation = (
  routerLocation: HistoryLocation<any>,
  defaultPath = '/me'
) => (routerLocation.state && routerLocation.state.from) || defaultPath
