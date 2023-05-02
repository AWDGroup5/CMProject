<script setup>
  defineProps({
    msg: {
      type: String,
      required: true
    }
  });
</script>

<template>
  <div class="greetings">
    <h1 class="red">{{ msg }}</h1>
    <h3>
      Follow your heart
    </h3>
  </div>
</template>

<style scoped>
  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
  }

  h3 {
    font-size: 1.2rem;
  }

  .greetings h1,
  .greetings h3 {
    font-style: Bold;
    text-align: center;
  }

</style>
