import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import Head from '@/components/head'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/head',
      name: 'Head',
      component: Head
    }
  ]
})
