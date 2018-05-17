import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Main from '@/components/Main'
import Technologies from '@/components/Technologies'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/technologies',
      name: 'Technologies',
      component: Technologies
    }
  ]
})
