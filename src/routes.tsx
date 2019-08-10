import { HomePage } from './pages/Home'
import { AboutPage } from './pages/About'
import { NotFoundPage } from './pages/NotFound'
import { App } from './app'

export const routes = [
  {
    component: App,
    routes: [
      {
        component: HomePage,
        path: '/',
        exact: true,
      },
      {
        component: AboutPage,
        path: '/about',
        exact: true,
      },
      {
        component: NotFoundPage,
        path: '*',
      },
    ],
  },
]
