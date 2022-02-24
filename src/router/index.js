import Vue from 'vue'
import VueRouter from 'vue-router'

import CareerView from '../views/CareerView.vue'
import WorksView from '../views/WorksView.vue'
import OrdinaryView from '../views/OrdinaryView.vue'
import BlogView from '../views/BlogView.vue'
import CommentsView from '../views/CommentsView.vue'
import TestView from '../views/TestView.vue'

import AllWorksList from '../views/works/AllWorksList.vue'
import HsMoaBO from '../views/works/HsMoaBO.vue'
import MeditPartnerPortal from '../views/works/MeditPartnerPortal.vue'
import MeditHrSystem from '../views/works/MeditHrSystem.vue'
import AdidasGolf from '../views/works/AdidasGolf.vue'
import DiorGallery from '../views/works/DiorGallery.vue'
import YbmDigitalBook from '../views/works/YbmDigitalBook.vue'
import SnsMarketing from '../views/works/SnsMarketing.vue'
import Vual from '../views/works/Vual.vue'
import MeritzDirect from '../views/works/MeritzDirect.vue'
import GooutStore from '../views/works/GooutStore.vue'
import LotteHowmuch from '../views/works/LotteHowmuch.vue'

// import { component } from "vue/types/umd";

Vue.use(VueRouter)

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
    children: [
      {
        path: 'all',
        name: 'works',
        component: AllWorksList,
        meta: {
          name: 'all',
        },
      },
      {
        path: 'hsmoabo',
        name: 'works',
        component: HsMoaBO,
        meta: {
          name: 'hsmoabo',
        },
      },
      {
        path: 'mpp',
        name: 'works',
        component: MeditPartnerPortal,
        meta: {
          name: 'mpp',
        },
      },
      {
        path: 'hr',
        name: 'works',
        component: MeditHrSystem,
        meta: {
          name: 'hr',
        },
      },
      {
        path: 'adidas-golf',
        name: 'works',
        component: AdidasGolf,
        meta: {
          name: 'adidas-golf',
        },
      },
      {
        path: 'dior-gallery',
        name: 'works',
        component: DiorGallery,
        meta: {
          name: 'dior-gallery',
        },
      },
      {
        path: 'ybm-digital-book',
        name: 'works',
        component: YbmDigitalBook,
        meta: {
          name: 'ybm-digital-book',
        },
      },
      {
        path: 'sns-marketing',
        name: 'works',
        component: SnsMarketing,
        meta: {
          name: 'sns-marketing',
        },
      },
      {
        path: 'vual',
        name: 'works',
        component: Vual,
        meta: {
          name: 'vual',
        },
      },
      {
        path: 'meritz-direct',
        name: 'works',
        component: MeritzDirect,
        meta: {
          name: 'meritz-direct',
        },
      },
      {
        path: 'gooutstore',
        name: 'works',
        component: GooutStore,
        meta: {
          name: 'gooutstore',
        },
      },
      {
        path: 'lotte-howmuch',
        name: 'works',
        component: LotteHowmuch,
        meta: {
          name: 'lotte-howmuch',
        },
      },
    ],
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
  {
    path: '/test',
    name: 'test',
    component: TestView,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
})

export default router
