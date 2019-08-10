import Home from 'pages/Home'
import Counter from 'pages/Counter'
import NotFound from 'pages/NotFound'
import {
  ListPosts,
  PostDetail,
  PostCreate,
  PostEdit,
} from 'pages/Blog'
import App from './app'


export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/counter',
        component: Counter,
      },
      {
        path: '/posts/:postId/edit',
        component: PostEdit,
      },
      {
        path: '/posts/create',
        component: PostCreate,
      },
      {
        path: '/posts/:postId',
        component: PostDetail,
      },
      {
        path: '/posts',
        component: ListPosts,
      },
      {
        path: '*',
        component: NotFound,
      },
    ],
  },
]
