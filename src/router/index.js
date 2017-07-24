import Vue from 'vue'
import Router from 'vue-router'
import Table from '@/components/Table'
import AltindexSolo from '@/components/AltindexSolo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Table',
      component: Table
    },
    {
      path: '/solo',
      name: 'AltindexSolo',
      component: AltindexSolo
    }
  ]
})
