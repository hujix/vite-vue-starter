<script setup lang="ts">
import useUserStore from "@/store/modules/user";

const userStore = useUserStore();
</script>
<template>
  <div class="mt-7 text-center">
    <h1>Home</h1>
    <span>Username: {{ userStore }}</span>
  </div>
</template>
<style scoped lang="scss"></style>
