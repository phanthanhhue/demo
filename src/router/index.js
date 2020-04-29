import Vue from 'vue'
import Router from 'vue-router'
import TheHome from '@/components/pages/TheHome'
import CoronavirusUpdate from '@/components/pages/CoronavirusUpdate'
import TheAbout from '@/components/pages/TheAbout'
import TheContact from '@/components/pages/TheContact'

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (to.hash) {
        return window.scrollTo({
          top: document.querySelector(to.hash).offsetTop,
          behavior: 'smooth'
        })
      } else {
        return { x: 0, y: 0 }
      }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: TheHome
    },
    {
      path: '/coronavirus-update',
      name: 'coronavirus-update',
      component: CoronavirusUpdate
    },
    {
      path: '/about',
      name: 'about',
      component: TheAbout
    },
    {
      path: '/contact',
      name: 'contact',
      component: TheContact
    }
  ]
})
