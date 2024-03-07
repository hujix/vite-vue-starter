<script setup lang="ts">
import { LOCALE_OPTIONS, LocaleOption } from "@/locale";
import LanguageSVG from "assets/icons/language.svg?component";
import VueSVG from "assets/icons/vue.svg?component";
import { ref } from "vue";

const isOpen = ref(false);

const changeLocale = (item: LocaleOption) => {
  localStorage.setItem("lang", item.value);
};
</script>

<template>
  <nav class="container mx-auto p-6 lg:flex lg:items-center lg:justify-between">
    <div class="flex items-center justify-between">
      <a href="#" class="flex items-center">
        <img class="h-6 w-auto sm:h-7" src="/vite.svg" alt="vite" />
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
        <VueSVG class="h-6 w-auto sm:h-7" />
      </a>
    </div>

    <div
      class="absolute inset-x-0 z-20 w-full gap-2 px-6 shadow-md transition-all duration-300 ease-in-out lg:relative lg:top-0 lg:mt-0 lg:flex lg:w-auto lg:translate-x-0 lg:items-center lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none dark:bg-gray-900 lg:dark:bg-transparent"
    >
      <div class="relative inline-block">
        <button
          @click="isOpen = !isOpen"
          class="relative z-10 block rounded-md border-none border-transparent p-2 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:focus:ring-blue-400 dark:focus:ring-opacity-40"
        >
          <LanguageSVG class="text-white" />
        </button>
        <div
          v-show="isOpen"
          @click="isOpen = false"
          class="absolute right-0 z-20 mt-2 w-auto origin-top-right rounded-md py-2 shadow-xl ease-out dark:bg-gray-800"
        >
          <a
            href="#"
            v-for="(item, index) in LOCALE_OPTIONS"
            :key="index"
            @click="changeLocale(item)"
            class="block transform px-4 py-2 text-sm capitalize text-gray-600 transition-colors duration-300 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            {{ item.label }}
          </a>
        </div>
      </div>

      <a
        class="mt-4 block rounded-lg bg-blue-600 px-5 py-2 text-center text-sm capitalize text-white hover:bg-blue-500 lg:mt-0 lg:w-auto"
        href="#"
      >
        {{ $t("header.button") }}
      </a>
    </div>
  </nav>
</template>

<style scoped lang="scss"></style>
