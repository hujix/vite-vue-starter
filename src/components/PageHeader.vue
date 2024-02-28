<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);
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
          class="h-6 w-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        <img class="h-6 w-auto sm:h-7" src="/src/assets/vue.svg" alt="vue" />
      </a>

      <!-- Mobile menu button -->
      <div class="flex lg:hidden">
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400"
          aria-label="toggle menu"
        >
          <svg
            v-show="!isOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
          </svg>

          <svg
            v-show="isOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
    <div
      :class="[isOpen ? 'translate-x-0 opacity-100 ' : '-translate-x-full opacity-0']"
      class="absolute inset-x-0 z-20 w-full bg-white px-6 py-4 shadow-md transition-all duration-300 ease-in-out lg:relative lg:top-0 lg:mt-0 lg:flex lg:w-auto lg:translate-x-0 lg:items-center lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none dark:bg-gray-900 lg:dark:bg-transparent"
    >
      <div class="lg:-px-8 flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0">
        <a
          class="transform text-gray-700 transition-colors duration-300 hover:text-blue-500 lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400"
          href="#"
        >
          Home
        </a>
        <a
          class="transform text-gray-700 transition-colors duration-300 hover:text-blue-500 lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400"
          href="#"
        >
          About
        </a>
      </div>

      <a
        class="mt-4 block rounded-lg bg-blue-600 px-5 py-2 text-center text-sm capitalize text-white hover:bg-blue-500 lg:mt-0 lg:w-auto"
        href="#"
      >
        Get started
      </a>
    </div>
  </nav>
</template>

<style scoped lang="scss"></style>
