import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
  {
    path: '/select-ba-type',
    name: 'select-ba-type',
    component: () => import(/* webpackChunkName: "about" */ '../views/SelectBaTypeView.vue')
  },
  {
    path: '/create-ba',
    name: 'create-ba',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateBaFormView.vue')
  },
  {
    path: '/create-ba-blanket/',
    name: 'create-ba-blanket',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateBaBlanketFormView.vue')
  },
  {
    path: '/detail-ba-blanket/:id',
    name: 'detail-ba-blanket',
    component: () => import(/* webpackChunkName: "about" */ '../views/DetailBaBlanketView.vue')
  },
  {
    path: '/approval',
    name: 'approval',
    component: () => import(/* webpackChunkName: "about" */ '../views/ApprovalView.vue')
  },
  {
    path: '/draft',
    name: 'draft',
    component: () => import(/* webpackChunkName: "about" */ '../views/DraftView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
