import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '../layout/index.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: (_) => {
      return { path: '/login' }
    },
  },
  {
    path: '/',
    component: Layout,
    children: [{
      path: '/personnelManagement',
      name: 'personnelManagement', //人员管理
      component: () =>
        import(/* webpackChunkName: "personnelManagement" */ '@/views/personnel-management/index.vue')
    }, {
      path: '/personnelEquipment',
      name: 'personnelEquipment', //人员设备
      component: () =>
        import(/* webpackChunkName: "personnelEquipment" */ '@/views/personnel-equipment/index.vue'),
    }, {
      path: '/personnelMonitoring',
      name: 'personnelMonitoring', //人员监测
      component: () =>
        import(/* webpackChunkName: "personnelMonitoring" */ '@/views/personnel-monitoring/index.vue'),
    }, {
      path: '/monitorCase',
      name: 'monitorCase', //监测示例
      component: () =>
        import(/* webpackChunkName: "monitorCase" */ '@/views/monitor-case/index.vue'),
    }]
  },
  {
    path: '/personnelManagement/detail/:id',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "Detail" */ '@/views/personnel-management/detail.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '@/views/login/index.vue')
  },
  {
    path: '/:currentPath(.*)*', // 路由未匹配到，进入这个
    redirect: (_) => {
      return { path: '/404' }
    },
  },
]
const router = createRouter({
  history: createWebHistory(''),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    }
  },
})
export default router
