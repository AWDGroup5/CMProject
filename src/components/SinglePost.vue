<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
let props = defineProps({
  posts: {
    type: Array,
    default: () => {},
  },
})
const route = useRoute();
console.log(props.posts);
const post = computed(() => {
  const postID = route.params.postID;
  return props.posts.find((p) => p.slug === postID);
});
const title = computed(() => {
  return post.value && post.value.title;
});
const content = computed(() => {
  return post.value && post.value.content;
});
</script>

<template>
  <div>
    <h3 style="color: #696969">Post: {{ title }}</h3>
    <p>{{ content }}</p>
  </div>
</template>