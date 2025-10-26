import Vue from 'vue'
import VueRouter from 'vue-router'

import CareerView from '../views/CareerView.vue'
import WorksView from '../views/WorksView.vue'
import OrdinaryView from '../views/OrdinaryView.vue'
import BlogView from '../views/BlogView.vue'
import CommentsView from '../views/CommentsView.vue'

import AllWorksList from '../views/works/AllWorksList.vue'
import WorkDetail from '../views/works/WorkDetail.vue'
import worksConfig from '../content/works-config.json'

Vue.use(VueRouter)

// works 라우트를 동적으로 생성
const worksRoutes = worksConfig.projects
  .filter((project) => project.active)
  .map((project) => ({
    path: project.id,
    name: 'works',
    component: project.id === 'all' ? AllWorksList : WorkDetail,
    meta: {
      name: project.id,
    },
  }))

const routes = [
  {
    path: '/',
    name: 'main',
    component: null,
  },
  {
    path: '/career',
    name: 'career',
    component: CareerView,
  },
  {
    path: '/works',
    name: 'works',
    component: WorksView,
    children: worksRoutes,
  },
  {
    path: '/ordinary',
    name: 'ordinary',
    component: OrdinaryView,
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView,
  },
  {
    path: '/comments',
    name: 'comments',
    component: CommentsView,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
