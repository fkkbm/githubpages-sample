import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import History from '@/views/History/History.vue'
import TEST1 from '@/views/History/TEST1.vue'
import TEST2 from '@/views/History/TEST2.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/history/:id',
    name: 'History',
    component: History,
    children: [
      {
        path: 'test1',
        component: TEST1
      },{
        path: 'test2',
        component: TEST2
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
