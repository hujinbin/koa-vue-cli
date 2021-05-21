const about = () => import('../page/About/index.vue')
const home = () => import('../page/Home/index.vue')

const routes = [
  {
    path: '/',
    component: home
  },
  {
    path: '/about',
    component: about
  },
]

export default routes
