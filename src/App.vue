<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LocaleChanger from './components/LocaleChanger.vue';
</script>

<template>
  <div class="bg-emerald-400 h-dvh p-4">
    <div class="container mx-auto">
      <header class="flex justify-between mb-8">
        <RouterLink to="/" class="font-sans text-black font-bold underline">
          <!-- <img alt="Vue logo" class="logo fill-white" src="@/assets/logo.svg" width="20" height="20" /> -->
          Home
        </RouterLink>
        <LocaleChanger />
      </header>
      <RouterView />
    </div>
  </div>
</template>

