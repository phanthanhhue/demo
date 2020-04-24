import Vue from 'vue'
import Router from 'vue-router'
import TheHome from '@/components/pages/TheHome'
import CoronavirusUpdate from '@/components/pages/CoronavirusUpdate'
import TheAbout from '@/components/pages/TheAbout'
import TheContact from '@/components/pages/TheContact'

Vue.use(Router)

export default new Router({
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
