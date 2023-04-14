<script setup>
 import Search from '../components/Search.vue'
</script>

<template>
  <div class="about">
    <Search />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
