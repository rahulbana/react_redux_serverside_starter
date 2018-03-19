import Home from 'shared/containers/Home'
import Dashboard from 'shared/containers/dashboard'
import Post from 'shared/containers/Post'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/post/:id',
    exact: true,
    component: Post
  },
  {
    path: '/admin',
    component: Dashboard
  }
]

export default routes
