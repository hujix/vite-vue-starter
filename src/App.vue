<script setup lang="ts">
import DefaultLayout from "@/layout/DefaultLayout.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const layout = computed(() => {
  if (route && route.meta && route.meta.layout) {
    // 如果在路由的 meta 数据中指定了布局，则使用指定的布局
    return route.meta.layout;
  } else {
    // 如果没有在路由的 meta 数据中指定布局，则使用默认布局
    return DefaultLayout;
  }
});
</script>

<template>
  <!-- 这里使用了一个动态组件，根据路由的 meta 数据决定使用哪个布局组件 -->
  <component :is="layout">
    <router-view v-slot="{ Component }">
      <!-- 添加路由过渡动画 `fade` -->
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </component>
</template>
