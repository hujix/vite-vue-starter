import DefaultLayout from "@/layout/DefaultLayout.vue";
import { loadLanguageAsync } from "@/locale";
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

router.beforeEach(async (_, __, next) => {
  // 语言懒加载
  const language = (navigator.language || "zh-cn").toLocaleLowerCase(); // 这是获取浏览器的语言
  const lang = localStorage.getItem("lang") || language || "zh-cn";
  await loadLanguageAsync(lang).then(() => next());
});

export default router;
