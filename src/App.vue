<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="20" height="20" />
    </RouterLink>
    <h1 class="text-3xl font-bold text-green-500 underline">Service Form</h1>  
  </header>
  <RouterView />
</template>

