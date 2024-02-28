import DefaultLayout from "@/layout/DefaultLayout.vue";
import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/HomePage.vue"),
    meta: {
      title: "首页",
      layout: DefaultLayout
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
