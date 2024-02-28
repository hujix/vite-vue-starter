<script setup lang="ts">
import PageHeader from "@/components/PageHeader.vue";
</script>

<template>
  <main class="h-screen bg-white dark:bg-gray-900">
    <header>
      <PageHeader />
    </header>
    <section>
      <router-view />
    </section>
  </main>
</template>

<style scoped lang="scss"></style>
