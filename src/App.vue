<script setup lang="ts">
import DefaultLayout from "@/layout/DefaultLayout.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const layout = computed(() => {
  return route.meta.layout || DefaultLayout;
});
</script>

<template>
  <!-- 这里使用了一个动态组件，根据路由的 meta 数据决定使用哪个布局组件 -->
  <component :is="layout">
    <router-view v-slot="{ Component }">
      <!-- 添加路由过渡动画 `fade` -->
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </component>
</template>
