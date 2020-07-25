import Vue from "vue";
import VueRouter from "vue-router";

import CareerView from "../views/CareerView.vue";
import WorksView from "../views/WorksView.vue";
import OrdinaryView from "../views/OrdinaryView.vue";
import BlogView from "../views/BlogView.vue";
import CommentsView from "../views/CommentsView.vue";

import MeditPartnerPortal from "../views/works/MeditPartnerPortal.vue";
// import { component } from "vue/types/umd";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: null,
  },
  {
    path: "/career",
    name: "career",
    component: CareerView,
  },
  {
    path: "/works",
    name: "works",
    component: WorksView,
    children: [
      {
        path: 'mpp',
        name: 'works',
        component: MeditPartnerPortal
      }
    ]
  },
  {
    path: "/ordinary",
    name: "ordinary",
    component: OrdinaryView,
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogView,
  },
  {
    path: "/comments",
    name: "comments",
    component: CommentsView,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {x:0, y:0};
  }
});

export default router;