// 基本页面 404页面
import NotFound from '../page/NotFound/index.vue';

// 业务模块
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
  {
    path: '*',
    component: NotFound,
  },
]

export default routes
