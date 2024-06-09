<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Search from './components/Search.vue'
</script>

<template>
  <!-- <div class="search">
    <Search />
    </div> -->
  <div class="content">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
* {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
