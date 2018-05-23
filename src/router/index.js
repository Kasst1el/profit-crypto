import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Form from '@/components/Form'
import Main from '@/components/Main'

import Solutions from '@/components/Solutions'
import Technologies from '@/components/Technologies'
import Projects from '@/components/Projects'
import Partners from '@/components/Partners'
import Problems from '@/components/Problems'
import Offers from '@/components/Offers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/solutions',
      name: 'Solutions',
      component: Solutions
    },
    {
      path: '/technologies',
      name: 'Technologies',
      component: Technologies
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/partners',
      name: 'Partners',
      component: Partners
    },
    {
      path: '/problems',
      name: 'Problems',
      component: Problems
    },
    {
      path: '/offers',
      name: 'Offers',
      component: Offers
    }
  ]
})














