<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LocaleChanger from './components/LocaleChanger.vue';

</script>

<template>
  <h1>{{ $t('message.hello') }}</h1>
  <header>
    <RouterLink to="/">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="20" height="20" />
    </RouterLink>
    <h1 class="text-3xl font-bold text-green-500 underline">Service Form</h1>
    <LocaleChanger />
  </header>
  <RouterView />
</template>

