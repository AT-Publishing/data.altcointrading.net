import Vue from 'vue'
import Router from 'vue-router'
import Altindex from '@/components/Altindex'
import AltindexSolo from '@/components/AltindexSolo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Altindex',
      component: Altindex
    },
    {
      path: '/solo',
      name: 'AltindexSolo',
      component: AltindexSolo
    }
  ]
})
