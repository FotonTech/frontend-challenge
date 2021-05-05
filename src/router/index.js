import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      title: 'Home',
      component: () => import('@/pages/Main.vue'),
      meta: {
        title: 'Home'
      },
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/pages/HomeContent.vue'),
          meta: {
            title: 'Home'
          }
        },
        {
          path: '/search',
          name: 'search',
          component: () => import('@/pages/SearchContent.vue'),
          meta: {
            title: 'Search'
          }
        }
      ]
    },
    {
      path: '/details/:bookId',
      title: 'Details',
      name: 'details',
      component: () => import('@/pages/Details.vue'),
      meta: {
        title: 'Details'
      }
    },
    {
      path :'*',
      redirect: '/home'
    }
  ]
})
