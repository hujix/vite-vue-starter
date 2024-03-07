<script setup lang="ts">
import { useUserStore } from "@/store/modules/user";
import VueSVG from "assets/icons/vue.svg?component";
import { onMounted } from "vue";

const userStore = useUserStore();

onMounted(() => {
  userStore.updateUserInfo();
});
</script>
<template>
  <div class="py16 container mx-auto px-6 text-center">
    <a href="#" class="mx-auto mt-16 flex items-center justify-center gap-3">
      <img class="h-24 w-auto sm:h-20" src="/vite.svg" alt="vite" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6 text-white"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
      <VueSVG class="h-24 w-auto sm:h-20" />
    </a>
    <div class="mx-auto mt-24 max-w-lg">
      <h1 class="text-3xl font-semibold text-gray-800 lg:text-4xl dark:text-white">
        {{ $t("home.title") }}
      </h1>
      <p
        class="underline-offset-3 text-2xl font-semibold text-gray-800 underline decoration-blue-400 decoration-8 lg:text-4xl dark:text-white dark:decoration-blue-600"
      >
        By {{ userStore.name }}
      </p>
      <p class="mt-6 text-gray-500 dark:text-gray-300">
        {{ $t("home.desc") }}
      </p>
      <a
        type="button"
        target="_blank"
        href="https://github.com/hujix/vite-vue-starter"
        class="mt-6 rounded-lg bg-blue-600 px-5 py-2 text-center text-sm font-medium capitalize leading-5 text-white hover:bg-blue-500 focus:outline-none lg:mx-0 lg:w-auto"
      >
        {{ $t("home.button") }}
      </a>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
